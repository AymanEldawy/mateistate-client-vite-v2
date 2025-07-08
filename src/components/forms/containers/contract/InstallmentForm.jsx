import Btn from "@/components/shared/Btn";
import Loading from "@/components/shared/Loading";
import Modal from "@/components/shared/Modal";
import QUERY_KEYS from "@/data/queryKeys";
import {
  generatePaymentBatches,
  mergeInstallmentAndFirstTabData,
  onWatchChangesInstallmentTab,
} from "@/helpers/contract/installmentHelpers";
import {
  INSTALLMENT_EACH_DURATION,
  INSTALLMENT_EACH_NUMBER,
} from "@/helpers/DEFAULT_OPTIONS";
import { getLeavesAccounts } from "@/services/accountService";
import { getAllBanks } from "@/services/bankService";
import {
  createInstallment,
  getInstallmentByContractId,
  installmentCanUpdateCheques,
  updateInstallment,
} from "@/services/installmentService";
import { getNameFromList, getUnitInfo } from "@/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  RHFCheckbox,
  RHFDatePicker,
  RHFInput,
  RHFInputAmount,
  RHFSelectField,
} from "../../fields";
import { CurrencyFieldGroup } from "../../global";
import { FormHeader } from "../../wrapper";
import { onWatchChangesInstallmentGridTab } from "./../../../../helpers/contract/installmentHelpers";
import InstallmentGrid from "./InstallmentGrid";

const updateNote = (watch, setValue, CACHE_LIST, index) => {
  let item = watch(`installmentGrid.${index}`);
  const client = CACHE_LIST?.client?.find(
    (c) => c.id === watch(`contract.clientId`)
  );
  const bankId = item?.bankId || watch("installment.bankId");
  const bank = CACHE_LIST?.bank?.find((c) => c.id === bankId);
  const note1 = `received chq number ${item?.internalNumber || "ـــ"} from mr ${
    client?.name || "ـــ"
  } ${item?.amount || "ـــ"} due date ${item?.dueDate || "ـــ"} end date ${
    item?.endDueDate || "ـــ"
  } bank name ${bank?.name || "ـــ"}`;
  setValue(`installmentGrid.${index}.note1`, note1);
};

const installmentValidation = (watch, setError) => {
  if (+watch("installment.firstBatch") > +watch("installment.totalAmount")) {
    toast.error(
      `The First Cash Payment must be equal or less than Total Amount`,
      { autoClose: false }
    );
    return;
  }

  if (!watch("installment.currencyId")) {
    toast.error(`Currency is Required`, { autoClose: false });
    return;
  }

  if (watch("installment.hasFirstBatch")) {
    if (!watch("installment.paymentDate")) {
      // toast.error(`The Payment Date is required`, { autoClose: false });
      setError("installment.paymentDate", {
        type: "required",
        message: "The Payment Date is required",
      });
      return;
    }

    if (!watch("installment.firstBatch")) {
      setError("installment.firstBatch", {
        type: "required",
        message: "The First Cash payment is required",
      });
      return;
    }
  }

  return true;
};

const InstallmentForm = ({
  onClose,
  contractId,
  outerClose,
  pattern,
  contract,
}) => {
  const [refresh, setRefresh] = useState(false);
  const [canUpdate, setCanUpdate] = useState(true);
  const methods = useForm();
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = methods;
  const { replace } = useFieldArray({
    control,
    name: "installmentGrid",
  });
  const CACHE_LIST = {};

  const unit = useMemo(
    () => getUnitInfo(contract?.flatType),
    [contract?.flatType]
  );

  const { isLoading } = useQuery({
    queryKey: ["installment", contract?.id],
    queryFn: async () => {
      const response = await getInstallmentByContractId(contract?.id);
      console.log("called here");
      if (response?.success) {
        console.log("can t called here");

        const res = await installmentCanUpdateCheques(
          response?.installment?.id
        );
        if (res?.success) setCanUpdate(res?.canUpdate);
      }
      reset(response);
      return response;
    },
    enabled: !!contract?.id,
  });

  const { data: banks } = useQuery({
    queryKey: [QUERY_KEYS.Bank],
    queryFn: async () => {
      const response = await getAllBanks();
      return response?.data || [];
    },
  });

  const { data: clients } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, "leave"],
    queryFn: async () => {
      const response = await getLeavesAccounts();
      return response?.data || [];
    },
  });

  useEffect(() => {
    if (!contract?.id) return;
    mergeInstallmentAndFirstTabData(contract, setValue, watch);
  }, [contractId]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("installment.") !== -1) {
        clearErrors(name);
      }
      if (name?.indexOf("installmentGrid") !== -1 && type) {
        updateNote(watch, setValue, name?.split(".")[1]);
      }
      if (
        name === "installment.hasFirstBatch" &&
        !watch("installment.hasFirstBatch")
      ) {
        setValue("installment.firstBatch", 0);
        setValue("installment.paymentDate", null);
      }

      if (name?.indexOf(`installment.`) !== -1) {
        onWatchChangesInstallmentTab(
          name?.split(".")?.at(-1),
          watch(name),
          setValue,
          watch
        );
      }

      if (name?.indexOf(`installmentGrid`) !== -1) {
        let subName = name?.split(".")?.at(-1);
        switch (subName) {
          case "dueDate":
          case "number":
          case "amount":
          case "bankId":
          case "endDueDate": {
            onWatchChangesInstallmentGridTab(name, setValue, watch, {
              contract,
            });
            break;
          }
          default:
            return;
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch("installment")]);

  const generateCheques = () => {
    generatePaymentBatches(
      watch,
      setValue,
      unit?.value,
      {
        banks,
        clients,
        contract,
      },
      reset
    );
    setRefresh((p) => !p);
  };

  const handleSubmitInstallments = async (values) => {
    if (!installmentValidation(watch, setError)) {
      return;
    }

    const clientName = getNameFromList(clients, contract.clientId);
    const bankName = getNameFromList(banks, values?.installment.bankId);

    const buildingNumber = CACHE_LIST?.building?.find(
      (c) => c.id === contract.buildingId
    )?.number;

    const assetsNumber = CACHE_LIST?.[unit?.table]?.find(
      (c) => c.id === contract?.[unit?.value]
    )?.[`${unit?.label}`];

    let note = `received first payment from mr ${clientName} due date ${new Date(
      values?.installment.paymentDate
    )?.toLocaleDateString("en-UK")} bank ${bankName} ${
      buildingNumber ? `building number ${buildingNumber}` : ""
    }  ${assetsNumber ? `${unit?.table} number ${assetsNumber}` : ""} `;

    try {
      console.log(values, "values", watch());

      setValue("installment.contractId", contract?.id);
      let response = null;
      if (values?.installment.id) {
        response = await updateInstallment(values?.installment.id, values);
      } else {
        response = await createInstallment(values);
      }
      toast.success("Successfully saved Installment");
    } catch (error) {
      toast.error("Failed to save Installment");
    }
  };

  return (
    <>
      {isLoading || isSubmitting ? <Loading /> : null}
      <Modal
        onClose={onClose}
        outerClose
        open={true}
        containerClassName="z-[101]"
        bodyClassName="!p-0"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmitInstallments)} noValidate>
            <FormHeader header="installment" onClose={outerClose} />
            <div className="p-4">
              <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                <RHFInputAmount
                  label="totalAmount"
                  name={`installment.totalAmount`}
                  inputClassName={"bg-blue-100"}
                  readOnly
                />
                <RHFInputAmount
                  label="restAmount"
                  name={`installment.restAmount`}
                  readOnly
                />
                <CurrencyFieldGroup name="installment.currencyId" />
                <div
                  className={`${
                    watch("installment.hasFirstBatch") ? "col-span-2" : "ـــ"
                  } contents gap-2 items-center justify-between`}
                >
                  <RHFCheckbox
                    label="hasFirstBatch"
                    name={`installment.hasFirstBatch`}
                    containerClassName="shrink-0"
                  />

                  <RHFInputAmount
                    label="firstBatch"
                    name={`installment.firstBatch`}
                    containerClassName="!flex-1"
                    readOnly={!watch("installment.hasFirstBatch")}
                  />
                  <RHFDatePicker
                    label="paymentDate"
                    name={`installment.paymentDate`}
                    readOnly={!watch("installment.hasFirstBatch")}
                  />
                  {/* <div className="flex gap-x-6 items-center w-full">
                  </div> */}
                  {/* {!watch("installment.hasFirstBatch") ? null : (
                    )}
                  {!watch("installment.hasFirstBatch") ? null : (
                  
                  )} */}
                </div>

                <RHFInput
                  label="installmentsNumbers"
                  name={`installment.installmentsNumbers`}
                  type="number"
                />

                <RHFSelectField
                  label="each_number"
                  key={`installment.eachNumber`}
                  name={`installment.eachNumber`}
                  options={INSTALLMENT_EACH_NUMBER}
                />
                <RHFSelectField
                  label="each_duration"
                  key={`installment.eachDuration`}
                  name={`installment.eachDuration`}
                  options={INSTALLMENT_EACH_DURATION}
                />
                <RHFDatePicker
                  label="firstInstallmentDate"
                  name={`installment.firstInstallmentDate`}
                />
                <RHFInput
                  label="beginNumber"
                  name={`installment.beginNumber`}
                  type="number"
                />

                <RHFSelectField
                  label="bankId"
                  name={`installment.bankId`}
                  options={banks}
                />
              </div>
              <InstallmentGrid />
              <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
                <Btn
                  disabled={
                    !watch("installment.eachNumber") ||
                    !watch("installment.installmentsNumbers") ||
                    !watch("installment.eachDuration") ||
                    !canUpdate
                    // ||
                    // !watch("installment.rest_amount")
                  }
                  type="button"
                  kind="warn"
                  onClick={generateCheques}
                >
                  {watch("installmentGrid")?.length
                    ? "ReGenerate cheques"
                    : "Generate"}
                </Btn>
                <Btn
                  kind="primary"
                  disabled={watch("installmentGrid")?.length < 1}
                >
                  {watch("installment.id") ? "Modify" : "Save"}
                </Btn>
              </div>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default InstallmentForm;

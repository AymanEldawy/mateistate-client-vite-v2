import { dividePrice } from "@/helpers/contract/contractHelpers";
import { COUNTER_CHQ_NUMBER, generatePaymentBatches, mergeInstallmentAndFirstTabData } from "@/helpers/contract/installmentHelpers";
import { getAccountReceivable } from "@/services/accountService";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import InstallmentGrid from "./InstallmentGrid";
import Btn from "@/components/shared/Btn";
import { getNameFromList } from "@/utils/functions";
import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFInputAmount, RHFSelectField } from "../../fields";
import Modal from "@/components/shared/Modal";
import Loading from "@/components/shared/Loading";
import { FormHeader } from "../../wrapper";
import { INSTALLMENT_EACH_DURATION, INSTALLMENT_EACH_NUMBER } from "@/helpers/DEFAULT_OPTIONS";


const updateNote = (watch, setValue, CACHE_LIST, index) => {
  let item = watch(`installment_grid.${index}`)
  const client = CACHE_LIST?.client?.find(
    (c) => c.id === watch(`contract.client_id`)
  );
  const bank_id = item?.bank_id || watch("installment.bank_id");
  const bank = CACHE_LIST?.bank?.find((c) => c.id === bank_id);
  const note1 = `received chq number ${item?.internal_number || 'ـــ'} from mr ${client?.name || 'ـــ'} ${item?.amount || 'ـــ'} due date ${item?.due_Date || 'ـــ'} end date ${item?.end_due_date || 'ـــ'} bank name ${bank?.name || 'ـــ'}`;
  setValue(`installment_grid.${index}.note1`, note1)
}







const installmentValidation = (watch, setError) => {
  if (+watch("installment.first_batch") > +watch("installment.total_amount")) {
    toast.error(
      `The First Cash Payment must be equal or less than Total Amount`,
      { autoClose: false }
    );
    return;
  }

  if (!watch("installment.currency_id")) {
    toast.error(`Currency is Required`, { autoClose: false });
    return;
  }

  if (watch("installment.has_first_batch")) {
    if (!watch("installment.payment_date")) {
      // toast.error(`The Payment Date is required`, { autoClose: false });
      setError("installment.payment_date", {
        type: "required",
        message: "The Payment Date is required",
      });
      return;
    }

    if (!watch("installment.first_batch")) {
      setError("installment.first_batch", {
        type: "required",
        message: "The First Cash payment is required",
      });
      return;
    }
  }

  return true;
};


const InstallmentForm = ({
  CACHE_LIST,
  onClose,
  contract_id,
  assetType,
  isInstallmentOpen,
  setIsInstallmentOpen
}) => {
  const { watch, setValue, setError, clearErrors } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isInstallmentOpen && !watch("installment.total_amount")) {
      mergeInstallmentAndFirstTabData(watch("contract"), setValue, watch);
    }
  }, [isInstallmentOpen]);



  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("installment.") !== -1) {
        clearErrors(name);
      }
      if (name?.indexOf('installment_grid') !== -1 && type) {
        updateNote(watch, setValue, CACHE_LIST, name?.split('.')[1])
      }
      if (name === "installment.has_first_batch" && !watch("installment.has_first_batch")) {
        setValue('installment.first_batch', 0)
        setValue('installment.payment_date', null)
      }
    });
    return () => subscription.unsubscribe();
  }, [watch("installment")]);

  const onSubmitInstallment = async () => {
    if (!installmentValidation(watch, setError)) {
      return;
    }
    setIsLoading(true);

    const installmentData = watch("installment");
    const installmentGridData = watch("installment_grid");
    const clientName = getNameFromList(CACHE_LIST?.client, watch(`contract.client_id`))
    const bankName = getNameFromList(CACHE_LIST?.bank, watch(`installment.bank_id`))

    const buildingNumber = CACHE_LIST?.building?.find(
      (c) => c.id === watch(`contract.building_id`)
    )?.number;

    const assetsNumber = CACHE_LIST?.[assetType]?.find(
      (c) => c.id === watch(`contract.${assetType}_id`)
    )?.[`${assetType}_no`];

    let note = `received first payment from mr ${clientName} due date ${new Date(
      watch("installment.payment_date")
    )?.toLocaleDateString("en-UK")} bank ${bankName} ${buildingNumber ? `building number ${buildingNumber}` : ""
      }  ${assetsNumber ? `${assetType} number ${assetsNumber}` : ""} `;

    try {
      // await insertIntoContractInstallment({
      //   installment: installmentData,
      //   installment_grid: installmentGridData,
      //   contract_id,
      //   firstTabData: watch("contract"),
      //   note,
      // });
      // const { installment, installment_grid, voucher_grid } =
      //   await getInstallmentData(contract_id);

      // if (installment?.success) {
      //   setValue("voucher_grid", voucher_grid?.result);
      //   setValue("installment_grid", installment_grid?.result);
      // }
      toast.success("Successfully saved Installment");
    } catch (error) {
      toast.error("Failed to save Installment");
    }
    setIsLoading(false);
  };  

  return (
    <>
      {isLoading ? <Loading /> : null}
      <Modal
        onClose={onClose}
        outerClose
        open={true}
        containerClassName="z-[101]"
        bodyClassName="!p-0"

      >
        <FormHeader
          header="installment"
          onClose={() => setIsInstallmentOpen(false)}
        />
        <div className="p-4">
          <div className="grid grid-cols-3 gap-x-6 gap-y-2">

            <RHFInputAmount
              label="total_amount"
              name={`installment.total_amount`}
              inputClassName={"bg-blue-100"}
              readOnly
            />
            <RHFInputAmount
              label="rest_amount"
              name={`installment.rest_amount`}
              readOnly
            />
            <div className={`${watch('installment.has_first_batch') ? 'col-span-2' : 'ـــ'} contents gap-2 items-center justify-between`}>

              <div className="flex gap-x-6 items-center w-full">
                <RHFCheckbox
                  label="has_first_batch"
                  name={`installment.has_first_batch`}
                  containerClassName="shrink-0"
                />

                {!watch("installment.has_first_batch") ? null : (
                  <RHFInput
                    label="first_batch"
                    name={`installment.first_batch`}
                    containerClassName="!flex-1"
                  />
                )}
              </div>
              {!watch("installment.has_first_batch") ? null : (
                <RHFInput
                  label="payment_date"
                  name={`installment.payment_date`}
                />
              )}
            </div>
            <RHFInput
              label="installments_numbers"
              name={`installment.installments_numbers`}
            />

            <RHFSelectField
              label="each_number"
              key={`installment.each_number`}
              name={`installment.each_number`}
              options={INSTALLMENT_EACH_NUMBER}
            />
            <RHFSelectField
              label="each_duration"
              key={`installment.each_duration`}
              name={`installment.each_duration`}
              options={INSTALLMENT_EACH_DURATION}
            />
            <RHFInput
              label="first_installment_date"
              name={`installment.first_installment_date`}
            />
            <RHFInput
              label="begin_number"
              name={`installment.begin_number`}
            />

            <RHFAsyncSelectField
              label="bank_id"
              name={`installment.bank_id`}
              table={"bank"}
              CACHE_LIST={CACHE_LIST}
            />
          </div>
          <InstallmentGrid />
          <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
            <Btn
              disabled={
                !watch("installment.each_number") ||
                !watch("installment.installments_numbers") ||
                !watch("installment.each_duration") 
                // ||
                // !watch("installment.rest_amount")
              }
              type="button"
              kind="warn"
              onClick={() => {
                generatePaymentBatches(watch, setValue, CACHE_LIST, assetType);
                // setTotalChqAmount(watch("installment.rest_amount"));
              }}
            >
              {watch("installment_grid")?.length ? "ReGenerate cheques" : "Generate"}
            </Btn>
            <Btn
              type="button"
              kind="primary"
              disabled={watch("installment_grid")?.length < 1}
              onClick={onSubmitInstallment}
            >
              {watch("installment.id") ? "Modify" : "Save"}
            </Btn>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InstallmentForm;

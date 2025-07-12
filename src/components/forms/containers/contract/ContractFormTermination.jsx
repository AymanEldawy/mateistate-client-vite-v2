import Btn from "@/components/shared/Btn";
import { ViewEntry } from "@/components/shared/ViewEntry";
import { CREATED_FROM_CONTRACT_FINES } from "@/data/GENERATE_STARTING_DATA";
import { onWatchChangesTerminationTab } from "@/helpers/contract/contractHelpers";
import { CONTRACT_ROUND_TO, CONTRACT_STATUS } from "@/helpers/DEFAULT_OPTIONS";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  RHFCheckbox,
  RHFDatePicker,
  RHFInput,
  RHFInputAmount,
  RHFSelectField,
  RHFTextarea,
} from "../../fields";
import { AccountLeaveField } from "../../global";
import TableForm from "../../wrapper/TableForm";

const ContractFormTermination = () => {
  const { watch, setValue } = useFormContext();
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let key = name?.split(".")?.at(-1);
      if (name?.indexOf(`contractTermination`) !== -1) {
        console.log("called termination");

        onWatchChangesTerminationTab(
          name?.split(".")?.at(-1),
          watch(name),
          watch,
          setValue
        );
      }

      if (key === "terminated") {
        if (watch(name)) {
          setValue("contract.status", CONTRACT_STATUS.Terminate_and_Evacuated);
        } else {
          setValue("contract.status", CONTRACT_STATUS.Valid);
        }
      }

      if (key === "terminated") {
        if (
          Date.parse(watch(name)) <
          Date.parse(watch("contract.startDurationDate"))
        ) {
          toast.error(
            `Failed to set Date, termination date must be grater than start date`
          );
          setValue("contractTermination.terminationDate", new Date());
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <div className="bg-gray-100 border-b flex items-center ">
        <Btn
          type="button"
          containerClassName="!rounded-none"
          kind={stage === 2 ? "info" : "default"}
          onClick={() => setStage(2)}
          isActive={stage === 2}
        >
          Termination fees
        </Btn>
        <Btn
          type="button"
          containerClassName="!rounded-none"
          kind={stage === 1 ? "info" : "default"}
          onClick={() => setStage(1)}
          isActive={stage === 1}
        >
          Termination
        </Btn>
      </div>
      <div className="">
        {stage === 1 ? (
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-4 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-10">
                <RHFCheckbox
                  name="contractTermination.terminated"
                  label="terminated"
                />
                <div className="flex items-center gap-4">
                  <RHFCheckbox
                    name="contractTermination.genEntries"
                    label="genEntries"
                  />
                  {watch(`contractTermination.id`) ? (
                    <ViewEntry id={watch(`contractTermination.id`)} />
                  ) : null}
                </div>
              </div>
              <RHFDatePicker
                name="contractTermination.terminationDate"
                label="terminationDate"
              />
              <RHFInput
                name="contractTermination.ownerTotalAmount"
                label="ownerTotalAmount"
                type="number"
              />
              <div className="grid grid-cols-2 gap-2">
                <RHFInput
                  name="contractTermination.ownerRestAmount"
                  label="ownerRestAmount"
                  containerClassName="flex-1"
                  type="number"
                />
                <RHFSelectField
                  name="contractTermination.roundTo"
                  label="roundTo"
                  labelClassName="!w-fit"
                  selectClassName="w-full"
                  value={watch(`contractTermination.roundTo`)}
                  options={CONTRACT_ROUND_TO}
                />
              </div>
              <RHFTextarea
                name="contractTermination.revenueNote"
                label="revenueNote"
                containerClassName="flex-1"
              />
            </div>
            <div className="flex flex-col gap-4">
              <RHFInput name="contractTermination.fines" label="fines" />
              <RHFDatePicker name="contractTermination.date" label="date" />
              <RHFCheckbox
                name="contractTermination.evacuationRequest"
                label="evacuationRequest"
              />
              <RHFDatePicker
                name="contractTermination.evacuationDate"
                label="evacuationDate"
                containerClassName="flex-1"
                readOnly={!watch(`contractTermination.evacuationRequest`)}
              />
              <RHFCheckbox
                name="contractTermination.clearancePrinted"
                label="clearancePrinted"
              />
              {watch(`contractTermination.clearancePrinted`) ? (
                <RHFDatePicker
                  name="contractTermination.clearancePrintedDate"
                  label="clearancePrintedDate"
                />
              ) : null}
              <Btn
                kind="info"
                containerClassName="!w-fit text-sm"
                onClick={() => {}}
              >
                Print Clearance
              </Btn>
            </div>
          </div>
        ) : (
          <div className="">
            <TableForm
              renderFields={(item, index) => (
                <>
                  <td>
                    <RHFDatePicker
                      name={`contractFinesGrid.${index}.createdAt`}
                    />
                  </td>
                  <td>
                    <RHFInputAmount
                      name={`contractFinesGrid.${index}.feeAmount`}
                    />
                  </td>
                  <td>
                    <AccountLeaveField
                      name={`contractFinesGrid.${index}.accountId`}
                    />
                  </td>
                  <td>
                    <RHFInput name={`contractFinesGrid.${index}.notes`} />
                  </td>
                </>
              )}
              gridName={"contractFinesGrid"}
              headers={["date", "fee_amount", "account_id", "notes"]}
            />
            <div className="mt-4" />
            {watch(`contractFinesGrid.0.id`) ? (
              <ViewEntry
                id={watch(`contract.id`)}
                created_from={CREATED_FROM_CONTRACT_FINES}
              />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default ContractFormTermination;

import Btn from "@/components/shared/Btn";
import { CONTRACT_ROUND_TO, CONTRACT_STATUS } from "@/helpers/DEFAULT_OPTIONS";
import { useVoucherEntriesView } from "@/hook/useVoucherEntriesView";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFDatePicker, RHFInput, RHFInputAmount, RHFSelectField, RHFTextarea } from "../../fields";
import { ViewEntry } from "@/components/shared/ViewEntry";
import TableForm from "../../wrapper/TableForm";
import { CREATED_FROM_CONTRACT_FINES } from "@/data/GENERATE_STARTING_DATA";
import { AccountField } from "../../global";

const ContractFormTermination = () => {
  const { watch, setValue } = useFormContext();
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let key = name?.split(".")?.at(-1);
      switch (key) {
        case "terminated":
          if (watch(name)) {
            setValue("contract.status", CONTRACT_STATUS.Terminate_and_Evacuated);
          } else {
            setValue("contract.status", CONTRACT_STATUS.Valid);
          }
          break;

        default:
          return;
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
          kind={stage === 2 ? "info" : 'default'}
          onClick={() => setStage(2)}
          isActive={stage === 2}
        >
          Termination fees
        </Btn>
        <Btn
          type="button"
          containerClassName="!rounded-none"
          kind={stage === 1 ? "info" : 'default'}
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
                  label="terminated" />
                <div className="flex items-center gap-4">
                  <RHFCheckbox
                    name="contractTermination.genEntries"
                    label="genEntries" />
                  {watch(`contractTermination.id`) ? <ViewEntry id={watch(`contractTermination.id`)} /> : null}
                </div>
              </div>
              <RHFInput
                name="contractTermination.terminationDate"
                label="terminationDate"
              />
              <RHFInput

                name="contractTermination.ownerTotalAmount"
                label="ownerTotalAmount"
              />
              <div className="grid grid-cols-2 gap-2">
                <RHFInput
                  name="contractTermination.ownerRestAmount"
                  label="ownerRestAmount"
                  containerClassName="flex-1"
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

              <RHFCheckbox
                name="contractTermination.evacuationRequest"
                label="evacuationRequest"
              />
              <RHFInput
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
                <RHFInput
                  name="contractTermination.clearancePrintedDate"
                  label="clearancePrintedDate"
                />
              ) : null}
              <Btn kind="info" containerClassName="!w-fit text-sm" onClick={() => { }}>
                Print Clearance
              </Btn>
            </div>
          </div>
        ) :
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

                      name={`contractFinesGrid.${index}.fee_amount`}
                    />
                  </td>
                  <td>
                    <AccountField

                      name={`contractFinesGrid.${index}.account_id`}
                    />
                  </td>
                  <td>
                    <RHFInput

                      name={`contractFinesGrid.${index}.notes`}
                    />
                  </td>
                </>
              )}
              gridName={"contractFinesGrid"}
              headers={[
                "date",
                "fee_amount",
                "account_id",
                "notes",
              ]}
            />
            <div className="mt-4" />
            {watch(`contractFinesGrid.0.id`) ? <ViewEntry id={watch(`contract.id`)} created_from={CREATED_FROM_CONTRACT_FINES} /> : null}
          </div>
        }
      </div>
    </>
  );
};

export default ContractFormTermination;

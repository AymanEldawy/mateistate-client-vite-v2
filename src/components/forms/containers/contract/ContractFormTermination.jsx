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

const ContractFormTermination = ({
  CACHE_LIST,
  tab,
  onClickRenew,
}) => {
  const {
    watch,
    setValue,
    errors,
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const { dispatchVoucherEntries } = useVoucherEntriesView();
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
                  name="contract_termination.terminated"
                  label="terminated" />
                <div className="flex items-center gap-4">
                  <RHFCheckbox
                    name="contract_termination.gen_entries"
                    label="gen_entries" />
                  {watch(`contract_termination.id`) ? <ViewEntry id={watch(`contract_termination.id`)} /> : null}
                </div>
              </div>
              <RHFInput

                name="contract_termination.termination_date"
                label="termination_date"
                tab={tab}
              />
              <RHFInput

                name="contract_termination.owner_total_amount"
                label="owner_total_amount"
              />
              <div className="grid grid-cols-2 gap-2">
                <RHFInput
                  name="contract_termination.owner_rest_amount"
                  label="owner_rest_amount"
                  containerClassName="flex-1"
                />
                <RHFSelectField
                  name="contract_termination.round_to"
                  label="round_to"
                  labelClassName="!w-fit"
                  selectClassName="w-full"
                  value={watch(`contract_termination.round_to`)}
                  options={CONTRACT_ROUND_TO}
                />
              </div>
              <RHFTextarea
                name="contract_termination.revenue_note"
                label="revenue_note"
                containerClassName="flex-1"
              />
            </div>
            <div className="flex flex-col gap-4">

              <RHFCheckbox
                name="contract_termination.evacuation_request"
                label="evacuation_request"
              />
              <RHFInput
                name="contract_termination.evacuation_date"
                label="evacuation_date"
                containerClassName="flex-1"
                readOnly={!watch(`contract_termination.evacuation_request`)}
              />
              <RHFCheckbox
                name="contract_termination.clearance_printed"
                label="clearance_printed"
              />
              {watch(`contract_termination.clearance_printed`) ? (
                <RHFInput
                  name="contract_termination.clearance_printed_date"
                  label="clearance_printed_date"
                />
              ) : null}
              <Btn kind="info" containerClassName="!w-fit text-sm">
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

                      name={`contract_fines_grid.${index}.created_at`}
                    />
                  </td>
                  <td>
                    <RHFInputAmount

                      name={`contract_fines_grid.${index}.fee_amount`}
                    />
                  </td>
                  <td>
                    <AccountField

                      name={`contract_fines_grid.${index}.account_id`}
                    />
                  </td>
                  <td>
                    <RHFInput

                      name={`contract_fines_grid.${index}.notes`}
                    />
                  </td>
                </>
              )}
              gridName={"contract_fines_grid"}
              headers={[
                "date",
                "fee_amount",
                "account_id",
                "notes",
              ]}
            />
            <div className="mt-4" />
            {watch(`contract_fines_grid.0.id`) ? <ViewEntry id={watch(`contract.id`)} created_from={CREATED_FROM_CONTRACT_FINES} /> : null}
          </div>
        }
      </div>
    </>
  );
};

export default ContractFormTermination;

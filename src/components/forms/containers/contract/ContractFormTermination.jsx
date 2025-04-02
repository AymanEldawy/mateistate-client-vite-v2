import Btn from "@/components/shared/Btn";
import { CONTRACT_STATUS } from "@/helpers/DEFAULT_OPTIONS";
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
      <div className="bg-gray-100 border-b  flex items-center -mt-2 w-fit">
        <Btn
          type="button"
          kind="info"
          onClick={() => setStage(2)}
          isActive={stage === 2}
        >
          Termination fees
        </Btn>
        <Btn
          type="button"
          kind="info"
          onClick={() => setStage(1)}
          isActive={stage === 1}
        >
          Termination
        </Btn>
      </div>
      <div className="">
        {stage === 1 ? (
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-10">
                <RHFCheckbox name="terminated" label="terminated" />
                <div className="flex items-center gap-4">
                  <RHFCheckbox name="gen_entries" label="gen_entries" />
                  {watch(`${tab}.id`) ? <ViewEntry id={watch(`${tab}.id`)} /> : null}
                </div>
              </div>
              <RHFInput
                name="termination_date" label="termination_date"
                updatedName={`${tab}.termination_date`}
                // values={values}
                tab={tab}
              />
              <RHFInput
                name="owner_total_amount" label="owner_total_amount"
                updatedName={`${tab}.owner_total_amount`}
                // values={values}
                tab={tab}
              />
              <div className="grid grid-cols-2 gap-2">
                <RHFInput
                  name="owner_rest_amount" label="owner_rest_amount"
                  containerClassName="flex-1"
                  updatedName={`${tab}.owner_rest_amount`}
                  // values={values}
                  tab={tab}
                />
                <RHFSelectField
                  name="round_to" label="round_to"
                  updatedName={`${tab}.round_to`}
                  labelClassName="!w-fit"
                  selectClassName="w-full"
                  // containerClassName="w-full"
                  // values={values}
                  tab={tab}
                  value={watch(`${tab}.round_to`)}
                />
              </div>
              <RHFTextarea
                name="revenue_note" label="revenue_note"
                containerClassName="flex-1"
                updatedName={`${tab}.revenue_note`}
                // values={values}
                tab={tab}
              />
            </div>
            <div className="flex flex-col gap-4">

              <RHFCheckbox
                name="evacuation_request" label="evacuation_request"
                updatedName={`${tab}.evacuation_request`}
              />
              <RHFInput
                name="evacuation_date" label="evacuation_date"
                containerClassName="flex-1"
                updatedName={`${tab}.evacuation_date`}
                // values={values}
                readOnly={!watch(`${tab}.evacuation_request`)}
                tab={tab}
              />
              <RHFCheckbox
                name="clearance_printed" label="clearance_printed"
                updatedName={`${tab}.clearance_printed`}
              />
              {watch(`${tab}.clearance_printed`) ? (
                <RHFInput
                  name="clearance_printed_date" label="clearance_printed_date"
                  updatedName={`${tab}.clearance_printed_date`}
                  // values={values}
                  tab={tab}
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
                      label="date"
                      name={`contract_fines_grid.${index}.created_at`}
                    />
                  </td>
                  <td>
                    <RHFInputAmount
                      label="fee_amount"
                      name={`contract_fines_grid.${index}.fee_amount`}
                    />
                  </td>
                  <td>
                    <AccountField
                      label="account_id"
                      name={`contract_fines_grid.${index}.account_id`}
                    />
                  </td>
                  <td>
                    <RHFInput
                      label="notes"
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

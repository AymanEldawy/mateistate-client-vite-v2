import { useFormContext } from "react-hook-form";
import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { CONTRACT_PAID_TYPE } from "@/helpers/DEFAULT_OPTIONS";

const ContractFormGeneral = () => {
  const contractType = 'rent';
  const assetType = 'apartment';
  const { watch } = useFormContext();

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 w-full  items-start">
        <RHFInput
          label="gov_number"
          name={`contract.gov_number`}
        />
        <RHFInput
          label="prev_contracts_no"
          name={`contract.contracts_number_prev`}
          readOnly={watch('contract.id')}
        />
        <RHFDatePicker
          label={`issue_date`}
          name={`contract.issue_date`}
        />

      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-6 mt-4 w-full  items-start">
        <div className="grid grid-cols-1 gap-y-2 gap-x-6 ">
          <RHFAsyncSelectField
            options={[]}
            label="client_id"
            name="contract.client_id"
            allowAdd
          />
          <RHFSelectField
            options={[]}
            label="building_id"
            name="contract.building_id"
            />
          <RHFSelectField
            options={[]}
            label="client_id"
            name={`contract.${assetType}_id`}
          />
          {/* {["client_id", "building_id", `${assetType}_id`]?.map(
            (field, i) => {
              let name = field?.replace("_id", "");
              let table = name;
              if (field === "client_id") {
                name = UNIQUE_REF_TABLES.clients;
                table = "account";
              }
              return (
                <UniqueFieldNormal
                  key={i === 2 ? watch('contract.building_id') : `${field}-${i}`}
                  {...fieldsHash?.[field]}
                  name={`contract.${field}`}
                  table={table}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                  readOnly={i === 2 && !watch('contract.building_id')}
                />
              );
            }
          )} */}
          <RHFInput
            label={`description`}
            name={`contract.description`}
            containerClassName=" col-span-full"
          />
        </div>
        <div
          className={`grid grid-cols-1 gap-y-2 gap-x-6`}
        >

          {contractType === "rent" ? (
            <>
              <RHFSelectField
                label={`contract_duration`}
                name={`contract.contract_duration`}
              />
              <RHFInput
                label={`start_duration_date`}
                name={`contract.start_duration_date`}
              />
              <RHFInput
                label={`end_duration_date`}
                name={`contract.end_duration_date`}
                readOnly={watch(`contract.contract_duration`) < 4}
              />
            </>
          ) : (
            <>
              <RHFInput
                label={`property_delivery_date`}
                name={`contract.property_delivery_date`}
              />
            </>
          )}

          <RHFSelectField
            label={`lessor_id`}
            name={`contract.lessor_id`}
            table={'lessor'}
          />
        </div>

        <div className="flex flex-col gap-y-2 gap-x-6">
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.revenue_account_id`) ? "bg-blue-100" : ""
            }
            label={`revenue_account_id`}
            name={`contract.revenue_account_id`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.discount_account_id`) ? "bg-blue-100" : ""
            }
            label={`discount_account_id`}
            name={`contract.discount_account_id`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.insurance_account_id`) ? "bg-blue-100" : ""
            }
            label={`insurance_account_id`}
            name={`contract.insurance_account_id`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.vat_account_id`) ? "bg-blue-100" : ""
            }
            label={`vat_account_id`}
            name={`contract.vat_account_id`}
            table={"account"}
          />
        </div>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-3  gap-x-6 mb-2 mt-4`}>
        <div className="flex flex-col gap-y-2">
          {[
            "contract_value",
            "price_before_vat",
            "final_price",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
              readOnly={field === "final_price" || field === 'price_before_vat'}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discount_rate",
            "vat_rate",
            "current_securing_value",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discount_value",
            "vat_value",
            "previous_securing",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
              readOnly
            />
          ))}
        </div>
        <RHFSelectField
          label={`paid_type`}
          name={`contract.paid_type`}
          containerClassName="mt-1"
          options={CONTRACT_PAID_TYPE}
        />
        <div />
        {/* <ContractStatus status={watch('contract.status')} containerClassName="!mt-2 flex items-center justify-center !text-base w-full block text-center" /> */}
      </div>
      <div className="flex gap-x-6 items-end">

        <RHFTextarea
          mainContainerClassName="flex-1 w-full"
          label={`note`}
          name={`contract.note`}
          value={watch(`contract.note`)}
        />

      </div>
    </div>)
}

export default ContractFormGeneral
import { useFormContext } from "react-hook-form";
import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { CONTRACT_DURATION, CONTRACT_PAID_TYPE } from "@/helpers/DEFAULT_OPTIONS";

const ContractFormGeneral = () => {
  const contractType = 'rent';
  const assetType = 'apartment';
  const { watch } = useFormContext();

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 w-full  items-start">
        <RHFInput
          label="govNumber"
          name={`contract.govNumber`}
        />
        <RHFInput
          label="contractsNumberPrev"
          name={`contract.contractsNumberPrev`}
          readOnly={watch('contract.id')}
        />
        <RHFDatePicker
          label={`issueDate`}
          name={`contract.issueDate`}
        />

      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-6 mt-4 w-full  items-start">
        <div className="grid grid-cols-1 gap-y-2 gap-x-6 ">
          <RHFAsyncSelectField
            options={[]}
            label="clientId"
            name="contract.clientId"
            allowAdd
          />
          <RHFSelectField
            options={[]}
            label="buildingId"
            name="contract.buildingId"
          />
          <RHFSelectField
            options={[]}
            label="clientId"
            name={`contract.${assetType}Id`}
          />
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
                label={`contractDuration`}
                name={`contract.contractDuration`}
                options={CONTRACT_DURATION}
              />
              <RHFInput
                label={`startDurationDate`}
                name={`contract.startDurationDate`}
              />
              <RHFInput
                label={`endDurationDate`}
                name={`contract.endDurationDate`}
                readOnly={watch(`contract.contractDuration`) < 4}
              />
            </>
          ) : (
            <>
              <RHFInput
                label={`propertyDeliveryDate`}
                name={`contract.propertyDeliveryDate`}
              />
            </>
          )}

          <RHFSelectField
            label={`lessorId`}
            name={`contract.lessorId`}
            table={'lessor'}
          />
        </div>

        <div className="flex flex-col gap-y-2 gap-x-6">
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.revenueAccountId`) ? "bg-blue-100" : ""
            }
            label={`revenueAccountId`}
            name={`contract.revenueAccountId`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.discountAccountId`) ? "bg-blue-100" : ""
            }
            label={`discountAccountId`}
            name={`contract.discountAccountId`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.insuranceAccountId`) ? "bg-blue-100" : ""
            }
            label={`insuranceAccountId`}
            name={`contract.insuranceAccountId`}
            table={"account"}
          />
          <RHFAsyncSelectField
            inputClassName={
              watch(`contract.vatAccountId`) ? "bg-blue-100" : ""
            }
            label={`vatAccountId`}
            name={`contract.vatAccountId`}
            table={"account"}
          />
        </div>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-3  gap-x-6 mb-2 mt-4`}>
        <div className="flex flex-col gap-y-2">
          {[
            "contractValue",
            "priceBeforeVat",
            "finalPrice",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
              inputClassName={field === "finalPrice" ? "bg-blue-100" : ""}
              readOnly={field === "finalPrice" || field === 'priceBeforeVat'}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discountRate",
            "vatRate",
            "currentSecuringValue",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discountValue",
            "vatValue",
            "previousSecuring",
          ]?.map((field, i) => (
            <RHFInput
              key={`${field}-${i}`}
              name={`contract.${field}`}
              label={field}
              inputClassName={field === "finalPrice" ? "bg-blue-100" : ""}
              readOnly
            />
          ))}
        </div>
        <RHFSelectField
          label={`paidType`}
          name={`contract.paidType`}
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
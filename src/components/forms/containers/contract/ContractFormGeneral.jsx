import QUERY_KEYS from "@/data/queryKeys";
import { CONTRACT_DURATION, CONTRACT_PAID_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { getAccountCustomersOnly, getLeavesAccounts } from "@/services/accountService";
import { getAllApartments } from "@/services/apartmentService";
import { getAllBuildings } from "@/services/buildingService";
import { getAllParkings } from "@/services/parkingService";
import { getAllShops } from "@/services/shopService";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { RHFDatePicker, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";

const ContractFormGeneral = ({ pattern }) => {
  const contractType = pattern?.contractType === 1 ? 'rent' : 'sale';
  const assetType = pattern?.assetsType;
  const { watch } = useFormContext();

  const { data: customers } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'customers'],
    queryFn: async () => {
      const response = await getAccountCustomersOnly();
      return response?.data || [];
    },
  });

  const { data: buildings } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING],
    queryFn: async () => {
      const response = await getAllBuildings();
      return response?.data || [];
    },
  });

  const { data: accountsLeaves } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'leave'],
    queryFn: async () => {
      const response = await getLeavesAccounts();
      return response?.data || [];
    },
  });

  const unit = useMemo(() => {
    const assetType = pattern?.assetsType;

  }, [pattern?.assetsType]);


  const { data: units } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING, watch('contract.buildingId')],
    queryFn: async () => {
      let fn = null
      switch (assetType) {
        case 2: // Parking Unit
          fn = getAllParkings({ buildingId: watch('contract.buildingId') });
          break
        case 3: // shop
          fn = getAllShops({ buildingId: watch('contract.buildingId') });
          break
        default:
          fn = getAllApartments({ buildingId: watch('contract.buildingId') });
      }
      const response = await fn;
      return response?.data || [];
    }
  });



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
          <RHFSelectField
            options={customers}
            label="clientId"
            name="contract.clientId"
            allowAdd
          />
          <RHFSelectField
            options={buildings}
            label="buildingId"
            name="contract.buildingId"
          />
          <RHFSelectField
            options={units}
            label="unitId"
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
              <RHFDatePicker
                label={`startDurationDate`}
                name={`contract.startDurationDate`}
              />
              <RHFDatePicker
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
          <RHFSelectField
            inputClassName={
              watch(`contract.revenueAccountId`) ? "bg-blue-100" : ""
            }
            label={`revenueAccountId`}
            name={`contract.revenueAccountId`}
            options={accountsLeaves}
          />
          <RHFSelectField
            inputClassName={
              watch(`contract.discountAccountId`) ? "bg-blue-100" : ""
            }
            label={`discountAccountId`}
            name={`contract.discountAccountId`}
            options={accountsLeaves}
          />
          <RHFSelectField
            inputClassName={
              watch(`contract.insuranceAccountId`) ? "bg-blue-100" : ""
            }
            label={`insuranceAccountId`}
            name={`contract.insuranceAccountId`}
            options={accountsLeaves}
            required={pattern?.insuranceRequired}

          />
          <RHFSelectField
            inputClassName={
              watch(`contract.vatAccountId`) ? "bg-blue-100" : ""
            }
            label={`vatAccountId`}
            name={`contract.vatAccountId`}
            options={accountsLeaves}
          />
        </div>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-3  gap-x-6 mb-2 mt-4`}>
        <div className="flex flex-col gap-y-2">
          <RHFInput
            name={`contract.contractValue`}
            label="contractValue"
            type="number"
          />
          <RHFInput
            name={`contract.priceBeforeVat`}
            label="priceBeforeVat"
            // readOnly
            type="number"
          />
          <RHFInput
            name={`contract.finalPrice`}
            label="finalPrice"
            inputClassName={"bg-blue-100"}
            // readOnly
            type="number"
          />

        </div>
        <div className="flex flex-col gap-y-2">
          <RHFInput
            name={`contract.discountRate`}
            label="discountRate"
            type="number"
          />
          <RHFInput
            name={`contract.vatRate`}
            label="vatRate"
            type="number"
            required={pattern?.vatRequired}
          />
          <RHFInput
            name={`contract.currentSecuringValue`}
            label="currentSecuringValue"
            type="number"
            required={pattern?.insuranceRequired}


          />
        </div>
        <div className="flex flex-col gap-y-2">
          <RHFInput
            name={`contract.discountValue`}
            label="discountValue"
            readOnly
          />
          <RHFInput
            name={`contract.vatValue`}
            label="vatValue"
            required={pattern?.vatRequired}
            readOnly
          />
          <RHFInput
            name={`contract.previousSecuring`}
            label="previousSecuring"
            readOnly
          />
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
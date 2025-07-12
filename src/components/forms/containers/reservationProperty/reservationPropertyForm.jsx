import QUERY_KEYS from "@/data/queryKeys";
import { CONTACT_PATTERN_ASSETS_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import {
  getAllApartments,
  getSearchApartment,
  getSingleApartment,
} from "@/services/apartmentService";
import {
  getAvailableParkingsByBuildingId,
  getSearchParking,
  getSingleParking,
} from "@/services/parkingService";
import {
  getAvailableShopsByBuildingId,
  getSearchShop,
  getSingleShop,
} from "@/services/shopService";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import {
  RHFAsyncSelectField,
  RHFCheckbox,
  RHFDatePicker,
  RHFInput,
  RHFSelectField,
  RHFTextarea,
} from "../../fields";
import { AccountLeaveField } from "../../global";
import BuildingField from "../../global/BuildingField";
import CostCenterField from "../../global/CostCenterField";
const ReservationPropertyForm = () => {
  const { watch } = useFormContext();

  const { data: units } = useQuery({
    queryKey: [
      QUERY_KEYS.BUILDING,
      watch("buildingId"),
      watch("property_type"),
    ],

    queryFn: async () => {
      let fn = null;
      switch (assetType) {
        case 2: // Parking Unit
          fn = getAvailableParkingsByBuildingId(watch("buildingId"));
          break;
        case 3: // shop
          fn = getAvailableShopsByBuildingId(watch("buildingId"));
          break;
        default:
          // fn = getAvailableApartmentsByBuildingId(watch('buildingId'));
          fn = getAllApartments({
            buildingId: watch("buildingId"),
          });
      }
      const response = await fn;
      return response?.data || [];
    },
  });

  const displayUnits = useMemo(() => {
    let type = watch("property_type");
    const search =
      type === 2
        ? getSearchShop
        : type === 2
        ? getSearchParking
        : getSearchApartment;
    const single =
      type === 2
        ? getSingleShop
        : type === 2
        ? getSingleParking
        : getSingleApartment;
    return (
      <RHFSelectField
        disabled={!watch("propertyType") || !watch("buildingId")}
        name="property_id"
        label="Property ID"
        type="text"
        required
        options={units}
      />
    );
  }, [watch("propertyType")]);

  return (
    <div className="p-4 flex flex-col min-h-[200px] max-h-[75vh] overflow-auto ">
      <div className="grid grid-cols-3 gap-4">
        <RHFDatePicker name="createdAt" label="Date" />
        <AccountLeaveField name="accountId" label="Account" required />
        <BuildingField name="buildingId" label="Building" required />
        <RHFSelectField
          name="propertyType"
          label="Property Type"
          options={CONTACT_PATTERN_ASSETS_TYPE}
        />
        {displayUnits}
        <RHFDatePicker name="bookDate" label="Book Date" />

        <RHFDatePicker name="endBookDate" label="End Book Date" />

        <RHFCheckbox name="reservationExpired" label="Reservation Expired" />

        <RHFCheckbox name="hasPayment" label="Has Payment" />
      </div>
      {watch("hasPayment") && (
        <div className="col-span-2 border dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-4 rounded-xl mt-8 relative">
          <div className="absolute -top-5 ltr:left-6 rtl:right-6 flex items-center gap-4">
            <h3 className="text-lg font-semibold border dark:border-dark-border rounded-xl min-w-[140px] text-center bg-gray-100 dark:bg-dark-bg px-4 py-2 text-blue-500">
              Payment
            </h3>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-4">
            <RHFInput
              name="paymentAmount"
              label="Payment Amount"
              type="number"
            />

            <RHFAsyncSelectField
              name="currencyId"
              label="Currency"
              table="currency"
              allowAdd
            />

            <AccountLeaveField
              name="debitAccountId"
              label="Debit Account"
              allowAdd
            />

            <AccountLeaveField
              name="creditAccountId"
              label="Credit Account"
              allowAdd
            />

            <CostCenterField
              name="debitCostCenterId"
              label="Debit Cost Center"
              allowAdd
            />

            <CostCenterField
              name="creditCostCenterId"
              label="Credit Cost Center"
              allowAdd
            />

            <RHFTextarea
              name="note"
              label="Note"
              containerClassName="col-span-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPropertyForm;

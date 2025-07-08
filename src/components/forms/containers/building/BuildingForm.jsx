import { SubStepsList } from "@/components/shared/SubStepsList";
import {
  BUILDING_BUYING_FIELDS,
  BUILDING_EDITORIAL_FIELDS,
  BUILDING_FIELDS,
  BUILDING_INVESTMENT_FIELDS,
  BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS,
  BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS,
  BUILDING_UNITS_FIELDS
} from "@/helpers/building/buildingFields";
import { FLATS } from "@/helpers/building/buildingHelpers";
import { RHFAsyncSelectField, RHFCheckbox, RHFInput } from "../../fields";
import { AccountField } from "../../global";
import { getSearchOwner, getSingleOwner } from "@/services/ownerService";
import { getSearchLessor, getSingleLessor } from "@/services/lessorService";

const SUB_STEPS = [
  "real_estate_management",
  "buying",
  "editorial_entry",
  "investment",
  "real_estate_development",
];

const BuildingForm = ({ tab }) => {
  const { watch, setValue } = useFormContext()
  const [currentSubIndex, setCurrentSubIndex] = useState(0)

  const calculateFlats = (name) => {
    // return
    let flat = name?.split(".").at(-1);
    switch (flat) {
      case "apartmentCount":
      case "apartmentFloor":
        FLATS.apartmentCount =
          watch("apartmentCount") * watch("apartmentFloor");
        break;
      case "penthouseCount":
      case "penthouseFloor":
        FLATS.penthouseCount =
          watch("penthouseCount") * watch("penthouseFloor");

        break;
      case "parkingCount":
      case "parkingFloor":
        FLATS.parkingCount = watch("parkingCount") * watch("parkingFloor");

        break;
      case "mezzanineCount":
      case "mezzanineFloor":
        FLATS.mezzanineCount =
          watch("mezzanineCount") * watch("mezzanineFloor");

        break;
      case "officeCount":
      case "officeFloor":
        FLATS.officeCount = watch("officeCount") * watch("officeFloor");

        break;
      case "storeCount":
        FLATS.storeCount = watch("storeCount");
        break;

      case "shopCount":
        FLATS.shopCount = watch("shopCount");

        break;
      case "warehouseCount":
        FLATS.warehouseCount = watch("warehouseCount");

        break;
      case "service_apartments":
        FLATS.serviceApartments = watch("serviceApartments");

        break;
      case "drivers_apartments":
        FLATS.driversApartments = watch("driversApartments");

        break;
      case "underground_parking": {
        let undergroundParking = watch("undergroundParking");
        FLATS.undergroundParking = undergroundParking;
      }

        break;
      default:
        return;
    }
  };


  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return
      calculateFlats(name, watch, setValue);
    });
    return () => subscription.unsubscribe();
  }, [watch]);


  const displayForm = () => {
    switch (tab) {
      case BUILDING_STEPS.building_units:
        // return <DynamicForm fields={BUILDING_UNITS_FIELDS} />
        return <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <RHFInput label="apartment_floor" name="apartmentFloor" type="number" />
          <RHFInput label="apartment_count_each_floor" name="apartmentCount" type="number" />
          <RHFInput label="shop_count" name="shopCount" type="number" />
          <RHFInput label="parking_floor" name="parkingFloor" type="number" />
          <RHFInput label="parking_count_each_floor" name="parkingCount" type="number" />
          <RHFInput label="underground_parking" name="undergroundParking" type="number" />
          <RHFInput label="store_count" name="storeCount" type="number" />
          <RHFInput label="penthouse_floor" name="penthouseFloor" type="number" />
          <RHFInput label="penthouse_count_each_floor" name="penthouseCount" type="number" />
          <RHFInput label="mezzanine_floor" name="mezzanineFloor" type="number" />
          <RHFInput label="mezzanine_count_each_floor" name="mezzanineCount" type="number" />
          <RHFInput label="office_floor" name="officeFloor" type="number" />
          <RHFInput label="office_count_each_floor" name="officeCount" type="number" />
          <RHFInput label="warehouse_count" name="warehouseCount" type="number" />
        </div>
      case BUILDING_STEPS.building_ownership: {
        return (
          <div className="items-start -mt-4 -ml-4">
            <SubStepsList
              steps={SUB_STEPS}
              goTo={setCurrentSubIndex}
              activeStage={currentSubIndex}
/>
            {/* {currentSubIndex === 0 && <DynamicForm fields={BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS} />} */}
            {currentSubIndex === 0 &&
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <AccountField label="owner_account_id" name="ownerAccountId" />
                <RHFInput label="commission_rate" name="commissionRate" type="number" />
                <AccountField label="building_revenue_account_id" name="buildingRevenueAccountId" />
              </div>
            }

            {/* {currentSubIndex === 1 && <DynamicForm fields={BUILDING_BUYING_FIELDS} />} */}
            {currentSubIndex === 1 &&
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <AccountField label="supplier_account_id" name="supplierAccountId" />
                <RHFInput label="statement" name="statement" type="text" />
              </div>
            }

            {/* {currentSubIndex === 2 && <DynamicForm fields={BUILDING_EDITORIAL_FIELDS} />} */}
            {currentSubIndex === 2 &&
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <RHFInput label="createdAt" name="createdAt" type="date" defaultValue={new Date()} />
                <RHFInput label="building_cost" name="buildingCost" type="number" />
                <RHFInput label="commission_rate" name="entryCommissionRate" type="number" />
                <RHFInput label="vat_rate" name="entryEatRate" type="number" />
                <AccountField label="vat_account_id" name="entryEatAccountId" />
                <AccountField label="landlord_account_id" name="entryLandlordAccountId" />
                <AccountField label="commission_from_owner_account_id" name="entryCommissionFromOwnerAccountId" />
                <AccountField label="revenue_account_id" name="entryRevenueAccountId" />
              </div>
            }
            {/* {currentSubIndex === 3 && <DynamicForm fields={BUILDING_INVESTMENT_FIELDS} />} */}
            {currentSubIndex === 3 &&
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <AccountField label="owner_account_id" name="investmentOwnerAccountId" type="number" />
                <RHFInput label="investment_value" name="investmentValue" type="number" />
                <RHFInput label="investment_start_date" name="investmentStartDate" type="date" />
                <RHFInput label="investment_end_date" name="investmentEndDate" type="date" />
                <AccountField label="tenants" name="tenants" />
                <RHFInput label="renters_insurance" name="rentersInsurance" />
                <RHFCheckbox label="gen_entries" name="investmentGenEntries" type="checkbox" />
              </div>
            }
            {/* {currentSubIndex === 4 && <DynamicForm fields={BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS} />} */}
            {currentSubIndex === 4 &&
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <AccountField label="account_id" name="receivedAccountId" type="number" />
                <RHFInput label="amount" name="receivedAmount" type="number" />
                <RHFInput label="received_note" name="receivedNote" />
                <RHFInput label="received_date" name="receivedDate" type="date" />
                <RHFInput label="note" name="note" />
                <RHFCheckbox label="building_receipt" name="buildingReceipt" type="checkbox" />
              </div>
            }
          </div>
        )
      }
      case BUILDING_STEPS.building_default_accounts:
        // return <DynamicForm fields={BUILDING_DEFAULT_ACCOUNTS_FIELDS} customGrid="grid-cols-2 gap-4" />
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <AccountField label="building_insurance_account_id" name="buildingInsuranceAccountId"/>
          <AccountField label="building_discount_account_id" name="buildingDiscountAccountId"/>
          <AccountField label="building_bank_account_id" name="buildingBankAccountId"/>
          <AccountField label="building_cash_account_id" name="buildingCashAccountId"/>
          <AccountField label="building_deposit_account_id" name="buildingDepositAccountId"/>
          <AccountField label="building_cheque_account_id" name="buildingChequeAccountId"/>
          <AccountField label="vat_account_id" name="vatAccountId"/>
          <AccountField label="deferred_eat_account_id" name="deferredEatAccountId"/>
          <AccountField label="owner_balance" name="ownerBalance"/>
          <AccountField label="owner_tax_account_id" name="ownerTaxAccountId"/>
          <AccountField label="commission_expense_account_id" name="commissionExpenseAccountId"/>
          <AccountField label="realestate_company_account_id" name="realestateCompanyAccountId"/>
          <AccountField label="customers_main_account_id" name="customersMainAccountId"/>
        </div>
      default:
        // return <DynamicForm fields={BUILDING_FIELDS} />
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <RHFInput label="name" name="name" required />
          <RHFInput label="ltnname" name="ltnname" />
          <RHFInput label="city" name="city" />
          <RHFInput label="emirate" name="emirate"/>
          <RHFInput label="suburb" name="suburb" />
          <RHFInput label="area" name="area" />
          <RHFInput label="street" name="street" />
          <RHFInput label="part_number" name="partNumber" />
          <RHFInput label="basin_number" name="basinNumber" />
          <RHFInput label="bond_number" name="bondNumber" />
          <RHFInput label="bond_type" name="bondType" />
          <RHFInput label="bond_date" name="bondDate" type="date" />
          <RHFAsyncSelectField getSingle={getSingleOwner} getSearch={getSearchOwner} label="owner_id" name="ownerId"/>        
          <RHFInput label="statement" name="statement"/>
          <RHFAsyncSelectField getSingle={getSingleLessor} getSearch={getSearchLessor} label="lessor_id" name="lessorId"/>        
          <RHFInput label="bank_account_number" name="bankAccountNumber"/>
          <RHFInput label="purchase_date" name="purchaseDate" type="date" />
          <RHFCheckbox label="display" name="display"/>
        </div>
    }
  }

  return (
    <div className="p-4 min-h-[350px] w-[95vh]">
      {displayForm()}
      {BUILDING_STEPS.building_units === tab && (
        <div className="grid grid-cols-3 text-xs mt-4 border-t pt-2 gap-4">
          {Object.entries(FLATS)?.map(([key, val]) => {
            return (
              <span
                key={key}
                className="bg-blue-50 rounded-md py-1 px-2 whitespace-nowrap text-blue-500 border text-center capitalize flex items-center gap-2 justify-between"
              >
                {key?.replace(/_|count/ig, " ")} <span className="p-[2px] rounded-md bg-blue-500 text-white px-2">{val || 0}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BuildingForm;

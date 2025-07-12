import { VILLA_STEPS } from "@/data/constants";
import {
  RHFAsyncSelectField,
  RHFDatePicker,
  RHFInput,
  RHFTableInput,
  RHFTextarea,
} from "../../fields";
import { AccountLeaveField } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import TableForm from "../../wrapper/TableForm";
const VillaForm = ({ tab }) => {
  const VillaGeneralFields = (
    <div className="grid grid-cols-2 gap-2">
      <RHFInput name="villa.complexName" label="Complex Name" required />
      <RHFInput name="villa.villaNo" label="Villa Number" required />

      <RHFInput name="villa.emirate" label="Emirate" />
      <RHFInput name="villa.area" label="Area" />
      <RHFInput name="villa.suburb" label="Suburb" />
      <RHFInput name="villa.street" label="Street" />

      <RHFInput name="villa.docType" label="Document Type" />
      <RHFInput name="villa.docNo" label="Document Number" />
      <RHFDatePicker name="villa.docDate" label="Document Date" />
      <RHFInput name="villa.pieceNo" label="Piece Number" />
      <RHFInput name="villa.basinNo" label="Basin Number" />

      <RHFInput name="villa.waterMeter" label="Water Meter" type="number" />
      <RHFInput
        name="villa.electricityMeter"
        label="Electricity Meter"
        type="number"
      />

      <RHFTextarea
        name="villa.note"
        label="Note"
        containerClassName="col-span-2"
      />
      <RHFAsyncSelectField
        name="villa.assetsId"
        table="assets"
        label="Assets"
        allowAdd
      />
      <RHFInput name="villa.value" label="Value" type="number" />
      <RHFTextarea
        name="villa.note"
        label="Note"
        containerClassName="col-span-2"
      />
      <AccountLeaveField
        name="villa.villaAccountId"
        label="Villa Account"
        allowAdd
      />
      <CostCenterField name="villa.costCenterId" label="Cost Center" allowAdd />
      <AccountLeaveField
        name="villa.accountBankVillaId"
        label="Bank Account"
        allowAdd
      />
      <AccountLeaveField
        name="villa.cashAccountId"
        label="Cash Account"
        allowAdd
      />
      <AccountLeaveField
        name="villa.insuranceAccountId"
        label="Insurance Account"
        allowAdd
      />
      <RHFAsyncSelectField
        name="villa.lessorId"
        table="lessor"
        label="Lessor"
        allowAdd
      />
      <RHFInput name="villa.roomState" label="Room State" />
      <RHFInput name="villa.roomCount" label="Room Count" type="number" />
      <RHFInput
        name="villa.serviceRoomCount"
        label="Service Room Count"
        type="number"
      />
      <RHFInput
        name="villa.bathRoomCount"
        label="Bathroom Count"
        type="number"
      />
      <RHFInput
        name="villa.otherRoomCount"
        label="Other Room Count"
        type="number"
      />
      <RHFInput name="villa.balconyCount" label="Balcony Count" type="number" />
      <RHFInput name="villa.floorCount" label="Floor Count" />
      <RHFInput name="villa.stairsInternal" label="Internal Stairs" />

      <RHFInput
        name="villa.areaUnit"
        label="Area Unit"
        containerClassName="villa.col-span-2"
      />
      <RHFInput name="villa.landArea" label="Land Area" />
      <RHFInput name="villa.landAreaBuilding" label="Building Area" />

      <RHFInput
        name="villa.finishingState"
        label="Finishing State"
        containerClassName="villa.col-span-2"
      />
      <RHFInput name="villa.securitySystem" label="Security System" />
      <RHFInput name="villa.securityType" label="Security Type" type="number" />

      <RHFInput name="villa.wall" label="Wall" />
      <RHFInput name="villa.wallState" label="Wall State" />

      <RHFInput
        name="villa.lightingCount"
        label="Lighting Count"
        type="number"
      />
      <RHFInput name="villa.parkingCount" label="Parking Count" type="number" />
      <RHFInput name="villa.parkingArea" label="Parking Area" />
      <RHFInput name="villa.parkingShaded" label="Parking Shaded" />

      <RHFInput name="villa.poolCount" label="Pool Count" type="number" />
      <RHFInput name="villa.poolState" label="Pool State" />
      <RHFInput name="villa.poolSystem" label="Pool System" />

      <RHFInput
        name="villa.playGroundCount"
        label="Playground Count"
        type="number"
      />
      <RHFInput name="villa.playGroundArea" label="Playground Area" />
      <RHFInput name="villa.gardenCount" label="Garden Count" type="number" />
      <RHFInput name="villa.gardenArea" label="Garden Area" />
      <RHFInput name="villa.gardenState" label="Garden State" />
    </div>
  );

  const VillaRentalPriceFields = (
    <div
      key="villaRentalPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4 "
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`villaRentalPrices.${index}.date`}
                type="date"
              />
            </td>
            <td>
              <RHFTableInput
                name={`villaRentalPrices.${index}.price`}
                label="Price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`villaRentalPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput
                name={`villaRentalPrices.${index}.note`}
                label="Note"
              />
            </td>
          </>
        )}
        gridName={"villaRentalPrices"}
        headers={["Date", "Price", "Currency", "Note"]}
      />
    </div>
  );

  const VillaSellingPriceFields = (
    <div
      key="villaSellingPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4 "
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`villaSellingPrices.${index}.date`}
                type="date"
              />
            </td>
            <td>
              <RHFTableInput
                name={`villaSellingPrices.${index}.price`}
                label="Price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`villaSellingPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput
                name={`villaSellingPrices.${index}.note`}
                label="Note"
              />
            </td>
          </>
        )}
        gridName={"villaSellingPrices"}
        headers={["Date", "Price", "Currency", "Note"]}
      />
    </div>
  );

  const renderFields = () => {
    switch (tab) {
      case VILLA_STEPS.villa_general:
        return VillaGeneralFields;
      // case VILLA_STEPS.villa_accounts:
      //   return VillaAccountsFields
      // case VILLA_STEPS.villa_assets:
      //   return VillaAssetsFields
      // case VILLA_STEPS.villa_exterior_details:
      //   return VillaExteriorDetailsFields
      // case VILLA_STEPS.villa_interior_details:
      //   return VillaInteriorDetailsFields
      case VILLA_STEPS.villa_rental_price:
        return VillaRentalPriceFields;
      case VILLA_STEPS.villa_selling_price:
        return VillaSellingPriceFields;
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  );
};

export default VillaForm;

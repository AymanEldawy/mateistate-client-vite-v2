import { RHFAsyncSelectField, RHFInput, RHFCheckbox, RHFTextarea, RHFTableInput } from "../../fields";
import { VOUCHER_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { getSearchAccount, getSingleAccount } from "@/services/accountService";
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchCurrency, getSingleCurrency } from "@/services/currencyService";
import { getSearchSeller, getSingleSeller } from "@/services/SellerService";
import { getSearchVoucherPattern, getSingleVoucherPattern } from "@/services/voucherPatternService";
import { getSearchContract, getSingleContract } from "@/services/contractService";

const VoucherForm = ({ tab }) => {

  const VoucherGeneralFields = (
    <FormFieldsGridContainer key="generalFields">
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">General Information</h5>
      <RHFInput name="voucher.voucherType" label="Voucher Type" type="number" required />
      <RHFInput name="voucher.connectWith" label="Connect With" type="number" />
      <RHFInput name="voucher.debitAmount" label="Debit Amount" type="number" required />
      <RHFInput name="voucher.creditAmount" label="Credit Amount" type="number" required />
      <RHFInput name="voucher.debitTotal" label="Debit Total" type="number" required />
      <RHFInput name="voucher.creditTotal" label="Credit Total" type="number" required />
      <RHFInput name="voucher.currencyVal" label="Currency Value" type="number" required />
      <RHFTextarea name="voucher.note" label="Note" containerClassName="col-span-2" />
      
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">References</h5>
      <RHFAsyncSelectField
        table="account"
        name="voucher.accountId"
        label="Account"
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
        required
      />
      <RHFAsyncSelectField
        table="currency"
        name="voucher.currencyId"
        getSearch={getSearchCurrency}
        getSingle={getSingleCurrency}
        label="Currency"
        required
      />
      <RHFAsyncSelectField
        table="seller"
        name="voucher.sellerId"
        getSearch={getSearchSeller}
        getSingle={getSingleSeller}
        label="Seller"
        required
      />
      <RHFAsyncSelectField
        table="voucherPattern"
        name="voucher.voucherPatternId"
        getSearch={getSearchVoucherPattern}
        getSingle={getSingleVoucherPattern} 
        label="Voucher Pattern"
      />
      <RHFAsyncSelectField
        table="contract"
        name="voucher.contractId"

        getSearch={getSearchContract}
        getSingle={getSingleContract}
        label="Contract"
        required
      />
      
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Settings</h5>
      <RHFCheckbox name="voucher.feedback" label="Feedback" />
      <RHFCheckbox name="voucher.genEntires" label="Generate Entries" />
      <RHFCheckbox name="voucher.isFirstBatch" label="Is First Batch" />
    </FormFieldsGridContainer>
  );

  const VoucherGridFields = (
    <div key="voucherGridFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFTableInput name={`voucherGridData.${index}.debit`} label="Debit" type="number" />
            </td>
            <td>
              <RHFTableInput name={`voucherGridData.${index}.credit`} label="Credit" type="number" />
            </td>
            <td>
              <RHFTableInput name={`voucherGridData.${index}.description`} label="Description" />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`voucherGridData.${index}.accountId`}
                table="account"
                getSearch={getSearchAccount}
                getSingle={getSingleAccount}
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`voucherGridData.${index}.costCenterId`}
                table="costCenter"
                getSearch={getSearchCostCenter}
                getSingle={getSingleCostCenter}
              />
            </td>
          </>
        )}
        gridName={"voucherGridData"}
        headers={[
          "Debit",
          "Credit", 
          "Description",
          "Account",
          "Cost Center"
        ]}
      />
    </div>
  );

  const VoucherPicturesFields = (
    <div key="voucherPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4">
      <RHFUploadFilesController name="voucherPictures" accept="image/*" containerClassName="col-span-2" label="Pictures" />
    </div>
  );

  const renderFields = () => {
    switch (tab) {
      case VOUCHER_STEPS.voucher_general:
        return VoucherGeneralFields;
      case VOUCHER_STEPS.voucher_grid:
        return VoucherGridFields;
      case VOUCHER_STEPS.voucher_pictures:
        return VoucherPicturesFields;
      default:
        return VoucherGeneralFields;
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  );
};

export default VoucherForm;

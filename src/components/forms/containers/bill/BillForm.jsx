import numberToText from "number-to-text";
import { useEffect, useState } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BillFormTables from "./BillFormTables";
import { RHFAsyncSelectField, RHFInput, RHFSelectField, RHFTextarea, RHFDatePicker, RHFTableInput } from "../../fields";
import { calculateMaterialsTotal, calculateTotal, calculateVatAndDiscounts } from "@/helpers/bill/billHelpers";
import { CurrencyFieldGroup } from "../../global";
import { BILL_PATTERN_PAYMENT_METHODS } from "@/helpers/DEFAULT_OPTIONS";
import BillConnectWithField from "./BillConnectWithField";
import { BILL_STEPS } from "@/data/constants";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { getSearchAccount, getSingleAccount } from "@/services/accountService";
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchCurrency, getSingleCurrency } from "@/services/currencyService";
import { getSearchStore, getSingleStore } from "@/services/storeService";
// import { getSingleCustomer, getSearchCustomer } from '@/services/customerService';
// import { getSearchCustomer } from '@/services/customerService';
  // import { getSingleMaterial } from "@/services/materialsService";
  // import { getSearchMaterial } from '@/services/materialService';
const PAYMENT_METHOD_OPTIONS = [
  { id: 1, name: "Cash" },
  { id: 2, name: "Credit Card" },
  { id: 3, name: "Bank Transfer" },
  { id: 4, name: "Check" }
];

const BILL_KIND_OPTIONS = [
  { id: 1, name: "Purchase" },
  { id: 2, name: "Sale" }
];

const CONNECT_WITH_OPTIONS = [
  { id: 1, name: "Customer" },
  { id: 2, name: "Supplier" },
  { id: 3, name: "Internal" }
];

const BillForm = ({ tab }) => {
  const { t } = useTranslation();
  const [refresh, setRefresh] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const {
    watch,
    setValue,
    clearErrors,
  } = useFormContext();

  // const { isLoading: LoadingPattern } = useQuery({
  //   queryKey: ["bill_pattern", code],
  //   queryFn: async () => {
  //     const response = await getOneBy("bill_pattern", code, "code");
  //     let pattern = response?.result?.at(0);
  //     setPATTERN_SETTINGS(pattern);
  //     if (!id) {
  //       await mergePatternWithBillData(pattern, watch, setValue);
  //     }
  //     return pattern;
  //   },
  // });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      let tab = name.split(".");
      if (name === "bill.total") {
        setValue(
          "bill.bill_total_text",
          numberToText.convertToText(+watch(name))
        );
      }
      if (name === "bill.payment_method") {
        if (watch(name) === 2) {
          setValue(
            "bill.customer_account_id",
            PATTERN_SETTINGS.cash_account_id
          );

        } else {
          setValue(
            "bill.customer_account_id",
            null
          );

        }

      }
      if (name === "bill.connect_with_id") {
        getMaterials(watch(name));
      }

      if (name === "bill.customer_id") {
        // should update get account id when select customer
        // setValue("bill.customer_account_id", customer_account_id);
        clearErrors("bill.customer_account_id");
        setRefresh((p) => !p);
      }

      if (tab?.includes("bill_material_details")) {
        calculateMaterialsTotal(watch, setValue);
        if (name?.indexOf("material_id") !== -1) {
          // set unit
          getMaterialUnit(watch(name), name);
        }
        // if()
      }

      if (tab?.includes("bill_discounts_details")) {
        calculateVatAndDiscounts(watch, setValue);
      }
      if (name === "bill.taxable") {
        calculateTotal(watch, setValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const getMaterialUnit = async (materialId, name) => {
    // const response = await getOneBy("material", materialId, "id");
    const response = null;
    const material = response?.result?.at(0);
    for (let index = 1; index < 4; index++) {
      if (material?.[`defaults${index}`])
        setValue(
          name?.replace(/material_id/i, "unit"),
          material?.[`unit${index}`]
        );
    }
  };


  const getMaterials = async (service_id) => {
    // const materials = await getRequestedMaterialsByServiceId(service_id);
    const materials = null;
    setValue("bill_material_details", materials?.result);
    setRefresh((p) => !p);
  };

  const mergePatternWithBillData = async (pattern, watch, setValue) => {
    if (pattern?.payment_method) {
      setValue("bill.payment_method", pattern?.payment_method);
    }
    if (pattern?.payment_method) {
      setValue("bill.taxable", pattern?.vat_percentage);
    }
    if (pattern?.cost_center_id) {
      setValue("bill.cost_center_id", pattern?.cost_center_id);
    }
    if (pattern?.default_store_id) {
      setValue("bill.store_id", pattern?.default_store_id);
    }

    if (pattern?.material_account_id) {
      setValue("bill.material_account_id", pattern?.material_account_id);
    }

    // if (pattern?.vat_account_id) {
    //   setValue("bill.vat_account_id", pattern?.vat_account_id);
    // }
    setRefresh((p) => !p);
  };

  const BillGeneralFields = (
    <FormFieldsGridContainer key="generalFields">
      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Basic Information</h5>
      <RHFDatePicker name="bill.issueDate" label="Issue Date" required />
      <RHFDatePicker name="bill.billDate" label="Bill Date" required />
      <RHFSelectField
        name="bill.billKind"
        label="Bill Kind"
        options={BILL_KIND_OPTIONS}
        required
      />
      <RHFInput name="bill.kind" label="Kind" placeholder="purchase/sale" />
      <RHFSelectField
        name="bill.paymentMethod"
        label="Payment Method"
        options={PAYMENT_METHOD_OPTIONS}
        required
      />
      <RHFInput name="bill.receiptNumber" label="Receipt Number" />
      <RHFInput name="bill.code" label="Code" />
      <RHFTextarea name="bill.note" label="Note" containerClassName="col-span-2" />

      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Accounts & References</h5>
      <RHFAsyncSelectField
        table="account"
        name="bill.clientAccountId"
        label="Client Account"
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
      />
      <RHFAsyncSelectField
        table="account"
        name="bill.customerAccountId"
        label="Customer Account"
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
      />
      <RHFAsyncSelectField
        table="account"
        name="bill.materialAccountId"
        label="Material Account"
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
      />
      <RHFAsyncSelectField
        table="account"
        name="bill.vatAccountId"
        label="VAT Account"
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
      />
      <RHFAsyncSelectField
        table="currency"
        name="bill.currencyId"
        label="Currency"
        getSearch={getSearchCurrency}
        getSingle={getSingleCurrency}
        required
      />
      <RHFInput name="bill.currencyVal" label="Currency Value" type="number" required />
      <RHFAsyncSelectField
        table="costCenter"
        name="bill.costCenterId"
        label="Cost Center"
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <RHFAsyncSelectField
        table="customer"
        name="bill.customerId"
        label="Customer"
        // getSearch={getSearchCustomer}
        // getSingle={getSingleCustomer}
      />
      <RHFAsyncSelectField
        table="store"
        name="bill.storeId"
        label="Store"
        getSearch={getSearchStore}
        getSingle={getSingleStore}
      />

      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Connection & Pattern</h5>
      <RHFSelectField
        name="bill.connectWith"
        label="Connect With"
        options={CONNECT_WITH_OPTIONS}
      />
      <RHFInput name="bill.connectWithId" label="Connect With ID" />
      <RHFAsyncSelectField
        table="billPattern"
        name="bill.billPatternId"
        label="Bill Pattern"
      />

      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Quantities & Percentages</h5>
      <RHFInput name="bill.totalQuantities" label="Total Quantities" type="number" />
      <RHFInput name="bill.totalQuantitiesPercentage" label="Total Quantities %" type="number" />
      <RHFInput name="bill.totalQuantitiesPercentage2" label="Total Quantities % 2" type="number" />

      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Amounts & Taxes</h5>
      <RHFInput name="bill.refundedTaxableAmount" label="Refunded Taxable Amount" type="number" />
      <RHFInput name="bill.nonRefundedTaxableAmount" label="Non-Refunded Taxable" type="number" />
      <RHFInput name="bill.notTaxable" label="Not Taxable" type="number" />
      <RHFInput name="bill.taxable" label="Taxable" type="number" />
      <RHFInput name="bill.nonRefundableVat" label="Non-Refundable VAT" type="number" />
      <RHFInput name="bill.nonRefundableVat2" label="Non-Refundable VAT 2" type="number" />
      <RHFInput name="bill.vatAmount" label="VAT Amount" type="number" />
      <RHFInput name="bill.extras" label="Extras" type="number" />

      <h5 className="col-span-3 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Totals</h5>
      <RHFInput name="bill.total" label="Total" type="number" required />
      <RHFInput name="bill.discounts" label="Discounts" type="number" />
      <RHFInput name="bill.discountsExtra" label="Discounts Extra" type="number" />
      <RHFInput name="bill.net" label="Net" type="number" />
      <RHFInput name="bill.subtotal" label="Subtotal" type="number" />
      <RHFInput name="bill.grandTotal" label="Grand Total" type="number" required />
      <RHFTextarea name="bill.billTotalText" label="Bill Total Text" containerClassName="col-span-3" />
    </FormFieldsGridContainer>
  );

  const BillDiscountDetailsFields = (
    <div key="billDiscountDetailsFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFAsyncSelectField
                name={`billDiscountDetails.${index}.accountId`}
                table="account"
                getSearch={getSearchAccount}
                getSingle={getSingleAccount}
              />
            </td>
            <td>
              <RHFTableInput name={`billDiscountDetails.${index}.discount`} label="Discount" type="number" />
            </td>
            <td>
              <RHFTableInput name={`billDiscountDetails.${index}.extra`} label="Extra" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`billDiscountDetails.${index}.currencyId`}
                table="currency"
                getSearch={getSearchCurrency}
                getSingle={getSingleCurrency}
              />
            </td>
            <td>
              <RHFTableInput name={`billDiscountDetails.${index}.currencyVal`} label="Currency Val" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`billDiscountDetails.${index}.costCenterId`}
                table="costCenter"
                getSearch={getSearchCostCenter}
                getSingle={getSingleCostCenter}
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`billDiscountDetails.${index}.obverseAccountId`}
                table="account"
                getSearch={getSearchAccount}
                getSingle={getSingleAccount}
              />
            </td>
            <td>
              <RHFTableInput name={`billDiscountDetails.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"billDiscountDetails"}
        headers={[
          "Account",
          "Discount",
          "Extra",
          "Currency",
          "Currency Val",
          "Cost Center",
          "Obverse Account",
          "Note"
        ]}
      />
    </div>
  );

  const BillMaterialDetailsFields = (
    <div key="billMaterialDetailsFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFAsyncSelectField
                name={`billMaterialDetails.${index}.materialId`}
                table="material"
                // getSearch={getSearchMaterial}
                // getSingle={getSingleMaterial}
              />
            </td>
            <td>
              <RHFTableInput name={`billMaterialDetails.${index}.quantity`} label="Quantity" type="number" />
            </td>
            <td>
              <RHFTableInput name={`billMaterialDetails.${index}.unitPrice`} label="Unit Price" type="number" />
            </td>
            <td>
              <RHFTableInput name={`billMaterialDetails.${index}.totalPrice`} label="Total Price" type="number" />
            </td>
            <td>
              <RHFTableInput name={`billMaterialDetails.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"billMaterialDetails"}
        headers={[
          "Material",
          "Quantity",
          "Unit Price",
          "Total Price",
          "Note"
        ]}
      />
    </div>
  );

  const renderFields = () => {
    switch (tab) {
      case BILL_STEPS.bill:
        return BillGeneralFields;
      case BILL_STEPS.bill_discounts_details:
        return BillDiscountDetailsFields;
      case BILL_STEPS.bill_material_details:
        return BillMaterialDetailsFields;
      default:
        return BillGeneralFields;
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  );
};

export default BillForm;

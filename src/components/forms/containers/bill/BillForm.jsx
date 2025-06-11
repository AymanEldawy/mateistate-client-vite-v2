import { calculateMaterialsTotal, calculateTotal, calculateVatAndDiscounts } from "@/helpers/bill/billHelpers";
import { BILL_PATTERN_PAYMENT_METHODS } from "@/helpers/DEFAULT_OPTIONS";
import numberToText from "number-to-text";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RHFAsyncSelectField, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { CurrencyFieldGroup } from "../../global";
import BillConnectWithField from "./BillConnectWithField";
import BillFormTables from "./BillFormTables";

const BillForm = ({ code, pattern }) => {
  const { t } = useTranslation();
  const [refresh, setRefresh] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const {
    watch,
    setValue,
    clearErrors,
  } = useFormContext();

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
            pattern.cash_account_id
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

  return (
    <div className="overflow-auto max-h-[500px]">
      {/* {openMaterialForm && <MaterialForm />} */}
      {/* <ContextMenu id="BILL_MENU" label="gray-50 border border-gray-200 rounded-md p-2 text-sm shadow flex flex-col gap-1">
      {/* <ContextMenu id="BILL_MENU" className="bg-gray-50 border border-gray-200 rounded-md p-2 text-sm shadow flex flex-col gap-1">
        <MenuItem
          className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
          onClick={() => setOpenMaterialForm(true)}
        >
          Add Material
        </MenuItem>
      </ContextMenu> */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 items-start justify-between gap-y-1 overflow-auto">
        <RHFInput
          label="number"
          name="bill.number"
          readOnly
        />
        <RHFInput
          label="issueDate"
          name="bill.issueDate"
        />
        <RHFInput
          label="billDate"
          name="bill.billDate"
        />

        <RHFInput
          label="receiptNumber"
          name="bill.receiptNumber"
        />
        <CurrencyFieldGroup />
        <RHFSelectField
          label="paymentMethod"
          name="bill.paymentMethod"
          options={BILL_PATTERN_PAYMENT_METHODS}
        />

        <RHFAsyncSelectField
          label="costCenterId"
          name="bill.costCenterId"
        />

        <RHFAsyncSelectField
          label="storeId"
          name="bill.storeId"
        />
        <RHFAsyncSelectField
          name="bill.customerId"
          label={
            +pattern?.bill_type === 2
              ? "Customer Name"
              : "Supplier name"
          }
          required={
            +watch('bill.paymentMethod') === 1
          }
        />
        <RHFAsyncSelectField
          label="customerAccountId"
          name="bill.customerAccountId"

        />
        <RHFAsyncSelectField
          label="materialAccountId"
          name="bill.materialAccountId"

        />
        <RHFAsyncSelectField
          required={false}
          label="vatAccountId"
          name="bill.vatAccountId"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {+pattern?.bill_type === 2 ? (
          <BillConnectWithField />
        ) : null}
      </div>
      <RHFTextarea
        label="note"
        name="bill.note"
        textareaClassName="h-[60px]"
      />

      <BillFormTables setActiveTab={setActiveTab} activeTab={activeTab} pattern={pattern} />

      <div className="my-4 bg-gray-200 dark:bg-[#303030] p-2">
        <div className=" flex gap-12 items-center justify-between px-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <RHFInput
              label="totalQuantities"
              name="bill.totalQuantities"
            />
            <RHFInput
              label="discounts"
              name="bill.discounts"
            />
            <RHFInput
              label="extras"
              name="bill.extras"
            />
            <RHFInput
              label="taxable"
              name="bill.taxable"
            />
            <RHFInput
              label="vatAmount"
              name="bill.vatAmount"
            />
          </div>
          <div className="flex flex-col gap-2 max-w-sm md:min-w-[400px]">
            <RHFInput
              label="subtotal"
              name="bill.subtotal"
            />

            <RHFInput
              label="total"
              name="bill.total"
            />
            <RHFTextarea
              label="billTotalText"
              name="bill.billTotalText"
              textareaClassName="h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillForm;

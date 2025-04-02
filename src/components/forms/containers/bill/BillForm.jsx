import numberToText from "number-to-text";
import { useEffect, useState } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BillFormTables from "./BillFormTables";
import { RHFAsyncSelectField, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { calculateMaterialsTotal, calculateTotal, calculateVatAndDiscounts } from "@/helpers/bill/billHelpers";
import { CurrencyFieldGroup } from "../../global";
import { BILL_PATTERN_PAYMENT_METHODS } from "@/helpers/DEFAULT_OPTIONS";
import BillConnectWithField from "./BillConnectWithField";

const BillForm = () => {
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
          label="issue_date"
          name="bill.issue_date"
        />
        <RHFInput
          label="bill_date"
          name="bill.bill_date"
        />

        <RHFInput
          label="receipt_number"
          name="bill.receipt_number"
        />
        <CurrencyFieldGroup />
        <RHFSelectField
          label="payment_method"
          name="bill.payment_method"
          options={BILL_PATTERN_PAYMENT_METHODS}
        />

        <RHFAsyncSelectField
          label="cost_center_id"
          name="bill.cost_center_id"
        />

        <RHFAsyncSelectField
          label="store_id"
          name="bill.store_id"
        />
        <RHFAsyncSelectField
          name="bill.customer_id"
          label={
            +PATTERN_SETTINGS?.bill_type === 2
              ? "Customer Name"
              : "Supplier name"
          }
          required={
            +watch('bill.payment_method') === 1
          }
        />
        <RHFAsyncSelectField
          label="customer_account_id"
          name="bill.customer_account_id"

        />
        <RHFAsyncSelectField
          label="material_account_id"
          name="bill.material_account_id"

        />
        <RHFAsyncSelectField
          required={false}
          label="vat_account_id"
          name="bill.vat_account_id"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {+PATTERN_SETTINGS?.bill_type === 2 ? (
          <BillConnectWithField />
        ) : null}
      </div>
      <RHFTextarea
        label="note"
        name="bill.note"
        textareaClassName="h-[60px]"
      />

      <BillFormTables setActiveTab={setActiveTab} activeTab={activeTab} PATTERN_SETTINGS={PATTERN_SETTINGS} />

      <div className="my-4 bg-gray-200 dark:bg-[#303030] p-2">
        <div className=" flex gap-12 items-center justify-between px-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <RHFInput
              label="total_quantities"
              name="bill.total_quantities"
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
              label="vat_amount"
              name="bill.vat_amount"
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
              label="bill_total_text"
              name="bill.bill_total_text"
              textareaClassName="h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillForm;

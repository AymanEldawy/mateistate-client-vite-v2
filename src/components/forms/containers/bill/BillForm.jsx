import QUERY_KEYS from "@/data/queryKeys";
import {
  calculateMaterialsTotal,
  calculateTotal,
  calculateVatAndDiscounts,
  mergePatternWithBillData,
} from "@/helpers/bill/billHelpers";
import { BILL_PATTERN_PAYMENT_METHODS } from "@/helpers/DEFAULT_OPTIONS";
import { getAllMaterials } from "@/services/materialsService";
import { useQuery } from "@tanstack/react-query";
import numberToText from "number-to-text";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { AccountLeaveField, CurrencyFieldGroup } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import StoreField from "../../global/StoreField";
import UserField from "../../global/UserField";
import BillConnectWithField from "./BillConnectWithField";
import BillFormTables from "./BillFormTables";

const BillForm = ({ pattern }) => {
  const { t } = useTranslation();
  const [refresh, setRefresh] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const { watch, setValue, clearErrors } = useFormContext();

  const { data: materials } = useQuery({
    queryKey: [QUERY_KEYS.MATERIAL],
    queryFn: async () => {
      const response = await getAllMaterials();
      return response?.data || [];
    },
  });

  useEffect(() => {
    if (!pattern) return;
    mergePatternWithBillData(pattern, setValue, setRefresh);
  }, [pattern]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      let tab = name.split(".");
      if (name === "bill.total") {
        setValue(
          "bill.billTotalText",
          numberToText.convertToText(+watch(name))
        );
      }
      if (name === "bill.paymentMethod") {
        if (watch(name) === 2) {
          setValue("bill.customerAccountId", pattern.cashAccountId);
        } else {
          setValue("bill.customerAccountId", null);
        }
      }
      if (name === "bill.connect_with_id") {
        getMaterials(watch(name));
      }

      if (name === "bill.customerId") {
        // should update get account id when select customer
        // setValue("bill.customerAccountId", customer_account_id);
        clearErrors("bill.customerAccountId");
        setRefresh((p) => !p);
      }

      if (tab?.includes("billMaterialDetails")) {
        calculateMaterialsTotal(watch, setValue);
        if (name?.indexOf("material_id") !== -1) {
          // set unit
          getMaterialUnit(watch(name), name);
        }
        // if()
      }

      if (tab?.includes("billDiscountsDetails")) {
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
          name?.replace(/materialId/i, "unit"),
          material?.[`unit${index}`]
        );
    }
  };

  const getMaterials = async (service_id) => {
    // const materials = await getRequestedMaterialsByServiceId(service_id);
    const materials = null;
    setValue("billMaterialDetails", materials?.result);
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
        <RHFInput label="number" name="bill.number" readOnly />
        <RHFInput label="issueDate" name="bill.issueDate" />
        <RHFInput label="billDate" name="bill.billDate" />

        <RHFInput label="receiptNumber" name="bill.receiptNumber" />
        <CurrencyFieldGroup tab="bill" />
        <RHFSelectField
          label="paymentMethod"
          name="bill.paymentMethod"
          options={BILL_PATTERN_PAYMENT_METHODS}
        />

        <CostCenterField label="costCenterId" name="bill.costCenterId" />

        <StoreField label="storeId" name="bill.storeId" />
        <UserField
          name="bill.customerId"
          label={+pattern?.billType === 2 ? "customerId" : "supplierId"}
          required={+watch("bill.paymentMethod") === 1}
        />

        <AccountLeaveField
          label="customerAccountId"
          name="bill.customerAccountId"
        />
        <AccountLeaveField
          label="materialAccountId"
          name="bill.materialAccountId"
        />
        <AccountLeaveField
          required={false}
          label="vatAccountId"
          name="bill.vatAccountId"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {+pattern?.billType === 2 ? <BillConnectWithField /> : null}
      </div>
      <RHFTextarea label="note" name="bill.note" textareaClassName="h-[60px]" />

      <BillFormTables
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        pattern={pattern}
        materials={materials}
      />

      <div className="my-4 bg-gray-200 dark:bg-[#303030] p-2">
        <div className=" flex gap-12 items-center justify-between px-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <RHFInput label="totalQuantities" name="bill.totalQuantities" />
            <RHFInput label="discounts" name="bill.discounts" />
            <RHFInput label="extras" name="bill.extras" />
            <RHFInput label="taxable" name="bill.taxable" />
            <RHFInput label="vatAmount" name="bill.vatAmount" />
          </div>
          <div className="flex flex-col gap-2 max-w-sm md:min-w-[400px]">
            <RHFInput label="subtotal" name="bill.subtotal" />

            <RHFInput label="total" name="bill.total" />
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

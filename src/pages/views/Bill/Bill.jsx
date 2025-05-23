import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import { billDefaultValue, billValidationSchema } from "@/helpers/bill/billValidationSchema";
import billColumns from "@/helpers/bill/billColumns";
import { createBill, deleteBill, deleteManyBills, getAllBills, getSingleBill, updateBill } from "@/services/billService";
import { lazy } from "react";
import { BILL_STEPS } from "@/data/constants";
import { RHFInput } from "@/components/forms/fields";

const BillFormLazy = lazy(() => import("@/components/forms/containers/bill/BillForm"));

const billConfig = {
  formProps: {
    defaultValue: billDefaultValue,
    validationSchema: billValidationSchema,
    mutationAddFunction: createBill,
    mutationUpdateFunction: updateBill,
    getSingleFunction: getSingleBill,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteBill,
    RenderForm: (props) => <BillFormLazy {...props} />,
  },
  formPaginationProps: {
    name: 'bill',
    number: 1
  },
  formSidebarProps: {
    list: Object.values(BILL_STEPS)
  },
  formHeaderProps: {
    header: "Bill",
    ExtraContentBar: () => (
      <>
        <RHFInput name="bill.receiptNumber" label="Receipt Number" containerClassName="!w-48" />
        <RHFInput name="bill.code" label="Code" containerClassName="!w-32" />
      </>
    )
  },
};

const Bill = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...billConfig}
        outerClose={outerClose}
      />
    );
  }

  return (
    <PaperLayout
      name="bill"
      queryKey={QUERY_KEYS.BILL}
      queryFn={getAllBills}
      handleDeleteSelected={deleteManyBills}
      paperHeaderProps={{
        header: "bill",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: billColumns,
      }}
      {...billConfig}
    />
  );
};

export default Bill; 
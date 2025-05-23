import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import { voucherDefaultValue, voucherValidationSchema } from "@/helpers/voucher/voucherValidationSchema";
import voucherColumns from "@/helpers/voucher/voucherColumns";
import VoucherForm from "@/components/forms/containers/voucher/VoucherForm";
import { createVoucher, deleteVoucher, deleteManyVouchers, getAllVouchers, getSingleVoucher, updateVoucher } from "@/services/voucherService";
import { lazy } from "react";
import { VOUCHER_STEPS } from "@/data/constants";
import { RHFCheckbox } from "@/components/forms/fields";

const VoucherFormLazy = lazy(() => import("@/components/forms/containers/voucher/VoucherForm"));

const voucherConfig = {
  formProps: {
    defaultValue: voucherDefaultValue,
    validationSchema: voucherValidationSchema,
    mutationAddFunction: createVoucher,
    mutationUpdateFunction: updateVoucher,
    getSingleFunction: getSingleVoucher,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteVoucher,
    RenderForm: (props) => <VoucherFormLazy {...props} />,
  },
  formPaginationProps: {
    name: 'voucher',
    number: 1
  },
  formSidebarProps: {
    list: Object.values(VOUCHER_STEPS)
  },
  formHeaderProps: {
    header: "Voucher",
    ExtraContentBar: () => (
      <>
        <RHFCheckbox name="voucher.feedback" label="Feedback" type="checkbox" />
        <RHFCheckbox name="voucher.genEntires" label="Generate Entries" type="checkbox" />
        <RHFCheckbox name="voucher.isFirstBatch" label="First Batch" type="checkbox" />
      </>
    )
  },
};

const Voucher = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...voucherConfig}
        outerClose={outerClose}
      />
    );
  }

  return (
    <PaperLayout
      name="voucher"
      queryKey={QUERY_KEYS.VOUCHER}
      queryFn={getAllVouchers}
      handleDeleteSelected={deleteManyVouchers}
      paperHeaderProps={{
        header: "voucher",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: voucherColumns,
      }}
      {...voucherConfig}
    />
  );
};

export default Voucher; 
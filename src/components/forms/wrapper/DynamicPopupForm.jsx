import Modal from "@/components/shared/Modal";
import { usePopupForm } from "@/hook/usePopupForm";
import Store from "@/pages/views/Store/Store";
import { lazy } from "react";
import InstallmentForm from "../containers/contract/InstallmentForm";

const Voucher = lazy(() => import("@/pages/views/Vouchers/Vouchers"));
const Currency = lazy(() => import("@/pages/views/Currency/Currency"));
const CostCenter = lazy(() => import("@/pages/views/CostCenter/CostCenter"));
const Account = lazy(() => import("@/pages/views/Account/Account"));
const Users = lazy(() => import("@/pages/views/Users/Users.jsx"));
const Cheque = lazy(() => import("@/pages/views/Cheque/Cheque"));
const PartialCollectionFrom = lazy(() =>
  import("../containers/cheque/PartialCollectionFrom")
);
const CollectionForm = lazy(() =>
  import("../containers/cheque/CollectionForm")
);
const ReturnForm = lazy(() => import("../containers/cheque/ReturnForm"));

const DynamicPopupForm = () => {
  const { onCloseDispatchedForm, stack, open } = usePopupForm();
  if (!open) return null;

  const displayForm = (props) => {
    console.log(props, "props popup");

    const additional = {
      outerClose: () => onCloseDispatchedForm(props.table),
      popupFormConfig: props,
      ...props,
      defaultNumber: props?.defaultNumber || props?.number,
    };

    switch (props?.table) {
      case "account":
        return <Account formOnly {...additional} />;
      case "user":
        return <Users formOnly {...additional} />;
      case "cheque":
        return <Cheque formOnly defaultCode={props?.code} {...additional} />;
      case "cost_center":
        return <CostCenter formOnly {...additional} />;
      case "store":
        return <Store formOnly {...additional} />;
      case "currency":
        return <Currency formOnly {...additional} />;
      case "voucher":
        return <Voucher formOnly defaultCode={props?.code} {...additional} />;
      case "op_partial_collection":
        return (
          <PartialCollectionFrom
            popupFormConfig={props}
            outerClose={() => onCloseDispatchedForm(props.table)}
          />
        );
      case "op_collection":
        return (
          <CollectionForm
            popupFormConfig={props}
            outerClose={() => onCloseDispatchedForm(props.table)}
          />
        );
      case "op_return":
        return (
          <ReturnForm
            popupFormConfig={props}
            outerClose={() => onCloseDispatchedForm(props.table)}
          />
        );
      case "installment":
        return (
          <InstallmentForm
            popupFormConfig={props}
            outerClose={() => onCloseDispatchedForm(props.table)}
            {...props}
          />
        );
      default:
        return;
    }
  };

  if (!stack || !Object.keys(stack).length) return null;

  return (
    <>
      {Object.entries(stack)?.map(([key, value]) => (
        <Modal
          key={key}
          open={key && open}
          onClose={onCloseDispatchedForm}
          bodyClassName="!p-0"
        >
          {displayForm(value)}
        </Modal>
      ))}
    </>
  );
};

export default DynamicPopupForm;

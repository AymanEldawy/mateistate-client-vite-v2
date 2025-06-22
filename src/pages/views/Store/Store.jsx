import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";

import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import storeColumns from "@/helpers/store/storeColumns";
import { storeDefaultValue, storeValidationSchema } from "@/helpers/store/storeValidationSchema";
import { createStore, deleteManyStores, deleteStore, getAllStores, getSingleStore, updateStore } from "@/services/storeService";
import { lazy } from "react";

const StoreForm = lazy(() => import("@/components/forms/containers/store/StoreForm"))


const storeConfig = {
  name: "store",
  formProps: {
    defaultValue: storeDefaultValue,
    validationSchema: storeValidationSchema,
    mutationAddFunction: createStore,
    mutationUpdateFunction: updateStore,
    getSingleFunction: getSingleStore,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteStore,
    RenderForm: (props) => <StoreForm {...props} />,
  },
  formHeaderProps: {
    header: "store",
  },
};

const Store = ({ formOnly, outerClose, defaultNumber, popupFormConfig }) => {

  if (formOnly) {
    return <FormWrapper
      {...storeConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
      oldValues={popupFormConfig?.oldValues}
    />;
  }

  return (
    <PaperLayout

      queryKey={QUERY_KEYS.STORE}
      queryFn={getAllStores} //
      handleDeleteSelected={deleteManyStores} //
      paperHeaderProps={{
        header: "store",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: storeColumns,
      }}
      {...storeConfig}
    />
  );
};

export default Store;

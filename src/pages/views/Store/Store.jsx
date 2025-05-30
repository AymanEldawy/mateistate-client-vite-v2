import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";

import { storeDefaultValue, storeValidationSchema } from "@/helpers/store/storeValidationSchema";
import storeColumns from "@/helpers/store/storeColumns";
import { createStore, deleteManyStores, deleteStore, getAllStores, getSingleStore, updateStore } from "@/services/storeService";
import { lazy } from "react";

const StoreForm = lazy(() => import("@/components/forms/containers/store/StoreForm"))


const storeConfig = {
  formProps: {
    defaultValue: storeDefaultValue,
    validationSchema: storeValidationSchema,
    mutationAddFunction: createStore,
    mutationUpdateFunction: updateStore,
    getSingleFunction: getSingleStore,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteStore,
    RenderForm: (props) => <StoreForm {...props} />,
  },
  formHeaderProps: {
    header: "store",
  },
};

const Store = () => {
  return (
    <PaperLayout
      name="store"
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

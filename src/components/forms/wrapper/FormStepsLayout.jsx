import { Suspense } from "react";
import FormSidebar from "./FormSidebar";

const FormStepsLayout = ({
  RenderForm,
  formSidebarProps,
  tab,
  setTab,
  paginationForm,
  ...props
}) => {
  return (
    <div className="flex">
      <FormSidebar
        {...formSidebarProps}
        tab={tab}
        setTab={setTab}
        {...paginationForm}
      />
      <div className="p-4 flex-1" style={{ width: "calc(100% - 200px)" }}>
        <Suspense fallback={<p>loading....</p>}>
          <RenderForm
            tab={tab}
            setTab={setTab}
            {...paginationForm}
            {...props}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default FormStepsLayout;

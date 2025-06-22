import { Suspense } from "react";
import FormSidebar from "./FormSidebar";

const FormStepsLayout = ({ RenderForm, formSidebarProps, tab, setTab, paginationForm, ...props }) => {
  return (
    <div className="flex">
      <FormSidebar {...formSidebarProps} tab={tab} setTab={setTab} {...paginationForm} />
      <div className="p-4">
        <Suspense fallback={<p>loading....</p>}>
          <RenderForm tab={tab} setTab={setTab} {...paginationForm} {...props} />
        </Suspense>
      </div>
    </div>
  )
}

export default FormStepsLayout
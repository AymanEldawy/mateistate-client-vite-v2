import { useState } from "react";
import FormSidebar from "./FormSidebar"

const FormStepsLayout = ({ RenderForm, formSidebarProps, tab, setTab, paginationForm, ...props }) => {
  return (
    <div className="flex">
      <FormSidebar {...formSidebarProps} tab={tab} setTab={setTab} {...paginationForm} />
      <div className="p-4">
        <RenderForm tab={tab} setTab={setTab} {...paginationForm} {...props} />
      </div>
    </div>
  )
}

export default FormStepsLayout
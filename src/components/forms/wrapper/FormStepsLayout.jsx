import { useState } from "react";
import FormSidebar from "./FormSidebar"

const FormStepsLayout = ({ RenderForm, formSidebarProps, tab, setTab }) => {
  return (
    <div className="flex">
      <FormSidebar {...formSidebarProps} tab={tab} setTab={setTab} />
      <div className="p-4">
        <RenderForm tab={tab} setTab={setTab} />
      </div>
    </div>
  )
}

export default FormStepsLayout
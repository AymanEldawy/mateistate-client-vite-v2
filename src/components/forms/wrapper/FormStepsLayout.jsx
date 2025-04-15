import { useState } from "react";
import FormSidebar from "./FormSidebar"

const FormStepsLayout = ({ RenderForm, formSidebarProps, tab, setTab }) => {
  return (
    <div className="flex gap-2">
      <FormSidebar {...formSidebarProps} tab={tab} setTab={setTab} />
      <RenderForm tab={tab} setTab={setTab} />
    </div>
  )
}

export default FormStepsLayout
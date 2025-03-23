import { useState } from "react";
import FormSidebar from "./FormSidebar"

const FormStepsLayout = ({ RenderForm, formSidebarProps }) => {
  const [tab, setTab] = useState(formSidebarProps?.list?.[0]);
  return (
    <div className="flex gap-2">
      <FormSidebar {...formSidebarProps} tab={tab} setTab={setTab} />
      <RenderForm tab={tab} setTab={setTab} />
    </div>
  )
}

export default FormStepsLayout
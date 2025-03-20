import FormSidebar from "./FormSidebar"

const FormStepsLayout = ({ RenderForm, formSidebarProps }) => {
  return (
    <div>
      <FormSidebar {...formSidebarProps} />
      <div>
        <RenderForm />
      </div>
    </div>
  )
}

export default FormStepsLayout
const FormSingularLayout = ({ RenderForm, paginationForm, ...props }) => {
  return (
    <div className="p-4">
      <RenderForm {...paginationForm} {...props} />
    </div>
  )
}

export default FormSingularLayout
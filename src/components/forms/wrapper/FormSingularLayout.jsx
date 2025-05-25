const FormSingularLayout = ({ RenderForm, paginationForm }) => {
  return (
    <div className="p-4">
      <RenderForm {...paginationForm} />
    </div>
  )
}

export default FormSingularLayout
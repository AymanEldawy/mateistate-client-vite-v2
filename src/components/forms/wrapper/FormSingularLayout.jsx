const FormSingularLayout = ({ RenderForm }) => {
  console.log("🚀 ~ FormSingularLayout ~ RenderForm:", RenderForm)
  return (
    <div className="p-4">
      <RenderForm />
    </div>
  )
}

export default FormSingularLayout
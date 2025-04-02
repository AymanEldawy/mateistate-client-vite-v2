const FormFieldsGridContainer = ({ children, className }) => {
    return <div className={`flex flex-col md:grid grid-cols-2 gap-x-4 gap-y-4 w-full h-full ${className}`}>{children}</div>
}

export default FormFieldsGridContainer


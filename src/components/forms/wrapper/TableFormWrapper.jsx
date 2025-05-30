
const TableFormWrapper = ({ children, containerClassName, tableContainerClassName, tableClassName, increasableBar, errorsWrapper, errors }) => {
  return (
    <div className={`my-2 text-xs w-full ${containerClassName} ${errors && 'border border-red-400 p-1 rounded-md shadow'}`}>
      {errorsWrapper}
      <div className={`overflow-auto ${tableContainerClassName}`}>
        <table className={`w-full border border-gray-100 rounded-md text-xs border-collapse ${tableClassName}`}>
          {children}
        </table>
      </div>
      {increasableBar}
    </div>
  )
}

export default TableFormWrapper
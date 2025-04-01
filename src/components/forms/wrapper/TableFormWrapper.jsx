
const TableFormWrapper = ({ children, containerClassName, tableContainerClassName, tableClassName, increasableBar }) => {
  return (
    <div className={`my-2 text-xsw-full ${containerClassName}`}>
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
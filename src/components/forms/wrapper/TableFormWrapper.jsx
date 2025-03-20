
const TableFormWrapper = ({ children, tableContainerClassName, tableClassName, increasableBar }) => {
  return (
    <div className={`w-full overflow-auto my-2 text-xs ${tableContainerClassName}`}>
      <table className={`w-full border border-gray-100 rounded-md border-collapse ${tableClassName}`}>
        {children}
      </table>
      {increasableBar}
    </div>
  )
}

export default TableFormWrapper
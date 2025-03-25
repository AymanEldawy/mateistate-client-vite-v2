import { useEffect, useState } from "react";

export const ReportFilterColumns = ({
  columns,
  selectedColumns,
  setSelectedColumns,
  bodyClassName,
  containerClassName,
  titleContainerClassName,
  titleClassName,
  title = "Columns",
  disabledItem,
  searchKey = 'name'
}) => {
  const [refresh, setRefresh] = useState(false);

  const onChangeFilterColumns = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    if (selectedColumns?.[name] && !checked) {
      let list = selectedColumns;
      delete list[name];
      setSelectedColumns(list);
    } else {
      setSelectedColumns((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
    setRefresh((p) => !p);
  };

  const handleToggleSelectAll = (e) => {
    if (e.target.checked) {
      let hash = {};
      for (const col of columns) {
        hash[col?.[searchKey]] = true;
      }
      setSelectedColumns(hash);
    } else {
      setSelectedColumns({});
    }
  };

  useEffect(() => {
    if (disabledItem) setSelectedColumns({});
  }, [disabledItem])

  return (
    <div className={`border rounded-md text-sm overflow-hidden ${containerClassName}`}>
      <div className={titleContainerClassName}>
        <h2
          className={`text-base font-medium text-blue-500 px-4 py-2 ${titleClassName}`}
        >
          {title}
        </h2>
        {!columns?.length ? (
          <p className="px-4 text-red-600 pb-3 italic">There are no options</p>
        ) : (
          <label
            className={`overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked `}
          >
            <input
              onChange={handleToggleSelectAll}
              checked={Object.keys(selectedColumns)?.length === columns?.length}
              disabled={disabledItem}
              type="checkbox"
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:bg-gray-100 disabled:opacity-60 disabled:!text-gray-100"
            />
            select all
          </label>
        )}
      </div>
      <div
        className={` overflow-auto ${bodyClassName ? bodyClassName : "max-h-[450px]"
          }`}
      >
        {columns?.map((col) => (
          <label
            key={col?.[searchKey]}
            className={`overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked ${containerClassName}`}
          >
            <input
              name={col?.[searchKey]}
              onChange={onChangeFilterColumns}
              checked={selectedColumns?.[col?.[searchKey]]}
              disabled={disabledItem}
              type="checkbox"
              className="w-4 h-4 text-teal-600 disabled:opacity-50 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            {col?.[searchKey === 'accessorKey' ? 'header' : 'label']?.replace(/_/g, " ")}
          </label>
        ))}
      </div>
    </div>
  );
};

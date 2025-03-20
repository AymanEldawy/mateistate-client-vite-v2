import { DebouncedInput } from "@/components/forms/fields";

export function DefaultColumnFilter({
  // column: { filterValue, preFilteredRows, setFilter },
  column,
}) {
  const value = column?.getFilterValue()
  const setFilterValue = column?.setFilterValue
  const header = column?.columnDef?.header

  return (
    <DebouncedInput
      className="p-1 text-xs border rounded-md"
      value={value || ''}
      onChange={value => {
        setFilterValue(value|| undefined);
      }}
      debounce={400}
      placeholder={`Search ${header} records...`}
    />
  );
}
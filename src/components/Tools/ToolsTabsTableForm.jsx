import useFlatColoring from "@/hook/useFlatColoring";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import TableForm from "../forms/wrapper/TableForm";
import AreaField from "../forms/fields/AreaField";
import { RHFSelectField, RHFTableInput } from "../forms/fields";
import { FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import ColorToolsField from "../forms/containers/building/ColorToolsField";


export const ToolsTabsTableForm = ({ errors, row }) => {
  const { watch, setValue, register } = useFormContext();
  const { onSelectColor, selectedIndex, roomCounts, availableColors } =
    useFlatColoring();
  const isOwnership = useMemo(() => {
    return !!row?.owner_account_id
  }, [row])


  useEffect(() => {
    let grid = watch()?.grid;
    for (let i = 0; i < grid?.length; i++) {
      if (roomCounts?.[grid[i].hex]) {
        setValue(`grid.${i}.room_count`, roomCounts?.[grid[i].hex]);
      }
    }
  }, [JSON.stringify(roomCounts)]);

  return (
    <div>
      <TableForm
        gridName="grid"
        headers={[
          // 'row_index',
          'hex',
          'room_count',
          'description',
          'area',
          // 'area_unit',
          'view',
          'property_type',
        ]}
        formBodyProps={{
          customIndex: true,
          trClassName: (index) => `${index === selectedIndex ? 'bg-gray-200' : ''}`
        }}
        renderFields={(item, index) => {
          return (
            <>
              <td className="border dark:border-dark-border whitespace-nowrap relative">
                <div
                  tabIndex="0"
                  role="button"
                  className="text-center w-full block"
                  onClick={() => {
                    let hex = watch(`grid.${[index]}.hex`);
                    if (!hex || hex === "#000000") return;
                    onSelectColor(index, hex);
                  }}
                >
                  {index + 1}
                </div>
              </td>
              <td
                className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}
              >
                <ColorToolsField
                  name={`grid.${index}.hex`}
                  availableColors={availableColors}
                />
              </td>
              <td className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}>
                <RHFTableInput
                  name={`grid.${index}.room_count`}
                  readOnly
                />
              </td>
              <td className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}>
                <RHFTableInput
                  name={`grid.${index}.description`}
                />
              </td>
              <td className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}>
                <AreaField
                  labelClassName="hidden"
                  containerClassName="h-10 !h-full min-w-[55px]"
                  inputClassName={
                    "border-0 !rounded-none"
                  }
                  name={`grid.${index}.area`}
                  area_unit={`grid.${index}.area_unit`}
                />
              </td>

              <td className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}>
                {/* <RHFTableInput
                  name={`grid.${index}.view`}
                  readOnly
                /> */}
              </td>
              <td className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}>
                <RHFSelectField
                  name={`grid.${index}.property_type`}
                  options={FLAT_PROPERTY_TYPE}
                  value={isOwnership ? FLAT_PROPERTY_TYPE[0].id : FLAT_PROPERTY_TYPE[1].id}
                />
              </td>
            </>
          );
        }}
      />
    </div>
  );
};

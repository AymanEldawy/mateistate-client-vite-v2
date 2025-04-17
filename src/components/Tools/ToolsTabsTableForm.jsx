import useFlatColoring from "@/hook/useFlatColoring";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import TableForm from "../forms/wrapper/TableForm";
import AreaField from "../forms/fields/AreaField";
import { RHFSelectField, RHFTableInput } from "../forms/fields";
import { FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import Btn from "../shared/Btn";
import { TrashIcon } from "../Icons";
import ColorToolsField from "../forms/containers/building/ColorToolsField";


export const ToolsTabsTableForm = ({ errors, row }) => {
  const tab = 'grid';
  const { watch, setValue, register } = useFormContext();
  const [increaseCount, setIncreaseCount] = useState(5);
  const { onSelectColor, selectedColor, roomCounts, availableColors } =
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
    setIncreaseCount(grid?.length || 5)
  }, [JSON.stringify(roomCounts)]);


  const onDecrement = () => {
    let index = increaseCount - 2;
    let grid = watch(tab || "grid");
    let newGrid = grid?.filter((c, i) => i !== index);
    setValue(tab || "grid", newGrid);
    setIncreaseCount((prev) => prev - 1);
  };


  // onDecrement
  // setIncreaseCount
  // increaseCount
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
          customIndex: true
        }}

        renderFields={(item, index) => {
          return (
            <>

              <td className="border dark:border-dark-border whitespace-nowrap relative">
                <div className="text-center w-full block">{index + 1}</div>
              </td>
              <td
                className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}
                onClick={() => {
                  let hex = watch(`grid.${[index]}.hex`);
                  if (!hex || hex === "#000000") return;
                  onSelectColor(index, hex);
                }}
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
                  value={isOwnership ? FLAT_PROPERTY_TYPE[0] : FLAT_PROPERTY_TYPE[1]}
                />
              </td>
            </>
          );
        }}
      />
    </div>
  );
};

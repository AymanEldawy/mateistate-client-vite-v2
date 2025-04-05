import { FLAT_PROPERTY_TABS, generateFlatHashName, getValueOfInputColor } from "@/helpers/building/buildingHelpers";
import useFlatColoring from "@/hook/useFlatColoring";
import { useEffect, useMemo, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { CloseIcon, EditIcon } from "../Icons";

const ToolsColColor = ({
  isUpdatable,
  setIsUpdatable,
  tabName,
  yIndex,
  xIndex,
  prefix,
  isMatrix,
}) => {
  const {
    onInsertColor,
    onChangeApartmentName,
    canInsertColor,
    flatsDetails,
    onRemoveFromColor,
  } = useFlatColoring();
  const inputRef = useRef();

  const { watch } = useFormContext();

  let tabSettings = useMemo(() => FLAT_PROPERTY_TABS[tabName], [tabName]);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [isUpdatable]);

  const itemHash = generateFlatHashName(tabName, tabSettings, yIndex, xIndex);

  const itemData =
    flatsDetails?.[tabName]?.asset_hash || flatsDetails?.[tabName]?.[itemHash];
  const flatName = tabSettings?.no;
  const itemValue = flatsDetails?.[tabName]?.[itemHash]?.[flatName] || itemHash;
  const itemColor = watch("grid")?.[itemData?.row_index]?.hex || itemData?.hex;

  return (
    <td className="px-4 py-2 dark:border-dark-border !p-0 border border-gray-400">
      {isUpdatable === itemHash ? (
        <div className="px-1">
          <input
            ref={inputRef}
            type="number"
            className="h-full w-fit py-2 border-0 rounded-none focus-within:border-blue-400 focus:border"
            onKeyDown={(e) => {
              if (e.keyCode === 13) setIsUpdatable("");
            }}
            onBlur={(e) => {
              setIsUpdatable("");
            }}
            onChange={(e) => {
              onChangeApartmentName(tabName, itemHash, e.target.value);
            }}
            value={itemValue}
            defaultValue={itemValue}
          />
          <button onClick={() => setIsUpdatable("")}>
            <CloseIcon />
          </button>
        </div>
      ) : (
        <div
          onClick={() => {
            if (canInsertColor)
              onInsertColor(tabName, itemHash, {
                name: itemValue,
                x_index: xIndex,
                y_index: yIndex,
                floor_no: xIndex + 1,
              });
          }}
          style={{
            background:
              typeof itemColor === "number"
                ? getValueOfInputColor(itemColor)
                : itemColor,
          }}
          className={`${
            itemColor ? "cursor-default" : "cursor-cell"
          } h-8 p-1 px-1 flex items-center justify-between tools-tab-item`}
        >
          <span className="bg-[#0005] text-white px-1 h-[22px] rounded-sm whitespace-nowrap">
            {itemValue}
          </span>
          <div className="flex ml-3 rtl:mr-3 rtl:ml-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsUpdatable(itemHash);
              }}
              className="rounded-md scale-75 w-9 h-7 bg-blue-500 text-white flex items-center justify-center"
            >
              <EditIcon className="h-5 w-5" />
            </button>
            {itemColor ? (
              <button
                className="rounded-md scale-75 w-9 h-7 bg-red-500 text-white flex items-center justify-center"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromColor(tabName, itemHash);
                }}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            ) : null}
          </div>
        </div>
      )}
    </td>
  );
};

export default ToolsColColor;

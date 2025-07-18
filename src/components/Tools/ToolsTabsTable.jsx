import {
  FLAT_PROPERTY_TABS,
  generateFlatHashName,
  getAlphabetSortingView,
  getPrefix,
} from "@/helpers/building/buildingHelpers";
import useFlatColoring from "@/hook/useFlatColoring";
import { useMemo, useState } from "react";
import Checkbox from "../shared/Checkbox";
import ToolsColColor from "./ToolsColColor";

export const ToolsTabsTable = ({
  row,
  selectedTab,
  flatsDetails,
  setFlatsDetails,
}) => {
  const { canInsertColor, onInsertColor, onRemoveFromColor } =
    useFlatColoring();
  const { tabName } = selectedTab;
  const [isUpdatable, setIsUpdatable] = useState("");
  const [selectedRows, setSelectedRows] = useState({});

  let prefix = useMemo(() => getPrefix(selectedTab.tabName), [selectedTab]);

  if (!row?.id) return;

  const toggleRowSelection = (inputHash) => {
    setSelectedRows((prev) => {
      const newSelectedRows = { ...prev };
      if (newSelectedRows[inputHash]) {
        delete newSelectedRows[inputHash];
      } else {
        newSelectedRows[inputHash] = true;
      }
      return newSelectedRows;
    });
  };

  const onSelectAllHorizontal = (e, y, x, matrix) => {
    const { tabName } = selectedTab;
    let setting = FLAT_PROPERTY_TABS[tabName];

    for (let i = 0; i < x; i++) {
      let itemHash = matrix
        ? generateFlatHashName(tabName, setting, i, y)
        : generateFlatHashName(tabName, setting, y, i);

      if (e.target.checked) {
        let additional = {
          name: itemHash,
          xIndex: i,
          yIndex: y,
          floorNo: (y + 1).toString(),
        };
        onInsertColor(tabName, itemHash, additional);
      } else {
        onRemoveFromColor(tabName, itemHash);
      }
    }
  };

  const onSelectAllVertical = (e, y, x) => {
    const { tabName } = selectedTab;
    for (let i = 0; i < x; i++) {
      let itemHash = generateFlatHashName(tabName, selectedTab, y, i);
      if (e.target.checked) {
        let additional = {
          name: itemHash,
          xIndex: y,
          yIndex: i + 1,
          floorNo: (i + 1).toString(),
        };
        onInsertColor(tabName, itemHash, additional);
      } else {
        onRemoveFromColor(tabName, itemHash);
      }
    }
  };

  let xCount = +row[selectedTab?.x];
  let yCount = selectedTab?.y ? +row?.[selectedTab?.y] : +row?.[selectedTab?.x];

  return (
    <div key={selectedTab}>
      <div className="max-w-fit">
        <table>
          <thead
            className={`text-xs uppercase dark:border-dark-border dark:bg-dark-border dark:text-gray-300 bg-gray-200 !bg-[#0099a5] text-white`}
          >
            <tr>
              {canInsertColor ? (
                <th className="px-4 py-2 border border-gray-400 min-w-[20px]">
                  #
                </th>
              ) : null}
              {Array(selectedTab?.y ? yCount : xCount)
                .fill(0)
                .map((row, indexY) => {
                  const inputHash = `${tabName}${indexY}${xCount}`;
                  return (
                    <th
                      key={`${row}-${indexY}`}
                      className="border border-gray-400 min-w-[90px] !py-2 text-sm !px-2 "
                    >
                      <div
                        className="flex gap-1 items-center"
                        onClick={onInsertColor}
                      >
                        <label className="flex items-center gap-4 justify-between">
                          {canInsertColor && selectedTab?.y !== "" ? (
                            <input
                              type="checkbox"
                              checked={selectedRows?.[inputHash]}
                              name={tabName}
                              className={
                                "w-4 h-4 text-teal-600 disabled:opacity-50 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                              }
                              onChange={(e) => {
                                onSelectAllVertical(e, indexY, xCount);
                                toggleRowSelection(inputHash);
                              }}
                            />
                          ) : null}
                          {getAlphabetSortingView(indexY + 1)}
                        </label>
                      </div>
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {selectedTab?.y !== "" ? (
              Array(xCount)
                .fill(0)
                .map((r, indexX) => {
                  const inputHash = `${tabName}${indexX}${yCount}`;
                  return (
                    <tr key={`${r}-${indexX}`}>
                      {canInsertColor ? (
                        <td
                          className={`py-2 dark:border-dark-border !p-0 !px-2  border border-gray-400 darkL`}
                        >
                          <Checkbox
                            name={tabName}
                            checked={selectedRows?.[inputHash]}
                            onChange={(e) => {
                              onSelectAllHorizontal(e, indexX, yCount, true);
                              toggleRowSelection(inputHash);
                            }}
                          />
                        </td>
                      ) : null}
                      {Array(yCount)
                        .fill(0)
                        .map((r, indexY) => (
                          <ToolsColColor
                            key={`${indexY}-${row}`}
                            xIndex={indexX}
                            yIndex={indexY}
                            prefix={prefix}
                            tabName={tabName}
                            isUpdatable={isUpdatable}
                            setFlatsDetails={setFlatsDetails}
                            selectedTab={selectedTab}
                            setIsUpdatable={setIsUpdatable}
                            flatsDetails={flatsDetails}
                            isMatrix
                          />
                        ))}
                    </tr>
                  );
                })
            ) : (
              <tr>
                {canInsertColor ? (
                  <td
                    className={`py-2 dark:border-dark-border !p-0 !px-2  border border-gray-400 darkL`}
                  >
                    <Checkbox
                      name={tabName}
                      onChange={(e) => {
                        onSelectAllHorizontal(e, 0, xCount);
                        toggleRowSelection(`${tabName}0${xCount}`);
                      }}
                      checked={selectedRows?.[`${tabName}0${xCount}`]}
                    />
                  </td>
                ) : null}
                {Array(xCount)
                  .fill(0)
                  .map((r, indexX) => (
                    <ToolsColColor
                      key={`${0}-${row}`}
                      yIndex={0}
                      xIndex={indexX}
                      prefix={prefix}
                      tabName={tabName}
                      isUpdatable={isUpdatable}
                      setFlatsDetails={setFlatsDetails}
                      selectedTab={selectedTab}
                      setIsUpdatable={setIsUpdatable}
                      flatsDetails={flatsDetails}
                    />
                  ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

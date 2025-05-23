import { useState, useCallback } from "react";
import ChartItemIcon from "./ChartItemIcon";
import ChartContextMenu from "./ChartContextMenu";
import { ContextMenuTrigger } from "react-contextmenu";

const ChartRenderTree = ({
  chartTree,
  name,
  showStatus,
  onSelectItemHandler,
  onDeleteItemHandler,
  onAddItemHandler,
  onUpdateItemHandler,
}) => {
  const [open, setOpen] = useState({});

  const toggleOpen = (itemId, level) => {
    if (open[level] === itemId) {
      setOpen((prev) => {
        return {
          ...prev,
          [level]: "",
        };
      });
    } else
      setOpen((prev) => {
        return {
          ...prev,
          [level]: itemId,
        };
      });
  };

  const displayTree = useCallback(
    (tree, level = 1) => {
      return tree?.map((item) => {
        return (
          <>
            <ChartContextMenu
              item={item}
              name={name}
              onUpdateItemHandler={onUpdateItemHandler}
              onAddItemHandler={onAddItemHandler}
              onDeleteItemHandler={onDeleteItemHandler}
            />
            <ContextMenuTrigger id={item?.id}>
              <li className="space-x-3 w-fit mt-2 mb-2 last:mb-0" key={item?.id}>
                <div role="button" tabIndex="0" onClick={() => onSelectItemHandler(item)} className="flex capitalize cursor-pointer">
                  <div className="group options flex ltr:pl-8 rtl:pr-8 min-w-[190px] hover:text-black dark:hover:text-white dark:hover:bg-dark-bg dark:hover:border-dark-border hover:bg-gray-100 border-transparent rounded border hover:border-gray-300">
                    <ChartItemIcon item={item} level={level} open={open} />
                    <p className={`mx-2 ${item?.type && item?.type !== 1 ? 'text-blue-500' : ''}`}>{`${item?.code}-${item?.name}`}</p>
                    {item?.status && showStatus ? <span className={`text-xs p-1 rounded-md font-medium ${item?.status?.toLowerCase() === 'balance sheet' ? 'text-orange-500' : 'text-purple-500'}`}>{item?.status}</span> : null}
                  </div>
                </div>
                {item?.children?.length ? (
                  <>
                    {open[level] === item?.id ? (
                      <ul
                        className={`relative bg-[#9991] dark:bg-[#1111] pr-4 !ml-4 rounded-md dark:before:border-dark-border before:border-l-2 before:absolute before:left-0 before:-z-1 before:h-full color-level-${level} after:opacity-20 after:w-4 after:h-full after:absolute after:top-0`}
                      >
                        {displayTree(item?.children, level + 1)}
                      </ul>
                    ) : null}
                  </>
                ) : null}
              </li>
            </ContextMenuTrigger>
          </>
        );
      });
    },
    [open, toggleOpen]
  );

  return (
    <ul
      className={`relative pr-4 ltr:!ml-4 rtl:!mr-4 rounded-md dark:before:border-dark-border ltr:before:border-l-2 rtl:before:border-r-2  before:absolute ltr:before:left-0 rtl:before:right-0 before:-z-1 before:h-full color-level-0 after:opacity-50 after:w-4 after:h-full after:absolute after:top-0`}
    >
      {displayTree(chartTree?.sort((a, b) => a?.code - b?.code))}
    </ul>
  );
};

export default ChartRenderTree;

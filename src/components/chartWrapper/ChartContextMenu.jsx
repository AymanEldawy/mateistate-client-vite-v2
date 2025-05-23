import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import { EditIcon, PlusIcon, TrashIcon } from '../Icons'

const ChartContextMenu = ({
  item,
  name,
  onUpdateItemHandler,
  onAddItemHandler,
  onDeleteItemHandler,
}) => {
  return (
    <ContextMenu id={item?.id} className="bg-gray-50 border border-gray-200 rounded-md p-2 text-sm shadow flex flex-col gap-1">
      <MenuItem
        className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
        onClick={() => onAddItemHandler(item, name)}
      >
        <PlusIcon className="h-[17px] w-[17px]" circle /> Add {name}
      </MenuItem>
      <MenuItem
        className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
        onClick={() => onUpdateItemHandler(item, name)}
      >
        <EditIcon className="h-[17px] w-[17px]" /> Edit {name}
      </MenuItem>
      <MenuItem
        className={`flex text-red-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-red-50 text-sm p-1`}
        onClick={() => onDeleteItemHandler(item)}
      >
        <TrashIcon className="h-[17px] w-[17px]" /> Delete {name}
      </MenuItem>
      {/* {!isMaterial && (
        <>
          <MenuItem
            className="border h-[1px] border-gray-100"
            divider />
          <MenuItem
            className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
            onClick={() => onSelectedItem(item, 'Material')}
          >
            <PlusIcon className="h-[17px] w-[17px]" circle />
            Add Material
          </MenuItem>

        </>
      )} */}
    </ContextMenu>
  )
}

export default ChartContextMenu
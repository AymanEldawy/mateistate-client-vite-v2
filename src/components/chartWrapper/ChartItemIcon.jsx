import React from 'react'
import { FolderEmptyIcon, FolderMinusIcon, FolderPlusIcon } from '../Icons'

const ChartItemIcon = ({
  item,
  level,
  open,
}) => {
  return (
    <>
      {!item?.children?.length ? (
        <span className="text-gray-400 dark:text-gray-700">
          <FolderEmptyIcon />
        </span>
      ) : open[level] === item?.id ? (
        <span className="text-red-600">
          <FolderMinusIcon />
        </span>
      ) : (
        <span className="text-green-500">
          <FolderPlusIcon />
        </span>
      )}
    </>

  )
}

export default ChartItemIcon
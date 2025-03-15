import React from 'react'
import { useTranslation } from 'react-i18next';
import Btn from '../../shared/Btn';
import {
  SearchIcon,
  PlusIcon,
  TrashIcon,
  EyeIcon,
  PrintIcon,
} from '../../Icons';

const TableBar = ({
  globalFilter,
  setGlobalFilter,
  onClickPrint,
  onClickDelete,
  onClickAdd,
  customAdd
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 items-center justify-between mb-4">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="relative md:block ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 overflow-hidden">
              <span className="pointer-events-none">
                <SearchIcon />
              </span>
            </div>
            {/* <DebouncedInput
              type="text"
              id="search-navbar"
              className={`block w-full p-2  text-sm rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500`}
              onChange={(value) => setGlobalFilter(value)}
              debounce={500}
              value={globalFilter}
            /> */}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {onClickAdd ? (
          <Btn
            kind="primary"
            onClick={onClickAdd}
            className="flex items-center gap-2 bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
          >
            <PlusIcon className="w-6 h-6" circle />
            {t("add_new")}
          </Btn>
        ) : null}

        {customAdd ? (
          customAdd()
        ) : null}

        {onClickDelete ? (
          <Btn
            kind="error"
            className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
            onClick={onClickDelete}
          >
            <TrashIcon />{" "}
          </Btn>
        ) : null}
        {/* <Btn
          onClick={() => setOpenColumnsSetting(true)}
          className="bg-green-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
        >
          <EyeIcon />
        </Btn> */}
        {onClickPrint ? (
          <Btn
            kind="info"
            onClick={onClickPrint}
            className="flex items-center gap-2 bg-purple-500 rounded-md text-white px-4 py-2"
          >
            <PrintIcon className="w-5 h-5" />
            {t("print")}
          </Btn>
        ) : null}
      </div>
    </div>
  )
}

export default TableBar
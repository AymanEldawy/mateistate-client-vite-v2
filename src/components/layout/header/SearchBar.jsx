import { FilterIcon, SearchIcon } from "@/components/Icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchBar = ({
  value,
  searchKey,
  onSearchChange,
  setSearchKey,
  columns,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative hidden md:block ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 overflow-hidden">
        {setSearchKey ? (
          <button
            onClick={() => setOpen(true)}
            className=" text-gray-600 scale-90 mr-1"
          >
            <FilterIcon />
          </button>
        ) : null}
        <span className="pointer-events-none">
          <SearchIcon />
        </span>
      </div>
      <input
        type="text"
        value={value}
        id="search-navbar"
        className={`block w-full p-2  text-sm rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500 ${
          columns ? "pl-16" : "pl-10"
        }`}
        placeholder={
          searchKey ? `${t("search_in")} ${searchKey}` : t("search")
        }
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {open && columns ? (
        <>
          {/* <Backdrop open={open} onClose={() => setOpen(false)} /> */}
          <ul className="absolute z-40 bg-white shadow rounded-md w-full overflow-auto max-h-96">
            {columns?.map((col) => (
              <li
                key={col}
                className="whitespace-nowrap px-2 py-2 hover:bg-gray-200"
                onClick={() => {
                  setSearchKey(col);
                  setOpen(false);
                }}
              >
                {col}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default SearchBar;

import { useTranslation } from 'react-i18next';
import Btn from '../../shared/Btn';
import {
  SearchIcon,
  PlusIcon,
  TrashIcon,
  PrintIcon,
  EyeIcon,
} from '../../Icons';
import DebouncedInput from '@/components/forms/fields/DebouncedInput';

const PaperBar = ({
  globalFilter,
  setGlobalFilter,
  onClickPrint,
  onClickDelete,
  customAdd,
  setOpenForm,
  setOpenViability,
  records,
  hideAdd
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 items-center justify-between mb-2">
      <div className="flex gap-2 items-center">
        <h3 className='ltr:border-r-2 rtl:border-l-2 ltr:pr-4 rtl:pl-4 ltr:mr-2 rtl:ml-2 border-black capitalize'>{t('total')}: {records}</h3>
        <div className="relative">
          <div className="relative md:block ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 overflow-hidden">
              <span className="pointer-events-none">
                <SearchIcon />
              </span>
            </div>
            <DebouncedInput
              type="text"
              id="search-navbar"
              className={`block w-full px-2 py-1  text-sm rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500`}
              onChange={(value) => setGlobalFilter(value)}
              debounce={500}
              value={globalFilter}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {hideAdd ? (
          null
        ) :
          <Btn
            kind="primary"
            onClick={() => {
              setOpenForm(p => !p)
              if (customAdd) customAdd()
            }}
          >
            <PlusIcon className="w-6 h-6" circle />
            {t("add_new")}
          </Btn>

        }

        {onClickDelete ? (
          <Btn
            kind="error"
            onClick={onClickDelete}
          >
            <TrashIcon />{" "}
          </Btn>
        ) : null}
        {onClickPrint ? (
          <Btn
            kind="info"
            onClick={onClickPrint}
          >
            <PrintIcon className="w-5 h-5" />
            {t("print")}
          </Btn>
        ) : null}
        <Btn
          onClick={() => setOpenViability(true)}
          kind="warn"
        >
          view
          <EyeIcon />
        </Btn>
      </div>
    </div>
  )
}

export default PaperBar
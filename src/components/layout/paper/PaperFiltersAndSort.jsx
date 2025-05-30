import { CloseIcon } from "@/components/Icons"
import Btn from "@/components/shared/Btn"
import { useTranslation } from "react-i18next"
const PaperFiltersAndSort = ({ filters, setColumnFilters }) => {
  const { t } = useTranslation()
  const handleRemoveFilter = (filter) => {
    setColumnFilters(filters?.filter(c => c?.id !== filter?.id))
  }

  return (
    <div className="flex gap-4 items-start justify-between  border-t p-2 bg-gray-200 mb-2 px-2">
      <div className="flex gap-2 items-center flex-wrap">
        <span className="font-medium">{t('filters')}: </span>
        {filters?.map(filter => (
          <div className="flex gap-2 text-xs items-center bg-gray-100 rounded-md p-1 border" key={filter?.id}>
            <Btn kind="error" onClick={() => handleRemoveFilter(filter)} containerClassName="!px-1 !py-0"><CloseIcon className="h-4 w-4" /></Btn>
            <span>{filter?.id}</span>:
            <span className="bg-blue-100 text-blue-500 rounded-md px-2 py-1 text-xs font-medium capitalize">
              {filter?.value}
            </span>
          </div>
        ))}

      </div>
      <div className="flex gap-2 items-center  pt-1">
        <span className="font-medium">{t('sort')}: </span>
        <select className="bg-orange-50 text-orange-500 rounded-md px-2 py-1 text-xs font-medium capitalize">
          <option>
            {t('from_oldest_to_newest')}
          </option>
          <option>
            {t('from_newest_to_oldest')}
          </option>
        </select>
      </div>

    </div>
  )
}

export default PaperFiltersAndSort
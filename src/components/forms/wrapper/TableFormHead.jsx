import { useTranslation } from "react-i18next"

const TableFormHead = ({ headers, theadClassName, trClassName, thClassName, withoutAction }) => {
  const { t } = useTranslation()

  return (
    <thead className={`bg-[#337ab7] text-white capitalize ${theadClassName} `}>
      <tr className={` ${trClassName}`}>
        <th className="border min-w-[25px] text-center">#</th>
        {headers?.map(header => (
          <th key={header} className={`py-1 text-sm ${thClassName}`}>{t(header)}</th>
        ))}
        {withoutAction ? null :
          <th className="border text-center">{t('action')}</th>
        }
      </tr>
    </thead>
  )
}

export default TableFormHead
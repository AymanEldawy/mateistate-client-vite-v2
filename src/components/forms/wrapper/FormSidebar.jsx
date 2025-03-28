import { useTranslation } from 'react-i18next'

const FormSidebar = ({ tab, setTab, list, extraMenuContent }) => {
  console.log("🚀 ~ FormSidebar ~ list:", list)
  const { t } = useTranslation();
  return (
    <div className="flex sticky top-0 flex-col bg-gray-200 py-4 text-gray-500 text-sm max-w-[150px] w-full ltr:border-r rtl:border-l border-gray-300">
      {list?.map((step) => (
        <button
          key={step}
          type="button"
          onClick={() => {
            setTab(step)
          }}
          className={`border-b last:border-none border-gray-300 w-full ltr:text-left rtl:text-right px-2 py-[6px] font-medium capitalize ${step === tab && 'bg-light-green text-white ltr:border-l-[6px] rtl:border-r-[6px] border-white'}`}
        >
          {t(step)}
        </button>
      ))}
      {extraMenuContent && extraMenuContent}
    </div>
  )
}

export default FormSidebar
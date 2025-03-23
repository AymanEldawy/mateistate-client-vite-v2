import { ArrowLongIcon } from "@/components/Icons"
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom';

export const PaperHeader = ({ header }) => {
  const navigate = useNavigate()
  const { t } = useTranslation();

  return (
    <div className='capitalize border-b pb-1 flex items-center gap-2 justify-between text-xl font-semibold mb-2'>
      <div className="flex items-center gap-2">
        <button className="ltr:rotate-180 border border-blue-500 rounded-full h-8 w-12 flex items-center justify-center hover:bg-blue-200 text-blue-600" onClick={() => navigate(-1)}><ArrowLongIcon /> </button>
        |
        <h2>{t(header)}</h2>
      </div>
    </div>
  )
}

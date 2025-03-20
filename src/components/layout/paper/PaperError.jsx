import Btn from "@/components/shared/Btn"
import { ErrorText } from "@/components/shared/ErrorText"
import { useTranslation } from "react-i18next"

const PaperError = ({ error, }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute flex-col gap-2 top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-[#00000050] backdrop-blur-sm rounded-md">
      <ErrorText>{error?.message}</ErrorText>
      <Btn kind="primary" onClick={() => window.location.reload()} >{t('refresh')}</Btn>
    </div>
  )
}

export default PaperError
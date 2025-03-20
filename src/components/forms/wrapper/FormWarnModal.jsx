import Btn from '@/components/shared/Btn';
import Modal from '@/components/shared/Modal';
import { useTranslation } from 'react-i18next';

const FormWarnModal = ({ onCancel, onConfirmClose, open }) => {
  const { t } = useTranslation('formWarnAlerts')

  if (!open) return
  
  return (
    <Modal open={open} containerClassName='!z-[105]'>
      <h3 className="text-yellow-600 font-semibold text-lg">{t('warning')}</h3>
      <p className="text-gray-600 text-sm">{t('warnMessage')}</p>
      <div className="flex items-center gap-2 mt-4">
        <Btn onClick={onCancel} kind="default">{t('cancel')}</Btn>
        <Btn
          onClick={onConfirmClose}
          kind="error">
          {t('exist')}
        </Btn>
      </div>
    </Modal>
  )
}

export default FormWarnModal
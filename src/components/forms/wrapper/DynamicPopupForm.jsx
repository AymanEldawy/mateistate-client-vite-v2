import Modal from '@/components/shared/Modal';
import { usePopupForm } from '@/hook/usePopupForm'
import Account from '@/pages/views/Account/Account';

const DynamicPopupForm = () => {
  const { popupFormConfig, onCloseDispatchedForm } = usePopupForm()
  console.log("🚀 ~ DynamicPopupForm ~ popupFormConfig:", popupFormConfig)
  if (!popupFormConfig) return;

  const displayForm = () => {
    switch (popupFormConfig?.table) {
      case 'account':
        return <Account formOnly outerClose={onCloseDispatchedForm} />
      default:
        return
    }
  }


  return (
    <Modal open={true} onClose={onCloseDispatchedForm} bodyClassName="!p-0">

      {displayForm()}
    </Modal>
  )
}

export default DynamicPopupForm
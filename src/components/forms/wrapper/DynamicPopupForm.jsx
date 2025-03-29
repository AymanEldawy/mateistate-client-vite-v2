import Modal from '@/components/shared/Modal';
import { usePopupForm } from '@/hook/usePopupForm'
import { lazy } from 'react';

const Account = lazy(() => '@/pages/views/Account/Account');
const Users = lazy(() => '@/pages/views/Users/Users.jsx');
const Cheque = lazy(() => '@/pages/views/Cheque/Cheque');
const PartialCollectionFrom = lazy(() => '../containers/cheque/PartialCollectionFrom');
const CollectionForm = lazy(() => '../containers/cheque/CollectionForm');

const DynamicPopupForm = () => {
  const { popupFormConfig, onCloseDispatchedForm } = usePopupForm()
  if (!popupFormConfig) return;

  const displayForm = () => {
    switch (popupFormConfig?.table) {
      case 'account':
        return <Account formOnly outerClose={onCloseDispatchedForm} popupFormConfig={popupFormConfig} />
      case 'user':
        return <Users formOnly outerClose={onCloseDispatchedForm} popupFormConfig={popupFormConfig} />
      case 'cheque':
        return <Cheque formOnly outerClose={onCloseDispatchedForm} popupFormConfig={popupFormConfig} />
      // case 'voucher':
      //   return <Voucher formOnly outerClose={onCloseDispatchedForm} popupFormConfig={popupFormConfig} />
      case 'op_partial_collection':
        return <PartialCollectionFrom popupFormConfig={popupFormConfig} outerClose={onCloseDispatchedForm} />
      case 'op_collection':
        return <CollectionForm popupFormConfig={popupFormConfig} outerClose={onCloseDispatchedForm} />
      // case 'op_return':
      //   return <ReturnForm popupFormConfig={popupFormConfig} outerClose={onCloseDispatchedForm} />
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
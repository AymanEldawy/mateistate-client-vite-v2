import Modal from '@/components/shared/Modal';
import { usePopupForm } from '@/hook/usePopupForm'
import { lazy } from 'react';
import InstallmentForm from '../containers/contract/InstallmentForm';

const Voucher = lazy(() => import('@/pages/views/Vouchers/Vouchers'));
const Currency = lazy(() => import('@/pages/views/Currency/Currency'));
const CostCenter = lazy(() => import('@/pages/views/CostCenter/CostCenter'));
const Account = lazy(() => import('@/pages/views/Account/Account'));
const Users = lazy(() => import('@/pages/views/Users/Users.jsx'));
const Cheque = lazy(() => import('@/pages/views/Cheque/Cheque'));
const PartialCollectionFrom = lazy(() => import('../containers/cheque/PartialCollectionFrom'));
const CollectionForm = lazy(() => import('../containers/cheque/CollectionForm'));
const ReturnForm = lazy(() => import('../containers/cheque/ReturnForm'));

const DynamicPopupForm = () => {
  const { popupFormConfig, onCloseDispatchedForm } = usePopupForm()
  if (!popupFormConfig) return;

  const displayForm = () => {
    switch (popupFormConfig?.table) {
      case 'account':
        return <Account formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
        />
      case 'user':
        return <Users formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
        />
      case 'cheque':
        return <Cheque formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
          defaultCode={popupFormConfig?.code}
        />
      case 'cost_center':
        return <CostCenter formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
        />
      case 'currency':
        return <Currency formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
        />
      case 'voucher':
        return <Voucher formOnly
          outerClose={onCloseDispatchedForm}
          popupFormConfig={popupFormConfig}
          defaultNumber={popupFormConfig?.number}
          defaultCode={popupFormConfig?.code}
        />
      case 'op_partial_collection':
        return <PartialCollectionFrom
          popupFormConfig={popupFormConfig}
          outerClose={onCloseDispatchedForm}
        />
      case 'op_collection':
        return <CollectionForm
          popupFormConfig={popupFormConfig}
          outerClose={onCloseDispatchedForm}
        />
      case 'op_return':
        return <ReturnForm
          popupFormConfig={popupFormConfig}
          outerClose={onCloseDispatchedForm}
        />
      case 'installment':
        return <InstallmentForm
          popupFormConfig={popupFormConfig}
          outerClose={onCloseDispatchedForm}
        />
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
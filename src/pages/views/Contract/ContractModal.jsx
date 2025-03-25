import Modal from '@/components/shared/Modal'
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ContractModal = ({
  openForm,
  setOpenForm,
}) => {

  const {watch, setValue} = useFormContext()

  const updateGrid = (gridName, data) => {
    const list = watch(gridName) || [];
    const isNew = openForm?.isNew;
    if (isNew) {
      setValue(`${gridName}.${list.length}`, data);
    } else {
      const index = list.findIndex(item => item?.id === data?.id);
      if (index !== -1) {
        setValue(`${gridName}.${index}`, data);
      } else {
        console.warn(`Entry with id ${data?.id} not found in ${gridName}`);
      }
    }
  };

  const updateChequeGrid = (data) => {
    updateGrid("installment_grid", data);
  };

  const updateVoucherGrid = (data, grid) => {
    updateGrid("voucher_grid", data, grid);
  };


  return (
    <Modal open={openForm} bodyClassName="!p-0" key={openForm?.type}>
      {/* {openForm?.type === "CHEQUE" && (
        <ChequeForm
          number={openForm?.oldValues?.number}
          onClose={() => setOpenForm(null)}
          oldValues={openForm?.oldValues}
          patternCode={+openForm?.code}
          popupView
          action={openForm?.action}
          outerClose={() => setOpenForm(null)}
          updateChequeGrid={updateChequeGrid}
          tableName={
            Object.values(DEFAULT_CHQ_INFO)?.find(
              (c) => c.code === +openForm?.code
            )?.name
          }
          callback={() => setOpenForm(null)}
        />
      )}
      {openForm?.type === "VOUCHER" && (
        <VoucherForm
          number={openForm?.oldValues?.number}
          onClose={() => setOpenForm(null)}
          voucherName={openForm?.voucherName}
          code={
            openForm?.oldValues?.voucher_type || openForm?.voucherType
          }
          oldValues={openForm?.oldValues}
          updateVoucherGrid={updateVoucherGrid}
          outerClose={() => setOpenForm(null)}
          popupView
        />
      )} */}
    </Modal>

  )
}

export default ContractModal
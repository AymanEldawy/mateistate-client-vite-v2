import { PlusIcon, PrintIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import { ErrorText } from "@/components/shared/ErrorText";
import CustomTable from "@/components/tables/containers/CustomTable";
import { CHQ_RECEIVED_CODE, CONNECT_WITH_CONTRACT_CODE, VOUCHER_RECEIPTS_CODE, VOUCHER_RECEIPTS_NAME } from "@/data/GENERATE_STARTING_DATA";
import { CHEQUE_GRID_COLUMNS } from "@/helpers/cheque/chequeColumns";
import { COUNTER_CHQ_NUMBER } from "@/helpers/contract/installmentHelpers";
import { VOUCHER_GRID_COLUMNS } from "@/helpers/voucher/voucherColumns";
import { usePopupForm } from "@/hook/usePopupForm";
import { getAccountCash } from "@/services/accountService";
import { getLastOne } from "@/services/paginationService";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const PaymentsGridButton = ({
  onClickAdd,
  onClickPrint,
  title,
  disabledPrint,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-1 items-center px-2">
      <Btn
        kind="info"
        type="button"
        onClick={onClickAdd}
      >
        <PlusIcon className="w-4 h-4" circle />
        {t(title)}
      </Btn>
      <Btn
        kind="primary"
        disabled={disabledPrint}
        onClick={onClickPrint}
        type="button"
      >
        <PrintIcon className="h-4 w-4" />
        Print
      </Btn>
    </div>
  );
};

const ContractFormPayments = ({
  contract_id, CACHE_LIST, assetType, setOpenForm,
}) => {
  const { watch } = useFormContext();
  const { handleDispatchForm } = usePopupForm();
  const [selectedVouchers, setSelectedVouchers] = useState(null)
  const [selectedCheques, setSelectedCheques] = useState(null)

  const onPrintCheque = () => {
    // let selected = Object.keys(selectedChqRows)?.length;
  };
  const onPrintCash = () => {
    // let selected = Object.keys(selectedVoucherRows)?.length;
  };

  const onClickAddNewCheque = () => {
    let date = new Date();
    date.setMonth(date.getMonth() + watch("installment.each_number"));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;

    let len = watch("installment_grid")?.length + 1;

    handleDispatchForm({
      table: 'cheque',
      code: CHQ_RECEIVED_CODE,
      isNew: true,
      oldValues: {
        code: CHQ_RECEIVED_CODE,
        installment_id: watch("installment.id"),
        connect_with: CONNECT_WITH_CONTRACT_CODE,
        connect_with_id: contract_id,
        account_id: watch("contract.client_id"),
        observe_account_id: watch("installment_grid.0.observe_account_id"),
        cost_center_id: watch("installment_grid.0.cost_center_id"),
        observe_cost_center_id: watch("installment_grid.0.cost_center_id"),
        [`${assetType}_id`]: watch(`contract.${assetType}_id`),
        due_date: new Date(),
        end_due_date: new Date(date),
        bank_id: watch("installment.bank_id"),
        note2: `${COUNTER_CHQ_NUMBER?.[len - 1]} Payment (${len})`,
      },
    });
  };


  const onClickAddNewCash = async () => {
    const last = await getLastOne('voucher', VOUCHER_RECEIPTS_CODE);
    const account_cash_id = await getAccountCash(watch('contract.building_id'));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;
    let note = `Received new cash payment from Mr. ${clientName} due date ${due_date} bank ${bankName}`;

    handleDispatchForm({
      open: true,
      type: "VOUCHER",
      table: 'voucher',
      voucherName: VOUCHER_RECEIPTS_NAME,
      voucherType: VOUCHER_RECEIPTS_CODE,
      isNew: true,
      oldValues: {
        number: +last?.data?.number + 1,
        connect_with: CONNECT_WITH_CONTRACT_CODE,
        connect_with_id: watch("contract.id"),
        voucher_type: VOUCHER_RECEIPTS_CODE,
        account_id: account_cash_id,
        createdAt: new Date(),
        note,
        grid: [
          {
            account_id: watch("contract.client_id"),
            cost_center_id: watch("installment_grid.0.cost_center_id"),
            note,
          },
        ],
      },
    });
  };

  return (
    <>
      <div className="overflow-auto max-h-[380px] p-2 ">
        <div className="flex justify-between items-center">
          <h2 className="text-base text-blue-600 font-semibold">
            Cheques: {watch("installment_grid")?.length}
          </h2>
          {watch("installment_grid")?.length ? (
            <PaymentsGridButton
              title="add_new_chq"
              onClickPrint={onPrintCheque}
              onClickAdd={onClickAddNewCheque}
              disabledPrint={watch("installment_grid")?.length < 1}
            />
          ) : null}
        </div>
        {watch("installment_grid")?.length ? (
          <CustomTable
            containerClassName="mt-2 max-h-[180px]"
            columns={CHEQUE_GRID_COLUMNS}
            data={watch('installment_grid')}
            pageCount={watch('installment_grid')?.length}
            rowSelection={selectedCheques}
            setRowSelection={setSelectedCheques}
            meta={{
              handleDispatchForm
            }}
          />
        ) : (
          <ErrorText containerClassName="!text-center">There is no Cheques</ErrorText>
        )}
        <div className="my-4 border-t w-full h-[1px]" />
        <div className="flex justify-between items-center py-2">
          <h2 className="text-base text-blue-600 font-semibold">
            Cash: {watch("voucher_grid")?.length}
          </h2>

          {watch("contract.id") ? (
            <PaymentsGridButton
              title="add_new_cash"
              onClickPrint={onPrintCash}
              disabledPrint={watch("voucher_grid")?.length < 1}
              onClickAdd={onClickAddNewCash}
            />
          ) : null}
        </div>

        {watch("voucher_grid")?.length ? (
          <CustomTable
            containerClassName="mt-2 max-h-[180px]"
            columns={VOUCHER_GRID_COLUMNS}
            data={watch('voucher_grid')}
            pageCount={watch('voucher_grid')?.length}
            rowSelection={selectedVouchers}
            setRowSelection={setSelectedVouchers}
            meta={{
              handleDispatchForm
            }}
          />

        ) : (
          <ErrorText containerClassName="!text-center">There is no Cash</ErrorText>
        )}
        <div className="divide-x-2" />
      </div>
    </>
  );
};


export default ContractFormPayments
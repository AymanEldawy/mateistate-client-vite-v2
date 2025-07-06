import { PlusIcon, PrintIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import { ErrorText } from "@/components/shared/ErrorText";
import CustomTable from "@/components/tables/containers/CustomTable";
import {
  CHQ_RECEIVED_CODE,
  CONNECT_WITH_CONTRACT_CODE,
  VOUCHER_RECEIPTS_CODE,
  VOUCHER_RECEIPTS_NAME,
} from "@/data/GENERATE_STARTING_DATA";
import { CHEQUE_GRID_COLUMNS } from "@/helpers/cheque/chequeColumns";
import { COUNTER_CHQ_NUMBER } from "@/helpers/contract/installmentHelpers";
import { CASHES_COLUMNS } from "@/helpers/voucher/voucherColumns";
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
      <Btn kind="info" type="button" onClick={onClickAdd}>
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
  contract_id,
  CACHE_LIST,
  assetType,
  setOpenForm,
}) => {
  const { watch } = useFormContext();
  const { handleDispatchForm } = usePopupForm();
  const [selectedVouchers, setSelectedVouchers] = useState(null);
  const [selectedCheques, setSelectedCheques] = useState(null);

  const onPrintCheque = () => {
    // let selected = Object.keys(selectedChqRows)?.length;
  };
  const onPrintCash = () => {
    // let selected = Object.keys(selectedVoucherRows)?.length;
  };

  const onClickAddNewCheque = () => {
    let date = new Date();
    date.setMonth(date.getMonth() + watch("installment.eachNumber"));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bankId")
    )?.name;

    let len = watch("cheques")?.length + 1;

    handleDispatchForm({
      table: "cheque",
      code: CHQ_RECEIVED_CODE,
      isNew: true,
      handleRefetchOnChangeData,
      oldValues: {
        code: CHQ_RECEIVED_CODE,
        installmentId: watch("installment.id"),
        connectWith: CONNECT_WITH_CONTRACT_CODE,
        connectWithId: contract_id,
        accountId: watch("contract.client_id"),
        observeAccountId: watch("cheques.0.observeAccountId"),
        costCenterId: watch("cheques.0.costCenterId"),
        observeCostCenterId: watch("cheques.0.costCenterId"),
        [`${assetType}Id`]: watch(`contract.${assetType}Id`),
        dueDate: new Date(),
        endDueDate: new Date(date),
        bankId: watch("installment.bankId"),
        note2: `${COUNTER_CHQ_NUMBER?.[len - 1]} Payment (${len})`,
      },
    });
  };

  const onClickAddNewCash = async () => {
    const last = await getLastOne("voucher", VOUCHER_RECEIPTS_CODE);
    const account_cash_id = await getAccountCash(watch("contract.building_id"));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bankId")
    )?.name;
    let note = `Received new cash payment from Mr. ${clientName} due date ${due_date} bank ${bankName}`;

    handleDispatchForm({
      open: true,
      type: "VOUCHER",
      table: "voucher",
      voucherName: VOUCHER_RECEIPTS_NAME,
      voucherType: VOUCHER_RECEIPTS_CODE,
      isNew: true,
      handleRefetchOnChangeData,
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
            cost_center_id: watch("cheques.0.cost_center_id"),
            note,
          },
        ],
      },
    });
  };

  const handleRefetchOnChangeData = () => refetch();

  console.log(watch(), "--");

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-base text-blue-600 font-semibold">
            Cheques: {watch("cheques")?.length}
          </h2>
          {/* {watch("cheques")?.length ? ( */}
          <PaymentsGridButton
            title="add_new_chq"
            onClickPrint={onPrintCheque}
            onClickAdd={onClickAddNewCheque}
            // disabledPrint={watch("cheques")?.length < 1}
          />
          {/* ) : null} */}
        </div>
        {watch("cheques")?.length ? (
          <CustomTable
            containerClassName="mt-2 max-h-[180px]"
            columns={CHEQUE_GRID_COLUMNS}
            data={watch("cheques")}
            pageCount={watch("cheques")?.length}
            rowSelection={selectedCheques}
            setRowSelection={setSelectedCheques}
            meta={{
              handleDispatchForm,
              handleRefetchOnChangeData,
            }}
          />
        ) : (
          <ErrorText containerClassName="!text-center">
            There is no Cheques
          </ErrorText>
        )}
        <div className="my-4 border-t w-full h-[1px]" />
        <div className="flex justify-between items-center py-2">
          <h2 className="text-base text-blue-600 font-semibold">
            Cash: {watch("cashes")?.length}
          </h2>

          {/* {watch("contract.id") ? ( */}
          <PaymentsGridButton
            title="add_new_cash"
            onClickPrint={onPrintCash}
            // disabledPrint={watch("cashes")?.length < 1}
            onClickAdd={onClickAddNewCash}
          />
          {/* ) : null} */}
        </div>

        {watch("cashes")?.length ? (
          <CustomTable
            containerClassName="mt-2 max-h-[180px]"
            columns={CASHES_COLUMNS}
            data={watch("cashes")}
            pageCount={watch("cashes")?.length}
            rowSelection={selectedVouchers}
            setRowSelection={setSelectedVouchers}
            meta={{
              handleDispatchForm,
              handleRefetchOnChangeData,
            }}
          />
        ) : (
          <ErrorText containerClassName="!text-center">
            There is no Cash
          </ErrorText>
        )}
        <div className="divide-x-2" />
      </div>
    </>
  );
};

export default ContractFormPayments;

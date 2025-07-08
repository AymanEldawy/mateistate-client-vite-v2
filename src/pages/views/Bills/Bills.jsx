import { FormHeaderSearchBar } from "@/components/forms/wrapper";
import PaperLayout from "@/components/layout/paper/PaperLayout";
import BtnGroups from "@/components/shared/BtnGroups";
import EntryBar from "@/components/shared/EntryBar";
import Modal from "@/components/shared/Modal";
import QUERY_KEYS from "@/data/queryKeys";
import SEARCH_PARAMS from "@/data/searchParamsKeys";
import billColumns from "@/helpers/bill/billColumns";
import {
  billDefaultValue,
  billValidationSchema,
} from "@/helpers/bill/billValidationSchema";
import useCustomSearchParams from "@/hook/useCustomSearchParams";
import {
  getAllBillPatterns,
  getBillPatternByCode,
} from "@/services/billPatternsService";
import {
  createBill,
  deleteBill,
  deleteManyBills,
  getAllBills,
  getSearchBill,
  getSingleBill,
  updateBill,
} from "@/services/billService";
import { useQuery } from "@tanstack/react-query";
import { lazy, useState } from "react";

const BillForm = lazy(() =>
  import("@/components/forms/containers/bill/BillForm")
);

const Bills = () => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openFormType, setOpenFormType] = useState(false);

  const { data: pattern } = useQuery({
    queryKey: [QUERY_KEYS.VOUCHER_PATTERN, searchParamsSelectedCode],
    queryFn: async () => {
      const response = await getBillPatternByCode(searchParamsSelectedCode);
      if (response?.success) {
        return response;
      }
    },
    enabled: !!searchParamsSelectedCode,
  });

  return (
    <>
      <Modal
        containerClassName="!z-[100]"
        open={openFormType}
        onClose={() => setOpenFormType(false)}
      >
        <BtnGroups
          queryKey={QUERY_KEYS.BILL_PATTERN}
          queryFn={getAllBillPatterns}
          onClose={() => setOpenFormType(false)}
        />
      </Modal>
      <PaperLayout
        name="bill"
        queryKey={QUERY_KEYS.BILLS}
        queryFn={getAllBills}
        handleDeleteSelected={deleteManyBills}
        paperHeaderProps={{
          header: "bills",
        }}
        paperBarProps={{
          onClickPrint: true,
          onClickAdd: true,
          customAdd: () => setOpenFormType(true),
        }}
        tableProps={{
          columns: billColumns,
        }}
        formProps={{
          defaultValue: billDefaultValue,
          validationSchema: billValidationSchema,
          mutationAddFunction: createBill,
          mutationUpdateFunction: updateBill,
          getSingleFunction: getSingleBill,
          onSuccessAction: () => {},
          isSteps: false,
          onHandleDelete: deleteBill,
          RenderForm: (props) => (
            <BillForm
              {...props}
              code={searchParamsSelectedCode}
              pattern={pattern}
            />
          ),
        }}
        formHeaderProps={{
          header: pattern?.name || "bill",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={(option) => option?.name}
                getOptionValue={(option) => option?.id}
                getSearch={getSearchBill}
                queryKey={QUERY_KEYS.BILLS}
              />
              <EntryBar entryId={values?.id} tab="bill" />
            </>
          ),
        }}
      />
    </>
  );
};

export default Bills;

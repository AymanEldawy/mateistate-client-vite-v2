import { useMemo, useState } from "react";
import BlockPaper from "@/components/Global/BlockPaper";
import { ReportFilterColumns } from "../../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "@/components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { ReportBetweenDateField } from "@/components/ReportsComponents/ReportsFields/ReportDateField";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import useRefTable from "Hooks/useRefTables";
import { ReportFilterFields } from "@/components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "@/components/ReportsComponents/ReportsFields/ReportFields";
import { ReportFilterBillPattern } from "@/components/ReportsComponents/TypesFilter/ReportFilterBillPattern";
import { ReportResultsWrapper } from "@/components/ReportsComponents/ReportResultsWrapper";
import REPORTS from "Helpers/Lib/global-reports";

// ## Metadata
// - total bill (total materials output)
// - total cost ( total material price )
// - gross Profit (total bill - total cost)
// - Profit/bills rate ()
// - Profit/cost rat


// ## checkbox
// - show bill Details
// - view under purchase price item 

const BillProfitReport = () => {
  const name = "bill_profit_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [billIds, setBillIds] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [data, setData] = useState([]);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async (value) => {
    let fn = REPORTS?.[name];
    const res = await fn({
      filters: watch(),
    });
    setData(res?.data);
  };

  return (
    <>
      <BlockPaper title={name?.replace(/_/gi, " ")}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <ReportFilterFields title={"Fields"}>
                <ReportFields
                  containerClassName="gap-3"
                  fields={fields}
                  sharedLabelClassName="w-[200px]"
                />
              </ReportFilterFields>
              <ReportFilterColumns
                searchKey="accessorKey"
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
              />
              <div className="flex flex-col gap-4">
                <ReportFilterBillPattern
                  billIds={billIds}
                  setBillIds={setBillIds}
                />
                <ReportBetweenDateField
                  date1Field={{
                    name: "start_date",
                  }}
                  date2Field={{
                    name: "end_date",
                  }}
                />
              </div>
            </div>
            <div></div>
              <Button
     onClick={() => setOpenReportResults(true)}
     title="Show"
     classes="my-4 flex ltr:ml-auto rtl:mr-auto"
 />
          </form>
        </FormProvider>
      </BlockPaper>
      <ReportResultsWrapper
        data={data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default BillProfitReport;

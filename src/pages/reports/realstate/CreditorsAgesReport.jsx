import { FormProvider, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { ReportFilterBillPattern } from "@/components/reports/filters/ReportFilterBillPattern";
import { ReportFilterVoucherPattern } from "@/components/reports/filters/ReportFilterVoucherPattern";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { getCreditorsAgesReportData } from "@/services/reportsServices";

const REPORT_OPTIONS = [
  "show_your_monitored_customers",
  "amendment_according_to_the_bulletin_historically",
];

const CreditorsAgesReport = () => {
  const name = "creditors_ages_report";
  const methods = useForm();
  const { watch, register, setValue } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [voucherIds, setVoucherIds] = useState({});
  const [invoiceIds, setInvoiceIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getCreditorsAgesReportData} //
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        <ReportFilterFields title={"Fields"}>
          <ReportFields
            containerClassName="!gap-2"
            fields={fields}
            sharedLabelClassName="w-[260px]"
          />
          {REPORT_OPTIONS?.map((option) => (
            <RHFCheckbox
              key={option}
              {...{
                label: option,
                name: option,
              }}
            />
          ))}
          <div className="border p-2 rounded-md">
            <p className="font-medium mb-2">Report type</p>
            <div className="flex gap-2 items-center">
              {["collective", "detailed"]?.map((option) => (
                <label className="flex-1 flex items-center gap-2 capitalize" key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    className="w-4 h-4"
                    checked={watch("report_type") === option}
                    {...register("report_type", {
                      onChange: (e) => {
                        setValue("report_type", e.target.value);
                      },
                    })}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportFilterVoucherPattern
            voucherIds={voucherIds}
            setVoucherIds={setVoucherIds}
          />
          <ReportFilterBillPattern
            billIds={invoiceIds}
            setBillIds={setInvoiceIds}
          />
          <ReportFilterCard title="Migration">
            <RHFCheckbox
              {...{
                label: "displaying_transferred_constraints",
                name: "transferred",
              }}
            />
            <RHFCheckbox
              {...{
                label: "displaying_untransferred_constraints",
                name: "Untransferred",
              }}
            />
          </ReportFilterCard>
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </div>
    </ReportWrapper>
  );
};

export default CreditorsAgesReport;

// import { FormProvider, useForm } from "react-hook-form";

// import { getReportColumns, getReportFields } from "helpers/Reports";
// import { useMemo, useState } from "react";

// import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
// import { getCustomersAccountStatementReportData } from "@/services/reportsServices";
// import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
// import { ReportFields } from "@/components/reports/shared/ReportFields";
// import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
// import { RHFCheckbox } from "@/components/forms/fields";
// import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
// import { ReportFilterChequePattern } from "@/components/reports/filters/ReportFilterChequePattern";
// import { ReportFilterVoucherPattern } from "@/components/reports/filters/ReportFilterVoucherPattern";
// import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
// import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";

// const CustomersAccountStatementReport = () => {
//   const name = "customer_account_statement_report";
//   const methods = useForm();
//   const { handleSubmit, watch } = methods;
//   const [selectedColumns, setSelectedColumns] = useState({});
//   const [chqIds, setChqIds] = useState({});
//   const [voucherIds, setVoucherIds] = useState({});

//   const fields = useMemo(() => getReportFields(name), []);
//   const columns = useMemo(() => getReportColumns(name), []);


//   return (
//     <ReportWrapper
//       columns={columns}
//       getReportData={getCustomersAccountStatementReportData}
//       reportHeadProps={{
//         header: name
//       }}
//       methods={methods}
//     >
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
//         <ReportFilterFields>
//           <ReportFields
//             fields={fields}
//             sharedLabelClassName="w-[200px]"
//           />
//           <ReportBetweenDateField
//             customTitle={<RHFCheckbox name="allow_date" label="date" />}
//             date1Field={{ name: "start_date" }}
//             date2Field={{ name: "end_date" }}
//             sharedProps={{
//               readOnly: !watch("allow_date"),
//             }}
//           />

//           <ReportPostedField />
//         </ReportFilterFields>
//         <div className="grid gap-4">
//           <ReportFilterChequePattern
//             chqIds={chqIds}
//             setChqIds={setChqIds}
//           />
//           <ReportFilterVoucherPattern
//             voucherIds={voucherIds}
//             setVoucherIds={setVoucherIds}
//           />
//           <ReportStatementField name="note" containerClassName="!m-0" />
//         </div>
//         <ReportFilterColumns
//           searchKey="accessorKey"
//           columns={columns}
//           selectedColumns={selectedColumns}
//           setSelectedColumns={setSelectedColumns}
//           bodyClassName="h-[380px]"
//         />
//       </div>
//     </ReportWrapper>
//   );
// };

// export default CustomersAccountStatementReport;

import React from 'react'

const CustomersAccountStatementReport = () => {
  return (
    <div>CustomersAccountStatementReport</div>
  )
}

export default CustomersAccountStatementReport
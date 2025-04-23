// import { useMemo, useState } from "react";
// import { useForm } from "react-hook-form";
// import { getReportColumns } from "helpers/reports";
// import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
// import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
// import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
// import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
// import { getChangesFlatSalePricingReportData } from "@/services/reportsServices";
// import { RHFAsyncSelectField, RHFInput } from "@/components/forms/fields";

// const ChangesFlatsSalePricingReport = () => {
//   const name = "changes_flats_sale_pricing_report";
//   const methods = useForm();
//   const [buildingsIds, setBuildingsIds] = useState({});
//   const columns = useMemo(() => getReportColumns(name), []);

//   return (
//     <ReportWrapper
//       columns={columns}
//       getReportData={getChangesFlatSalePricingReportData}
//       reportHeadProps={{
//         header: name
//       }}
//       methods={methods}
//     >
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
//         <ReportFilterFields title="Fields">
//           <RHFAsyncSelectField
//             label="flat_no"
//             name="apartment_id"
//             table="apartments"
//           />
//           <RHFInput
//             label="area"
//             name="area"
//           />

//           <ReportBetweenDateField containerClassName="!m-0" />
//         </ReportFilterFields>
//         <div className="grid gap-4">
//           <ReportFilterBuildings
//             buildingsIds={buildingsIds}
//             setBuildingsIds={setBuildingsIds}
//             bodyClassName="h-[210px]"
//           />
//         </div>
//       </div>
//     </ReportWrapper>
//   );
// };

// export default ChangesFlatsSalePricingReport;

import React from 'react'

const ChangesFlatsSalePricingReport = () => {
  return (
    <div>ChangesFlatsSalePricingReport</div>
  )
}

export default ChangesFlatsSalePricingReport
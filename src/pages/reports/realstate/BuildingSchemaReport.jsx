// import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
// import { refetchBuildingAssets } from "@/helpers/building/buildingHelpers";
// import { getBuildingSchemaReportData } from "@/services/reportsServices";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";


// const RESULTS = {
//   empty: {
//     percentage: "23%",
//     count: 23,
//   },
//   rented: {
//     percentage: "23%",
//     count: 23,
//   },
//   contract_near_ending: {
//     percentage: "23%",
//     count: 23,
//   },
//   contract_expired: {
//     percentage: "23%",
//     count: 23,
//   },
//   reserved: {
//     percentage: "23%",
//     count: 23,
//   },
//   not_available: {
//     percentage: "23%",
//     count: 23,
//   },
// };

// const BuildingSchemaReport = () => {
//   const name = "building_schema_report";
//   const methods = useForm();
//   const { watch } = methods;
//   const [buildings, setBuildings] = useState([]);
//   const [selectedBuilding, setSelectedBuilding] = useState({});
//   const [selectedTab, setSelectedTab] = useState({});
//   const [flatsDetails, setFlatsDetails] = useState({});
//   // const { get } = useCurd();

//   // const fetchBuildings = async () => {
//   //   const res = await get("building");
//   //   if (res?.success) {
//   //     setBuildings(res?.result);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchBuildings();
//   // }, []);

//   useEffect(() => {
//     let buildingId = watch("building_id");
//     setSelectedBuilding(buildings?.find((b) => b?.id === buildingId));

//     refetchBuildingAssets(buildingId, setFlatsDetails, {}, () => { });
//   }, [watch("building_id")]);


//   return (
//     <ReportWrapper
//       columns={[]} //
//       getReportData={getBuildingSchemaReportData} //
//       reportHeadProps={{
//         header: name
//       }}
//       methods={methods}
//     >
//       <div className="grid grid-cols-3 gap-4">
//         <UniqueField
//           {...{
//             label: "building_id",
//             name: "building_id",
//           }}
//           list={buildings}
//         />
//         <Input
//           {...{
//             label: "date",
//             name: "date",
//             type: "date",
//           }}
//         />
//         <Input
//           {...{
//             label: "Days number to termination contract",
//             name: "Days number",
//             type: "number",
//           }}
//         />
//       </div>
//       <div className="flex items-center overflow-auto text-left ">
//         {Object.values(FLAT_PROPERTY_TABS)?.map((tab, index) => (
//           <button
//             type="button"
//             onClick={() => setSelectedTab(tab)}
//             key={`${index}-${tab?.tabName}`}
//             className={`${selectedTab?.tabName === tab?.tabName
//               ? "!text-black !font-medium dark:bg-dark-border dark:!text-white bg-white"
//               : "bg-gray-100 dark:bg-dark-bg"
//               } border dark:border-dark-border p-2 px-4 text-sm text-gray-500 font-normal min-w-[120px] w-fit capitalize whitespace-nowrap`}
//           >
//             {tab?.tabName}
//           </button>
//         ))}
//       </div>

//       {/* units */}
//       {Object.keys(flatsDetails)?.length ? (
//         <BuildingSchemaUnits
//           selectedTab={selectedTab}
//           building={selectedBuilding}
//           flatsDetails={flatsDetails}
//         />
//       ) : null}
//       <BuildingSchemaResults results={RESULTS} />
//     </ReportWrapper>
//   );
// };

// export default BuildingSchemaReport;

import React from 'react'

const BuildingSchemaReport = () => {
  return (
    <div>BuildingSchemaReport</div>
  )
}

export default BuildingSchemaReport
import ReportWrapper from '@/components/reports/wrapper/ReportWrapper'
import chequeReportColumns from '@/helpers/reports/chequeReportColumns'
import { getChequeReportData } from '@/services/reportsServies'
import React from 'react'

const ChequeReport = () => {
  return (
    <ReportWrapper
      columns={chequeReportColumns} //
      getReportData={getChequeReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: "cheque_report"
      }}
    >
      test
      {/* children */}
    </ReportWrapper>
  )
}

export default ChequeReport
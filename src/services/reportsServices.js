import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

// ===============  NOTE: for now just register a new function for new report ==============
// ===============  GET: cheque report data ==============
export const getChequeReportData = () => {}
// ===============  GET: changes flat rent price ==============
export const getChangesFlatRentPricingReportData = () => {}
// ===============  GET: changes flat sale price ==============
export const getChangesFlatSalePricingReportData = () => {}
// ===============  GET: building schema report data ==============
export const getBuildingSchemaReportData = () => {}
// ===============  GET: announcement report data ==============
export const getCollectionChqReportData = () => {}
// ===============  GET: announcement report data ==============
export const getComplaintsReportData = () => {}
// ===============  GET: announcement report data ==============
export const getContractChequeReportData = () => {}
// ===============  GET: announcement report data ==============
export const getContractCycleReportData = () => {}
// ===============  GET: announcement report data ==============
export const getContractNearToExpiredReportData = () => {}
// ===============  GET: announcement report data ==============
export const getContractPaymentsReportData = () => {}
// ===============  GET: announcement report data ==============
export const getContractDepositReportData = () => {}
// ===============  GET: announcement report data ==============
export const getExpiredContractReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.EXPIRED_CONTRACTS, data);
}
// ===============  GET: announcement report data ==============
export const getContractReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.CONTRACTS, data);
}
// ===============  GET: announcement report data ==============
export const getCostCenterTrialBalanceReportData = () => {}
// ===============  GET: announcement report data ==============
export const getCostCenterGeneralLedgerReportData = () => {}
// ===============  GET: announcement report data ==============
export const getCreditorsAgesReportData = () => {}
// ===============  GET: announcement report data ==============
export const getCustomersAccountStatementReportData = () => {}
// ===============  GET: announcement report data ==============
export const getDueNotePaperReportData = () => {}
// ===============  GET: announcement report data ==============
export const getEarningRentalIncomeEarnedReportData = () => {}
// ===============  GET: announcement report data ==============
export const getGeneralLedgerReportData = () => {}
// ===============  GET: announcement report data ==============
export const getJournalLedgerReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.JOURNAL_LEDGER, data);
}
// ===============  GET: announcement report data ==============
export const getLeasedLandsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LEASED_LANDS, data);
}
// ===============  GET: announcement report data ==============
export const getLeasedParkingReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LEASED_PARKING, data);
}
// ===============  GET: announcement report data ==============
export const getLeasedPropertyActivityReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LEASED_PROPERTY_ACTIVITY_REPORT, data);
}
// ===============  GET: announcement report data ==============
export const getLeasedUnitsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LEASED_UNITS, data);
}
// ===============  GET: announcement report data ==============
export const getLeasedVillasReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LEASED_VILLAS, data);
}
// ===============  GET: announcement report data ==============
export const getWorkerReportData = () => {}
// ===============  GET: announcement report data ==============
export const getVATBillsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.VAT_BILLS, data);
}
// ===============  GET: announcement report data ==============
export const getUnitsWillVacatedReportData = () => {}
// ===============  GET: announcement report data ==============
export const getUnitConditionConstructionReportData = () => {}
// ===============  GET: announcement report data ==============
export const getBillDetailsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.BILL_DETAILS, data);
}
// ===============  GET: announcement report data ==============
export const getSoldVillasReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.VILLA_SOLD, data);
}
// ===============  GET: announcement report data ==============
export const getSoldUnitsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.SOLD_UNITS, data);
}
// ===============  GET: announcement report data ==============
export const getSoldLandsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.LAND_SOLD, data);
}
// ===============  GET: announcement report data ==============
export const getSheetReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.BALANCE_SHEET, data);
}
// ===============  GET: announcement report data ==============
export const getServicesContractsReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.CONTRACTS, data);
}
// ===============  GET: announcement report data ==============
export const getReturnedChqReportData = () => {}
// ===============  GET: announcement report data ==============
export const getReservedUnitsReportData = () => {}
// ===============  GET: announcement report data ==============
export const getOwnerExpensesReportData = () => {}
// ===============  GET: announcement report data ==============
export const getOverduePaymentsReportData = () => {}
// ===============  GET: announcement report data ==============
export const getMangerChequeReportData = () => {}
// ===============  GET: announcement report data ==============
export const getAnnouncementReportData = () => {}
// ===============  GET: announcement report data ==============
export const getProfitAndLossReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.PROFIT_AND_LOSS, data);
}
// ===============  GET: announcement report data ==============
export const getInventoryReportData = (data) => {
  return http.post(API_URL_CONSTANTS.REPORTS.INVENTORY, data);
}
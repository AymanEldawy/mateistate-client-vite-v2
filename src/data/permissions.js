import PATHS from "./paths";
import ROLES from "./roles";

export const ALL_ROLES = "ALL";

const PERMISSIONS = {
  /********** General **********/
  [PATHS.HOME]: ALL_ROLES,
  [PATHS.PROFILE]: ALL_ROLES,
  [PATHS.CHANGE_PASSWORD]: ALL_ROLES,
  /******************** Announcements ********************/
  [PATHS.ALL_ANNOUNCEMENTS]: [ROLES.ADMIN],
  [PATHS.LOGIN]: ALL_ROLES,
  [PATHS.FORGOT_PASSWORD]: ALL_ROLES,
  [PATHS.RESET_PASSWORD]: ALL_ROLES,
  [PATHS.ACCOUNT]: ALL_ROLES,
  [PATHS.ACCOUNT_CHART]: ALL_ROLES,
  [PATHS.COST_CENTER]: ALL_ROLES,
  [PATHS.COUNTRY]: ALL_ROLES,
  [PATHS.COST_CENTER_CHART]: ALL_ROLES,
  [PATHS.OWNER]: ALL_ROLES,
  [PATHS.SELLER]: ALL_ROLES,
  [PATHS.VOUCHERS]: ALL_ROLES,
  [PATHS.LESSOR]: ALL_ROLES,
  [PATHS.BANK]: ALL_ROLES,
  [PATHS.CURRENCY]: ALL_ROLES,
  [PATHS.USER]: ALL_ROLES,
  [PATHS.BUILDING]: ALL_ROLES,
  [PATHS.Tools]: ALL_ROLES,
  [PATHS.APARTMENT]: ALL_ROLES,
  [PATHS.SHOP]: ALL_ROLES,
  [PATHS.PARKING]: ALL_ROLES,
  [PATHS.LAND]: ALL_ROLES,
  [PATHS.VILLA]: ALL_ROLES,
  [PATHS.OWNER_EXPENSES_TYPES]: ALL_ROLES,
  [PATHS.OWNER_EXPENSES]: ALL_ROLES,
  [PATHS.RESERVATION_PROPERTY]: ALL_ROLES,
  [PATHS.CONTRACT_PATTERN]: ALL_ROLES,
  [PATHS.CHEQUE_PATTERN]: ALL_ROLES,
  [PATHS.VOUCHER_PATTERN]: ALL_ROLES,
  [PATHS.BILL_PATTERN]: ALL_ROLES,
  [PATHS.ACCOUNTING_VOUCHER_PATTERN]: ALL_ROLES,
  [PATHS.SERVICE]: ALL_ROLES,
  [PATHS.LAWSUIT]: ALL_ROLES,
  [PATHS.STORE]: ALL_ROLES,
  [PATHS.STORE_CHART]: ALL_ROLES,
  [PATHS.MATERIAL_GROUP]: ALL_ROLES,
  [PATHS.MATERIAL]: ALL_ROLES,
  [PATHS.MATERIAL_CHART]: ALL_ROLES,
  [PATHS.MATERIAL_UNREGISTER]: ALL_ROLES,
  [PATHS.MAINTENANCES]: ALL_ROLES,
  [PATHS.MAINTENANCES_PROPERTY]: ALL_ROLES,
  [PATHS.MAINTENANCES_SERVICE]: ALL_ROLES,
  [PATHS.CATEGORY]: ALL_ROLES,
  [PATHS.CATEGORY_PROBLEM]: ALL_ROLES,
  [PATHS.USER_WORK_TIMES]: ALL_ROLES,
  [PATHS.LACK_REASON]: ALL_ROLES,
  [PATHS.EVACUATION_REQUEST]: ALL_ROLES,
  [PATHS.BILLS]: ALL_ROLES,
  [PATHS.CHEQUE]: ALL_ROLES,
  [PATHS.CONTRACT]: ALL_ROLES,
  [PATHS.ENTRIES]: ALL_ROLES,
  [PATHS.OWNER_EXPENSES_REPORT]: ALL_ROLES,
  [PATHS.CHEQUE_REPORT]: ALL_ROLES,
  [PATHS.RETURNED_CHEQUES_REPORT]: ALL_ROLES,
  [PATHS.DUE_NOTE_PAPERS_REPORT]: ALL_ROLES,
  [PATHS.COLLECTION_CHEQUE_REPORT]: ALL_ROLES,
  [PATHS.OVERDUE_PAYMENTS_REPORT]: ALL_ROLES,
  [PATHS.MANAGER_CHEQUE_REPORT]: ALL_ROLES,
  [PATHS.VAT_BILLS_REPORT]: ALL_ROLES,
  [PATHS.JOURNAL_LEDGER_REPORT]: ALL_ROLES,
  [PATHS.GENERAL_LEDGER_REPORT]: ALL_ROLES,
  [PATHS.TRIAL_BALANCE_REPORT]: ALL_ROLES,
  [PATHS.CREDITORS_AGES_REPORT]: ALL_ROLES,
  [PATHS.TRADING_SHEET_REPORT]: ALL_ROLES,
  [PATHS.PROFIT_AND_LOSS_REPORT]: ALL_ROLES,
  [PATHS.BALANCE_SHEET_REPORT]: ALL_ROLES,
  [PATHS.LEASE_UNITS_REPORT]: ALL_ROLES,
  [PATHS.LEASE_LANDS_REPORT]: ALL_ROLES,
  [PATHS.LEASE_VILLAS_REPORT]: ALL_ROLES,
  [PATHS.LEASE_PARKING_REPORT]: ALL_ROLES,
  [PATHS.UNITS_WILL_VACATED_REPORT]: ALL_ROLES,
  [PATHS.RESERVED_UNITS_REPORT]: ALL_ROLES,
  [PATHS.LEASED_PROPERTY_ACTIVITY_REPORT]: ALL_ROLES,
  [PATHS.SOLD_UNITS_REPORT]: ALL_ROLES,
  [PATHS.SOLD_LANDS_REPORT]: ALL_ROLES,
  [PATHS.SOLD_VILLAS_REPORT]: ALL_ROLES,
  [PATHS.UNREALIZED]: ALL_ROLES,
  [PATHS.CONTRACT_REPORT]: ALL_ROLES,
  [PATHS.CONTRACT_DISCLOSURE_REPORT]: ALL_ROLES,
  [PATHS.SERVICES_CONTRACTS_REPORT]: ALL_ROLES,
  [PATHS.CONTRACT_CYCLE_REPORT]: ALL_ROLES,
  [PATHS.CONTRACTS_DEPOSIT_REPORT]: ALL_ROLES,
  [PATHS.EXPIRED_CONTRACT]: ALL_ROLES,
  [PATHS.NEAR_TO_EXPIRE_CONTRACT]: ALL_ROLES,
  [PATHS.CONTRACT_CHEQUE_REPORT]: ALL_ROLES,
  [PATHS.CONTRACT_PAYMENTS_REPORT]: ALL_ROLES,
  [PATHS.BUILDING_SCHEMA_REPORT]: ALL_ROLES,
  [PATHS.WAREHOUSE_REPORT]: ALL_ROLES,
  [PATHS.ITEM_ACTIVITY_REPORT]: ALL_ROLES,
  [PATHS.INVENTORY_REPORT]: ALL_ROLES,
  [PATHS.ENDING_INVENTORY_REPORT]: ALL_ROLES,
  [PATHS.SALES_REPORT]: ALL_ROLES,
  [PATHS.BILL_DETAILS_REPORT]: ALL_ROLES,
  [PATHS.BILL_PROFIT_REPORT]: ALL_ROLES,
  [PATHS.COMPLAINTS_REPORT]: ALL_ROLES,
  [PATHS.WORKER_REPORT]: ALL_ROLES,
};

export default PERMISSIONS;

export const userHasPermission = (permissions, role) =>
  permissions === ALL_ROLES || permissions?.includes(role);

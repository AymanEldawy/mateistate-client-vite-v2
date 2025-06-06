const PATHS = {
  /********** General **********/
  HOME: "/",
  PROFILE: "/profile",
  CHANGE_PASSWORD: "/profile/password",
  /********** Authentication **********/
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  /******************** ACCOUNT ********************/
  ACCOUNT: "/accounts",
  /******************** ACCOUNT_CHART ********************/
  ACCOUNT_CHART: "/chart/accounts",
  /******************** COST_CENTER ********************/
  COST_CENTER: "/cost-center",
  /******************** country ********************/
  COUNTRY: "/country",
  /******************** COST_CENTER_CHART ********************/
  COST_CENTER_CHART: "/chart/cost_center",
  /******************** OWNER ********************/
  OWNER: "/owner",
  /******************** SELLER ********************/
  SELLER: "/seller",
  /******************** VOUCHERS ********************/
  VOUCHERS: "/vouchers",
  /******************** LESSOR ********************/
  LESSOR: "/lessors",
  /******************** BANK ********************/
  BANK: "/banks",
  /******************** CURRENCY ********************/
  CURRENCY: "/currencies",
  /******************** USER ********************/
  USER: "/users",
  /******************** BUILDING ********************/
  BUILDING: "/buildings",
  /******************** BUILDING ********************/
  Tools: "/building/details/:id",
  /******************** APARTMENT ********************/
  APARTMENT: "/apartments",
  /******************** SHOP ********************/
  SHOP: "/shops",
  /******************** PARKING ********************/
  PARKING: "/parkings",
  /******************** LAND ********************/
  LAND: "/lands",
  /******************** VILLA ********************/
  VILLA: "/villas",
  /******************** OWNER_EXPENSES_TYPES ********************/
  OWNER_EXPENSES_TYPES: "/owner_expenses_types",
  /******************** OWNER_EXPENSES ********************/
  OWNER_EXPENSES: "/owner_expenses",
  /******************** RESERVATION_PROPERTY ********************/
  RESERVATION_PROPERTY: "/reservation_property",
  /******************** CONTRACT_PATTERN ********************/
  CONTRACT_PATTERN: "/types/contract_pattern",
  /******************** CHEQUE_PATTERN ********************/
  CHEQUE_PATTERN: "/types/cheque_pattern",
  /******************** VOUCHER_PATTERN ********************/
  VOUCHER_PATTERN: "/types/voucher_pattern",
  /******************** BILL_PATTERN ********************/
  BILL_PATTERN: "/types/bill_pattern",
  /******************** ACCOUNTING_VOUCHER_PATTERN ********************/
  ACCOUNTING_VOUCHER_PATTERN: "/types/accounting_voucher_pattern",
  /******************** SERVICE ********************/
  SERVICE: "/services",
  /******************** LAWSUIT ********************/
  LAWSUIT: "/lawsuits",
  /******************** STORE ********************/
  STORE: "/stores",
  /******************** STORE_CHART ********************/
  STORE_CHART: "/chart/stores",
  /******************** MATERIAL_GROUP ********************/
  MATERIAL_GROUP: "/material-groups",
  /******************** MATERIAL_GROUP_CHART ********************/
  MATERIAL_GROUP_CHART: "/chart/material-groups",
  /******************** MATERIAL ********************/
  MATERIAL: "/materials",
  /******************** MATERIAL_CHART ********************/
  MATERIAL_CHART: "/chart/materials",
  /******************** UNREGISTER ********************/
  MATERIAL_UNREGISTER: "/unregister",
  /******************** SERVICE ********************/
  /******************** MAINTENANCES ********************/
  MAINTENANCES: "/maintenances",
  MAINTENANCES_PROPERTY: "/maintenances/property",
  /******************** MAINTENANCES ********************/
  MAINTENANCES_SERVICE: "/maintenances/services",
  /******************** CATEGORY ********************/
  CATEGORY: "/categories",
  /******************** CATEGORY_PROBLEM ********************/
  CATEGORY_PROBLEM: "/category-problem",
  /******************** USER_WORK_TIMES ********************/
  USER_WORK_TIMES: "/user_work_times",
  /******************** LACK_REASON ********************/
  LACK_REASON: "/lack-reason",
  /******************** EVACUATION_REQUEST ********************/
  EVACUATION_REQUEST: "/evacuation-request",
  /******************** BILL ********************/
  BILLS: "/bills",
  /******************** CHEQUE ********************/
  CHEQUE: "/cheques",
  /******************** CONTRACT ********************/
  CONTRACT: "/contracts",
  /******************** ENTRIES ********************/
  ENTRIES: "/entries",
  CREATE_ENTRY: "/create-entry",

  /******************** OWNER_EXPENSES_REPORT ********************/
  OWNER_EXPENSES_REPORT: "/reports/owner-expenses-report",
  /******************** CHEQUE ********************/
  CHEQUE_REPORT: "/reports/cheque",
  /******************** RETURNED_CHEQUES ********************/
  RETURNED_CHEQUES_REPORT: "/reports/returned-cheques",
  /******************** DUE_NOTE_PAPERS_REPORT ********************/
  DUE_NOTE_PAPERS_REPORT: "/reports/due-note-papers-report",
  /******************** COLLECTION_CHEQUE_REPORT ********************/
  COLLECTION_CHEQUE_REPORT: "/reports/collection-cheque-report",
  /******************** OVERDUE_PAYMENTS_REPORT ********************/
  OVERDUE_PAYMENTS_REPORT: "/reports/overdue-payments-report",
  /******************** MANAGER_CHEQUE_REPORT ********************/
  MANAGER_CHEQUE_REPORT: "/reports/manager-cheque-report",
  /******************** VAT_BILLS_REPORT/ ********************/
  VAT_BILLS_REPORT: "/reports/vat-bills-report/",
  /******************** CUSTOMER_ACCOUNT_STATEMENT_REPORT/ ********************/
  CUSTOMER_ACCOUNT_STATEMENT_REPORT:
    "/reports/customer-account-statement-report/",
  /******************** JOURNAL_LEDGER_REPORT/ ********************/
  JOURNAL_LEDGER_REPORT: "/reports/journal-ledger-report/",
  /******************** GENERAL_LEDGER_REPORT/ ********************/
  GENERAL_LEDGER_REPORT: "/reports/general-ledger-report/",
  /******************** TRIAL_BALANCE/ ********************/
  TRIAL_BALANCE_REPORT: "/reports/trial-balance/",
  /******************** CREDITORS_AGES_REPORT/ ********************/
  CREDITORS_AGES_REPORT: "/reports/creditors-ages-report/",
  /******************** COST_CENTER_GENERAL_LEDGER_REPORT/ ********************/
  COST_CENTER_GENERAL_LEDGER_REPORT:
    "/reports/cost-center-general-ledger-report/",
  /******************** COST_CENTER_TRIAL_BALANCE_REPORT/ ********************/
  COST_CENTER_TRIAL_BALANCE_REPORT:
    "/reports/cost-center-trial-balance-report/",
  /******************** TRADING_SHEET_REPORT/ ********************/
  TRADING_SHEET_REPORT: "/reports/trading-sheet-report/",
  /******************** PROFIT_AND_LOSS_REPORT/ ********************/
  PROFIT_AND_LOSS_REPORT: "/reports/profit-and-loss-report/",
  /******************** BALANCE_SHEET_REPORT/ ********************/
  BALANCE_SHEET_REPORT: "/reports/balance-sheet-report/",
  /******************** LEASE_UNITS_REPORT ********************/
  LEASE_UNITS_REPORT: "/reports/lease-units-report",
  /******************** LEASE_LANDS_REPORT ********************/
  LEASE_LANDS_REPORT: "/reports/lease-lands-report",
  /******************** LEASE_VILLAS_REPORT ********************/
  LEASE_VILLAS_REPORT: "/reports/lease-villas-report",
  /******************** LEASE_PARKING_REPORT ********************/
  LEASE_PARKING_REPORT: "/reports/lease-parking-report",
  /******************** UNITS_WILL_VACATED_REPORT ********************/
  UNITS_WILL_VACATED_REPORT: "/reports/units-will-vacated-report",
  /******************** RESERVED_UNITS_REPORT ********************/
  RESERVED_UNITS_REPORT: "/reports/reserved-units-report",
  /******************** LEASED_PROPERTY_ACTIVITY_REPORT ********************/
  LEASED_PROPERTY_ACTIVITY_REPORT: "/reports/leased-property-activity-report",
  /******************** SOLD_UNITS_REPORT ********************/
  SOLD_UNITS_REPORT: "/reports/sold-units-report",
  /******************** SOLD_LANDS_REPORT ********************/
  SOLD_LANDS_REPORT: "/reports/sold-lands-report",
  /******************** SOLD_VILLAS_REPORT ********************/
  SOLD_VILLAS_REPORT: "/reports/sold-villas-report",
  /******************** CHANGES_FLATS_RENT_PRICING_REPORT ********************/
  CHANGES_FLATS_RENT_PRICING_REPORT:
    "/reports/changes-flats-rent-pricing-report",
  /******************** CHANGES_FLATS_SALE_PRICING_REPORT ********************/
  CHANGES_FLATS_SALE_PRICING_REPORT:
    "/reports/changes-flats-sale-pricing-report",
  /******************** EARNING_RENTAL_INCOME_EARNED_REPORT ********************/
  EARNING_RENTAL_INCOME_EARNED_REPORT:
    "/reports/earning-rental-income-earned-report",
  /******************** UNREALIZED ********************/
  UNREALIZED: "/reports/unrealized",
  /******************** CONTRACT ********************/
  CONTRACT_REPORT: "/reports/contract",
  /******************** DISCLOSURE ********************/
  CONTRACT_DISCLOSURE_REPORT: "/reports/disclosure",
  /******************** SERVICES_CONTRACTS_REPORT ********************/
  SERVICES_CONTRACTS_REPORT: "/reports/services-contracts-report",
  /******************** CONTRACT_CYCLE_REPORT ********************/
  CONTRACT_CYCLE_REPORT: "/reports/contract-cycle-report",
  /******************** CONTRACTS_DEPOSIT_REPORT ********************/
  CONTRACTS_DEPOSIT_REPORT: "/reports/contracts-deposit-report",
  /******************** EXPIRED_CONTRACT ********************/
  EXPIRED_CONTRACT: "/reports/expired-contract",
  /******************** NEAR_TO_EXPIRE_CONTRACT ********************/
  NEAR_TO_EXPIRE_CONTRACT: "/reports/near-to-expire-contract",
  /******************** CONTRACT_CHEQUE_REPORT ********************/
  CONTRACT_CHEQUE_REPORT: "/reports/contract-cheque-report",
  /******************** CONTRACT_PAYMENTS_REPORT ********************/
  CONTRACT_PAYMENTS_REPORT: "/reports/contract-payments-report",
  /******************** BUILDING_SCHEMA ********************/
  BUILDING_SCHEMA_REPORT: "/reports/building-schema",
  /******************** UNIT_CONDITION_FOR_CONSTRUCTION_REPORT ********************/
  UNIT_CONDITION_FOR_CONSTRUCTION_REPORT:
    "/reports/unit-condition-for-construction-report",
  /******************** WAREHOUSE_REPORT ********************/
  WAREHOUSE_REPORT: "/reports/warehouse-report",
  /******************** ITEM_ACTIVITY ********************/
  ITEM_ACTIVITY_REPORT: "/reports/item-activity",
  /******************** INVENTORY_REPORT ********************/
  INVENTORY_REPORT: "/reports/inventory-report",
  /******************** ENDING_INVENTORY_REPORT ********************/
  ENDING_INVENTORY_REPORT: "/reports/ending-inventory-report",
  /******************** SALES_REPORT ********************/
  SALES_REPORT: "/reports/sales-report",
  /******************** BILL_DETAILS_REPORT ********************/
  BILL_DETAILS_REPORT: "/reports/bill-details-report",
  /******************** BILL_PROFIT_REPORT ********************/
  BILL_PROFIT_REPORT: "/reports/bill-profit-report",
  /******************** COMPLAINTS_REPORT ********************/
  COMPLAINTS_REPORT: "/reports/complaints-report",
  /******************** WORKER_REPORT ********************/
  WORKER_REPORT: "/reports/worker-report",
  /******************** WORKER_REPORT ********************/
};

export default PATHS;

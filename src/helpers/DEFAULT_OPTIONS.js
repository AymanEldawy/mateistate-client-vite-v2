import {
  ACCOUNT_ASSEMBLY_TYPE_CODE,
  ACCOUNT_DISTRIBUTIVE_TYPE_CODE,
  ACCOUNT_NORMAL_TYPE_CODE,
  APARTMENT_ASSET_TYPE_CODE,
  APARTMENT_ASSET_TYPE_DEFAULT_NAME,
  CONNECT_WITH_BILL_CODE,
  CONNECT_WITH_BILL_NAME,
  CONNECT_WITH_CONTRACT_CODE,
  CONNECT_WITH_CONTRACT_NAME,
  CONNECT_WITH_LAWSUIT_CODE, CONNECT_WITH_LAWSUIT_NAME,
  CONNECT_WITH_NOTHING_CODE,
  CONNECT_WITH_NOTHING_NAME,
  LAND_ASSET_TYPE_CODE,
  LAND_ASSET_TYPE_DEFAULT_NAME,
  PARKING_ASSET_TYPE_CODE,
  PARKING_ASSET_TYPE_DEFAULT_NAME,
  SHOP_ASSET_TYPE_CODE,
  SHOP_ASSET_TYPE_DEFAULT_NAME,
  USER_CUSTOMER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  USER_WORKER_CODE,
  VILLA_ASSET_TYPE_CODE,
  VILLA_ASSET_TYPE_DEFAULT_NAME
} from "@/data/GENERATE_STARTING_DATA"

export const TIME_LIGHT_START = [
  { name: "9:00 AM", id: "9" },
  { name: "10:00 AM", id: "10" },
  { name: "11:00 AM", id: "11" },
  { name: "12:00 PM", id: "12" },
  { name: "1:00 PM", id: "13" },
]

export const TIME_LIGHT_END = [
  { name: "2:00 PM", id: "14" },
  { name: "3:00 PM", id: "15" },
  { name: "4:00 PM", id: "16" },
  { name: "5:00 PM", id: "17" },
]

export const TIME_NIGHT_START = [
  { name: "5:00 PM", id: "17" },
  { name: "6:00 PM", id: "18" },
  { name: "7:00 PM", id: "19" },
  { name: "8:00 PM", id: "20" },
  { name: "9:00 PM", id: "21" },
]

export const TIME_NIGHT_END = [
  { name: "10:00 PM", id: "22" },
  { name: "11:00 PM", id: "23" },
  { name: "12:00 AM", id: "00" },
  { name: "1:00 AM", id: "01" },
]


export const SERVICE_MATERIAL_STATUS = [
  { id: 1, name: "Requested" },
  { id: 2, name: "Received" },
]

export const BILL_PATTERN_BILL_TYPE = [
  { id: 1, name: "Input" },
  { id: 2, name: "Output" },
]

export const MATERIAL_TYPE = [
  { id: 1, name: "Stored" },
  { id: 2, name: "Services" },
]


export const SERVICE_STATUS = [
  { id: 1, name: "Pending" },
  { id: 2, name: "Return" },
  { id: 3, name: "Reject" },
  { id: 4, name: "Approval" },
  { id: 5, name: "Underway" },
  { id: 6, name: "Done" },
]

export const EVACUATION_REQUEST_STATUS = [
  { id: 1, name: "pending" },
  { id: 2, name: "approved" },
  { id: 3, name: "rejected" },
  { id: 4, name: "confirmed" },
  { id: 5, name: "canceled" },
]


export const BILL_CONNECT_WITH = [
  { id: 0, name: "Nothing" },
  { id: 1, name: "Maintenances order" },
]


export const TENANTS_PACKAGE = [
  { id: 1, name: "Full package" },
  { id: 2, name: "Maintenance" },
  { id: 3, name: "Alaqarie" },
]

export const COMPLAINT_PAID = [
  { id: 0, name: "All" },
  { id: 1, name: "paid" },
  { id: 2, name: "free" },
]

export const COMPLAINT_STATUS = [
  { id: 0, name: "All" },
  { id: 1, name: "Pending" },
  { id: 2, name: "Return" },
  { id: 3, name: "Reject" },
  { id: 4, name: "Approval" },
  { id: 5, name: "Underway" },
  { id: 6, name: "Done" },
]

export const WORKER_STATUS = [
  { id: 0, name: "All" },
  { id: 1, name: "received" },
  { id: 2, name: "in progress" },
  { id: 3, name: "completed" },
]


export const COMPLAINT_APPROVED = [
  { id: 0, name: "All" },
  { id: 1, name: "approved" },
  { id: 2, name: "non approve" },
]


export const PROPERTY_VALUES_AREA = ["Square Feet", "Square Meter"]


export const CONTRACT_CYCLE_REPORT_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "Contract printed" },
  { id: 2, name: "Extenstion not printed" },
  { id: 3, name: "Not specified" },
]


export const TERMINATION_DATE_OPTIONS = [
  { id: 0, name: "All" },
  { id: 0, name: "Smaller than contract end date" },
  { id: 0, name: "Bigger than contract end date" },
  { id: 0, name: "Equal than contract end date" },
]


export const REGISTERED_BY_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "Customer" },
  { id: 2, name: "Company" },
]


export const CONTRACT_PRINTED_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "Process to finish" },
  { id: 2, name: "Done" },
]


export const FILTER_USING = [
  { id: 1, name: "Days number" },
  { id: 2, name: "Date" },
]


export const CLEARANCE_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "Printed" },
  { id: 2, name: "Not Printed" },
]

export const CONTRACT_INPUT_CASE = [
  { id: 0, name: "All" },
  { id: 1, name: "New" },
  { id: 2, name: "Renewal" },
]

export const CONTRACT_STATUS_EXPIRED = [
  { id: 0, name: "All" },
  { id: 1, name: "Expired" },
  { id: 2, name: "Not Expired" },
]

export const CONTRACT_DATE_BY = [
  { id: 0, name: "All" },
  { id: 1, name: "Contract start date" },
  { id: 2, name: "Contract expire date" },
  { id: 3, name: "Terminated date" },
  { id: 4, name: "Contract issue date" },
  { id: 4, name: "clearance print" },
  { id: 4, name: "Evacuate date" },
]

export const CONTRACT_AMOUNT_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "With amount" },
  { id: 2, name: "Without amount" },
]

export const INSTALLMENT_REPORT_LIST = [
  { id: 0, name: "All" },
  { id: 1, name: "With installments" },
  { id: 2, name: "Without installments" },
]


export const LAWSUIT_REPORT = [
  { id: 0, name: "All" },
  { id: 1, name: "Lawsuit" },
  { id: 2, name: "There is no lawsuit" },
]


export const LAWSUIT_STATUS_REPORT = [
  { id: 0, name: "All" },
  { id: 1, name: "Expired" },
  { id: 2, name: "Not Expired" },
]

export const REVENUES_REPORT_CONTRACT_TERMINATION = [
  { id: 0, name: "All" },
  { id: 1, name: "Contract Not Terminated" },
  { id: 2, name: "Terminated" },
]


export const REVENUES_REPORT_DATE = [
  { id: 1, name: "Contract Beginning" },
  { id: 2, name: "Contract completed" },
  { id: 3, name: "Contract Terminate" },
  { id: 4, name: "Contract Created" },
]


export const CHEQUE_REPORT_DEPOSIT = [
  { id: 0, name: "All" },
  { id: "", name: "" },
  { id: "", name: "" },
]



export const TYPE = ["Debit", "Credit"]


export const CHEQUE_CONNECT_WITH = [
  { name: CONNECT_WITH_NOTHING_NAME, id: CONNECT_WITH_NOTHING_CODE },
  { name: CONNECT_WITH_CONTRACT_NAME, id: CONNECT_WITH_CONTRACT_CODE },
  { name: CONNECT_WITH_LAWSUIT_NAME, id: CONNECT_WITH_LAWSUIT_CODE },
  { name: CONNECT_WITH_BILL_NAME, id: CONNECT_WITH_BILL_CODE },
]


export const USER_TYPE = [
  { name: "Customer", id: USER_CUSTOMER_CODE },
  { name: "Supplier", id: USER_SUPPLIER_CODE },
  { name: "Supervisor", id: USER_SUPERVISOR_CODE },
  { name: "Employee", id: USER_WORKER_CODE },
]


export const ACCOUNT_TYPE = [
  { name: "Normal", id: ACCOUNT_NORMAL_TYPE_CODE },
  { name: "Assembly", id: ACCOUNT_ASSEMBLY_TYPE_CODE },
  { name: "Distributive", id: ACCOUNT_DISTRIBUTIVE_TYPE_CODE },
]


export const APARTMENT_FLAT_TYPE = [
  { name: "apartment", id: 1 },
  { name: "mezzanine", id: 2 },
  { name: "office", id: 3 },
  { name: "penthouse", id: 4 },
  { name: "warehouse", id: 5 },
  // { name: "driver flats", id: 6 },
  // { name: "servant flats", id: 7 },
]


export const SHOP_KIND_TYPE = [
  { name: "shop", id: 1 },
  { name: "store", id: 2 },
]

export const PARKING_KIND_TYPE = [
  { name: "Parking", id: 1 },
  { name: "Underground Parking", id: 2 },
]


export const FLAT_PROPERTY_TYPE = [
  { name: "Ownership", id: "0" },
  { name: "Real Estate Management", id: "1" },
]


export const CHEQUE_PATTERN_PAPER_TYPE = [
  { name: "Paid", id: 1 },
  { name: "Received", id: 2 },
]


export const CHEQUE_PATTERN_DEFAULT_DATE = [
  { name: "Operation date", id: 1 },
  { name: "Due date", id: 2 },
]


export const CHEQUE_PATTERN_COMMISSION_TYPE = [
  { name: "addition", id: 1 },
  { name: "delete", id: 2 },
]


export const CONTACT_PATTERN_CONTRACT_TYPE = [
  { name: "Sale", id: 1 },
  { name: "Rent", id: 2 },
]


export const CONTACT_PATTERN_ASSETS_TYPE = [
  {
    name: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
    id: APARTMENT_ASSET_TYPE_CODE,
  },
  { name: PARKING_ASSET_TYPE_DEFAULT_NAME, id: PARKING_ASSET_TYPE_CODE },
  { name: SHOP_ASSET_TYPE_DEFAULT_NAME, id: SHOP_ASSET_TYPE_CODE },
  { name: LAND_ASSET_TYPE_DEFAULT_NAME, id: LAND_ASSET_TYPE_CODE },
  { name: VILLA_ASSET_TYPE_DEFAULT_NAME, id: VILLA_ASSET_TYPE_CODE },
]


export const UNIT_TYPE = [
  {
    name: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
    id: APARTMENT_ASSET_TYPE_CODE,
  },
  { name: PARKING_ASSET_TYPE_DEFAULT_NAME, id: PARKING_ASSET_TYPE_CODE },
  { name: SHOP_ASSET_TYPE_DEFAULT_NAME, id: SHOP_ASSET_TYPE_CODE },
  { name: LAND_ASSET_TYPE_DEFAULT_NAME, id: LAND_ASSET_TYPE_CODE },
  { name: VILLA_ASSET_TYPE_DEFAULT_NAME, id: VILLA_ASSET_TYPE_CODE },
]


export const CONTACT_PATTERN_RECORD_CREATED_DATE = [
  { name: "Contract Start", id: 1 },
  { name: "Contact Editing", id: 2 },
]


export const INSTALLMENT_EACH_DURATION = [
  { name: "Month", id: 2 },
  { name: "Week", id: 1 },
  { name: "Year", id: 3 },
]


export const INSTALLMENT_EACH_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


export const INSTALLMENT_VOUCHER_TYPE = [
  { name: "No Cash payment.", id: 0 },
  { name: "Receipt voucher.", id: 1 },
  // { name: "Journal voucher.", id: 2 },
]


export const CONTRACT_CONNECT_WITH = [
  { name: CONNECT_WITH_NOTHING_NAME, id: CONNECT_WITH_NOTHING_CODE },
  { name: CONNECT_WITH_CONTRACT_NAME, id: CONNECT_WITH_CONTRACT_CODE },
  { name: CONNECT_WITH_LAWSUIT_NAME, id: CONNECT_WITH_LAWSUIT_CODE },
  { name: CONNECT_WITH_BILL_NAME, id: CONNECT_WITH_BILL_CODE },
]


export const TERMINATION_DATE = [
  { name: "All", id: 0 },
  { name: "", id: 1 },
  { name: "", id: 2 },
]


export const TERMINATION_STATUS = [
  { name: "All", id: 0 },
  { name: "Terminated", id: 1 },
  { name: "non-terminated", id: 2 },
]


export const CONTRACT_STATUS = [
  { name: "New", id: 1 },
  { name: "Renew", id: 2 },
]


export const CONTRACT_CONTRACT_TYPE = [
  { name: "Monthly", id: 1 },
  { name: "Annual", id: 2 },
  // { name: "custom", id: 3 },
]


export const CONTRACT_TYPE = [
  { name: "Monthly", id: 1 },
  { name: "Custom", id: 2 },
]


export const CONTRACT_DURATION = [
  { name: "3 Month", id: 1 },
  { name: "6 Month", id: 2 },
  { name: "1 year", id: 3 },
  { name: "Custom", id: 4 },
]


export const BILL_PATTERN_PAYMENT_METHODS = [
  { id: 1, name: "Cash" },
  { id: 2, name: "Credit" },
]

export const CONTRACT_PAYMENT_METHODS = [
  { id: 0, name: "All" },
  { id: 1, name: "Cash" },
  { id: 2, name: "Installments" },
  { id: 3, name: "By plan" },
  { id: 4, name: "Credit" },
]


export const CONTRACT_PAID_TYPE = [
  { name: "Installment", id: 1 },
  { name: "Cash", id: 2 },
  { name: "Later", id: 3 },
]

export const CONTRACT_ROUND_TO = [
  { name: "Without rounding", id: 0 },
  { name: "0", id: 1 },
  { name: "1", id: 2 },
  { name: "-1", id: 3 },
  { name: "5", id: 4 },
  { name: "-5", id: 5 },
  { name: "10", id: 6 },
  { name: "-10", id: 7 },
]

export const CHQ_RETURN_REASONS = [
  { name: "Insufficient funds", id: 1 },
  { name: "Check bounce", id: 2 },
  { name: "Mismatched signature", id: 3 },
  { name: "Bank account closed", id: 4 },
  { name: "Other", id: 5 },
]



export const NATIONALITY_LISTS = [
  { id: "AFGHANISTAN", name: "AFGHANISTAN" },
  { id: "Algeria", name: "Algeria" },
  { id: "Ariteria", name: "Ariteria" },
  { id: "ARMENIA", name: "ARMENIA" },
  { id: "Australia", name: "Australia" },
  { id: "AUSTRIA", name: "AUSTRIA" },
  { id: "Azerbaijan", name: "Azerbaijan" },
  { id: "Bahrain", name: "Bahrain" },
  { id: "Bangladesh", name: "Bangladesh" },
  { id: "Belarus", name: "Belarus" },
  { id: "Bosnia ", name: "Bosnia " },
  { id: "BRAZIL", name: "BRAZIL" },
  { id: "BRITAIN", name: "BRITAIN" },
  { id: "British", name: "British" },
  { id: "Bulgaria", name: "Bulgaria" },
  { id: "Burundi", name: "Burundi" },
  { id: "Cameroon ", name: "Cameroon " },
  { id: "Canadian", name: "Canadian" },
  { id: "Casablanca", name: "Casablanca" },
  { id: "Chad", name: "Chad" },
  { id: "China", name: "China" },
  { id: "Colombia", name: "Colombia" },
  { id: "Croatia", name: "Croatia" },
  { id: "Cyprus", name: "Cyprus" },
  { id: "Czech Republic", name: "Czech Republic" },
  { id: "Denmark", name: "Denmark" },
  { id: "Djibouti", name: "Djibouti" },
  { id: "Dutch", name: "Dutch" },
  { id: "Egypt", name: "Egypt" },
  { id: "Eritrea", name: "Eritrea" },
  { id: "Estonia", name: "Estonia" },
  { id: "Ethiopia", name: "Ethiopia" },
  { id: "France", name: "France" },
  { id: "Georgia", name: "Georgia" },
  { id: "German", name: "German" },
  { id: "Greece", name: "Greece" },
  { id: "Holand", name: "Holand" },
  { id: "HUNGARY", name: "HUNGARY" },
  { id: "Indian", name: "Indian" },
  { id: "Indonesia", name: "Indonesia" },
  { id: "Iran", name: "Iran" },
  { id: "Iraq", name: "Iraq" },
  { id: "Ireland", name: "Ireland" },
  { id: "Italy", name: "Italy" },
  { id: "Japan", name: "Japan" },
  { id: "Jordan", name: "Jordan" },
  { id: "Kazakhstan", name: "Kazakhstan" },
  { id: "Kenya", name: "Kenya" },
  { id: "KOREA", name: "KOREA" },
  { id: "Kuwait", name: "Kuwait" },
  { id: "Kyrgyz Republic", name: "Kyrgyz Republic" },
  { id: "Lebanon", name: "Lebanon" },
  { id: "Liberia", name: "Liberia" },
  { id: "Libya", name: "Libya" },
  { id: "Lituania", name: "Lituania" },
  { id: "Malaysia", name: "Malaysia" },
  { id: "Mauritania", name: "Mauritania" },
  { id: "Mexico", name: "Mexico" },
  { id: "Morocco", name: "Morocco" },
  { id: "Myanmar", name: "Myanmar" },
  { id: "Nepal", name: "Nepal" },
  { id: "New Zealand", name: "New Zealand" },
  { id: "Nigeria", name: "Nigeria" },
  { id: "Norway ", name: "Norway " },
  { id: "Oman", name: "Oman" },
  { id: "Pakistan", name: "Pakistan" },
  { id: "Pakistani", name: "Pakistani" },
  { id: "Palestinian", name: "Palestinian" },
  { id: "Papua New Guinee", name: "Papua New Guinee" },
  { id: "Philippines", name: "Philippines" },
  { id: "Poland", name: "Poland" },
  { id: "Portuguese", name: "Portuguese" },
  { id: "Qatar", name: "Qatar" },
  { id: "Repubica Moldova ", name: "Repubica Moldova " },
  { id: "Republic of  Djibouti", name: "Republic of  Djibouti" },
  { id: "Republic of Cameroon", name: "Republic of Cameroon" },
  { id: "Republic of Guinea", name: "Republic of Guinea" },
  { id: "Republic of Mali", name: "Republic of Mali" },
  { id: "Republic of Mauritus", name: "Republic of Mauritus" },
  { id: "Republic of Namibia", name: "Republic of Namibia" },
  { id: "Republic of The Gambia", name: "Republic of The Gambia" },
  { id: "Romania", name: "Romania" },
  { id: "Russia", name: "Russia" },
  { id: "Rwanda", name: "Rwanda" },
  { id: "SAUDI ARABIA", name: "SAUDI ARABIA" },
  { id: "Serbia", name: "Serbia" },
  { id: "Seychelles", name: "Seychelles" },
  { id: "Singapore", name: "Singapore" },
  { id: "Slovakya", name: "Slovakya" },
  { id: "Somalia", name: "Somalia" },
  { id: "South Africa", name: "South Africa" },
  { id: "Spain", name: "Spain" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sudanesse", name: "Sudanesse" },
  { id: "Switzerland", name: "Switzerland" },
  { id: "Syria", name: "Syria" },
  { id: "Tajikistan", name: "Tajikistan" },
  { id: "Tanzania", name: "Tanzania" },
  { id: "Thailand", name: "Thailand" },
  { id: "Tunisia", name: "Tunisia" },
  { id: "Turkenistan", name: "Turkenistan" },
  { id: "Turkey", name: "Turkey" },
  { id: "UAE", name: "UAE" },
  { id: "Uganda", name: "Uganda" },
  { id: "Ukraine", name: "Ukraine" },
  { id: "United Kingdom", name: "United Kingdom" },
  { id: "USA", name: "USA" },
  { id: "Uzbekistan", name: "Uzbekistan" },
  { id: "Vietnam", name: "Vietnam" },
  { id: "Yemen", name: "Yemen" },
  { id: "Yugoslavia", name: "Yugoslavia" },
  { id: "Zimbabwe", name: "Zimbabwe" },
  { id: "AFGHANISTAN", name: "AFGHANISTAN" },
  { id: "Algeria", name: "Algeria" },
  { id: "Ariteria", name: "Ariteria" },
  { id: "ARMENIA", name: "ARMENIA" },
  { id: "Australia", name: "Australia" },
  { id: "AUSTRIA", name: "AUSTRIA" },
  { id: "Azerbaijan", name: "Azerbaijan" },
  { id: "Bahrain", name: "Bahrain" },
  { id: "Bangladesh", name: "Bangladesh" },
  { id: "Belarus", name: "Belarus" },
  { id: "Bosnia ", name: "Bosnia " },
  { id: "BRAZIL", name: "BRAZIL" },
  { id: "BRITAIN", name: "BRITAIN" },
  { id: "British", name: "British" },
  { id: "Bulgaria", name: "Bulgaria" },
  { id: "Burundi", name: "Burundi" },
  { id: "Cameroon ", name: "Cameroon " },
  { id: "Canadian", name: "Canadian" },
  { id: "Casablanca", name: "Casablanca" },
  { id: "Chad", name: "Chad" },
  { id: "China", name: "China" },
  { id: "Colombia", name: "Colombia" },
  { id: "Croatia", name: "Croatia" },
  { id: "Cyprus", name: "Cyprus" },
  { id: "Czech Republic", name: "Czech Republic" },
  { id: "Denmark", name: "Denmark" },
  { id: "Djibouti", name: "Djibouti" },
  { id: "Dutch", name: "Dutch" },
  { id: "Egypt", name: "Egypt" },
  { id: "Eritrea", name: "Eritrea" },
  { id: "Estonia", name: "Estonia" },
  { id: "Ethiopia", name: "Ethiopia" },
  { id: "France", name: "France" },
  { id: "Georgia", name: "Georgia" },
  { id: "German", name: "German" },
  { id: "Greece", name: "Greece" },
  { id: "Holand", name: "Holand" },
  { id: "HUNGARY", name: "HUNGARY" },
  { id: "Indian", name: "Indian" },
  { id: "Indonesia", name: "Indonesia" },
  { id: "Iran", name: "Iran" },
  { id: "Iraq", name: "Iraq" },
  { id: "Ireland", name: "Ireland" },
  { id: "Italy", name: "Italy" },
  { id: "Japan", name: "Japan" },
  { id: "Jordan", name: "Jordan" },
  { id: "Kazakhstan", name: "Kazakhstan" },
  { id: "Kenya", name: "Kenya" },
  { id: "KOREA", name: "KOREA" },
  { id: "Kuwait", name: "Kuwait" },
  { id: "Kyrgyz Republic", name: "Kyrgyz Republic" },
  { id: "Lebanon", name: "Lebanon" },
  { id: "Liberia", name: "Liberia" },
  { id: "Libya", name: "Libya" },
  { id: "Lituania", name: "Lituania" },
  { id: "Malaysia", name: "Malaysia" },
  { id: "Mauritania", name: "Mauritania" },
  { id: "Mexico", name: "Mexico" },
  { id: "Morocco", name: "Morocco" },
  { id: "Myanmar", name: "Myanmar" },
  { id: "Nepal", name: "Nepal" },
  { id: "New Zealand", name: "New Zealand" },
  { id: "Nigeria", name: "Nigeria" },
  { id: "Norway ", name: "Norway " },
  { id: "Oman", name: "Oman" },
  { id: "Pakistan", name: "Pakistan" },
  { id: "Pakistani", name: "Pakistani" },
  { id: "Palestinian", name: "Palestinian" },
  { id: "Papua New Guinee", name: "Papua New Guinee" },
  { id: "Philippines", name: "Philippines" },
  { id: "Poland", name: "Poland" },
  { id: "Portuguese", name: "Portuguese" },
  { id: "Qatar", name: "Qatar" },
  { id: "Repubica Moldova ", name: "Repubica Moldova " },
  { id: "Republic of  Djibouti", name: "Republic of  Djibouti" },
  { id: "Republic of Cameroon", name: "Republic of Cameroon" },
  { id: "Republic of Guinea", name: "Republic of Guinea" },
  { id: "Republic of Mali", name: "Republic of Mali" },
  { id: "Republic of Mauritus", name: "Republic of Mauritus" },
  { id: "Republic of Namibia", name: "Republic of Namibia" },
  { id: "Republic of The Gambia", name: "Republic of The Gambia" },
  { id: "Romania", name: "Romania" },
  { id: "Russia", name: "Russia" },
  { id: "Rwanda", name: "Rwanda" },
  { id: "SAUDI ARABIA", name: "SAUDI ARABIA" },
  { id: "Serbia", name: "Serbia" },
  { id: "Seychelles", name: "Seychelles" },
  { id: "Singapore", name: "Singapore" },
  { id: "Slovakya", name: "Slovakya" },
  { id: "Somalia", name: "Somalia" },
  { id: "South Africa", name: "South Africa" },
  { id: "Spain", name: "Spain" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sudanesse", name: "Sudanesse" },
  { id: "Switzerland", name: "Switzerland" },
  { id: "Syria", name: "Syria" },
  { id: "Tajikistan", name: "Tajikistan" },
  { id: "Tanzania", name: "Tanzania" },
  { id: "Thailand", name: "Thailand" },
  { id: "Tunisia", name: "Tunisia" },
  { id: "Turkenistan", name: "Turkenistan" },
  { id: "Turkey", name: "Turkey" },
  { id: "UAE", name: "UAE" },
  { id: "Uganda", name: "Uganda" },
  { id: "Ukraine", name: "Ukraine" },
  { id: "United Kingdom", name: "United Kingdom" },
  { id: "USA", name: "USA" },
  { id: "Uzbekistan", name: "Uzbekistan" },
  { id: "Vietnam", name: "Vietnam" },
  { id: "Yemen", name: "Yemen" },
  { id: "Yugoslavia", name: "Yugoslavia" },
  { id: "Zimbabwe", name: "Zimbabwe" },
];



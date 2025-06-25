import { UNIQUE_REF_TABLES } from "@/data/constants";
import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";
import { APARTMENT_FLAT_TYPE, CHEQUE_REPORT_DEPOSIT, CHQ_RETURN_REASONS, CLEARANCE_LIST, COMPLAINT_APPROVED, COMPLAINT_PAID, COMPLAINT_STATUS, CONTACT_PATTERN_ASSETS_TYPE, CONTRACT_AMOUNT_LIST, CONTRACT_CYCLE_REPORT_LIST, CONTRACT_DATE_BY, CONTRACT_INPUT_CASE, CONTRACT_PAID_TYPE, CONTRACT_PAYMENT_METHODS, CONTRACT_PRINTED_LIST, CONTRACT_ROUND_TO, CONTRACT_STATUS_EXPIRED, INSTALLMENT_REPORT_LIST, LAWSUIT_REPORT, LAWSUIT_STATUS_REPORT, REGISTERED_BY_LIST, REVENUES_REPORT_CONTRACT_TERMINATION, TERMINATION_DATE, TERMINATION_DATE_OPTIONS, TERMINATION_STATUS, WORKER_STATUS } from "../DEFAULT_OPTIONS";


const contract_payments_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "owner_account_id",
    name: "owner_account_id",
    table: UNIQUE_REF_TABLES.suppliers,
  }),
  {
    label: "apartment_kind",
    name: "apartment_kind",
    key: "select",
    intValue: true,
    options: APARTMENT_FLAT_TYPE,
  },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    intValue: true,
    options: CONTRACT_PAID_TYPE,
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    is_ref: true,
    table: "lessor",
  },
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    options: TERMINATION_STATUS,
  }),
  {
    label: "expiry_date",
    name: "expiry_date",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }, ...TERMINATION_DATE],
  },

  {
    label: "clearance",
    name: "clearance",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }],
  },
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }],
  },
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }],
  },
  {
    label: "lawsuit",
    name: "lawsuit",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }],
  },
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    options: INSTALLMENT_REPORT_LIST,
  }),
  {
    label: "automatic_selection",
    name: "automatic_selection",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: [{ id: 0, name: "All" }],
  },
];

const returned_cheque_report = [
  FIELDS_STRUCTURE.selectField({
    label: "return_processing",
    name: "return_processing",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "processing not complete" },
      { id: 2, name: "processed" },
    ],
  }),
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.bank({
    name:'bank_id'
  }),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),
  {
    label: "reason",
    name: "reason",
    key: "select",
    options: CHQ_RETURN_REASONS,
  },
  FIELDS_STRUCTURE.textField({
    label: "expect_return_reason",
    name: "expect_return_reason",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "return_terminated",
    name: "return_terminated",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "valid" },
      { id: 2, name: "terminated" },
    ],
  }),

  FIELDS_STRUCTURE.number({
    label: "it wen on return day",
    name: "return_days_number",
  }),
];

const collection_cheque_report = [
  FIELDS_STRUCTURE.selectField({
    label: "collection_status",
    name: "collection_status",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Total Collected" },
      { id: 2, name: "Partial Collected" },
    ],
  }),
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "account_by",
    name: "account_by",
    options: [
      { id: 1, name: "Note paper" },
      { id: 2, name: "Collection" },
    ],
  }),
  FIELDS_STRUCTURE.bank({
    name:'bank_id'
  }),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),
];

//contract_reports
const contract_reports = [
  FIELDS_STRUCTURE.client({
    name: "client_id",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    table: "property_values",
    ref_name: "description",
  }),
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    intValue: true,
    options: [{ id: 0, name: "All" }, ...CONTRACT_PAID_TYPE],
  },
  FIELDS_STRUCTURE.lessor({
    name: "lessor_id",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: [
      { id: "active", name: "Active" },
      { id: "expired", name: "Expired" },
      { id: "terminated", name: "Terminated" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    options: CONTRACT_PAYMENT_METHODS,
  }),

  {
    label: "contract_termination",
    name: "contract_termination",
    key: "select",
    intValue: true,
    options: [
      { id: "mutual_agreement", name: "Mutual agreement" },
      { id: "termination", name: "Termination" },
      { id: "expired", name: "Expired" },
      { id: "terminated", name: "Terminated" },
    ],
  },

  {
    label: "contract_enter_status",
    name: "contract_enter_status",
    key: "select",
    intValue: true,
    options: [
      { id: "All", name: "All" },
      { id: "New", name: "New" },
      { id: "Renewal", name: "Renewal" },
    ],
  },

  {
    label: "clearance",
    name: "clearance",
    key: "select",
    intValue: true,
    options: [
      // { id: 0, name: "All" },
      { id: true, name: "Cleared" },
      { id: false, name: "Not cleared" },
    ],
  },
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    options: [
      { id: true, name: "Blocked" },
      { id: false, name: "Unblocked" },
    ],
  },

  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.dateTimeField({
    label: "termination_date",
    name: "termination_date",
    // options: TERMINATION_DATE_OPTIONS,
  }),
  FIELDS_STRUCTURE.dateField({
    label: "date_by",
    name: "date_by",
    // options: CONTRACT_DATE_BY,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    options: [
      { id: true, name: "Lawsuit" },
      { id: false, name: "There is no lawsuit" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_status",
    name: "lawsuit_status",
    options: LAWSUIT_STATUS_REPORT,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    options: [
      { id: true, name: "With installments" },
      { id: false, name: "Without installments" },
    ],
  }),
  FIELDS_STRUCTURE.numberField({
    label: "contract_amount",
    name: "contract_amount",
  }),
];

// Leased reports
const shared_leased_report_global = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.lessor(),
  FIELDS_STRUCTURE.selectField({
    label: "leasing_status",
    name: "leasing_status",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "leased" },
      { id: 2, name: "non-leased" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
];

const shared_leased_report = [
  ...shared_leased_report_global,
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  {
    key: "between",
    label: "Rent_value",
    field1Props: {
      type: "number",
      name: "rent_form",
    },
    field2Props: {
      type: "number",
      name: "rent_to",
    },
  },
];

const leased_units_report = [
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  // FIELDS_STRUCTURE.textField({
  //   label: "area_unit",
  //   name: "area_unit",
  // }),
  // FIELDS_STRUCTURE.uniqueField({
  //   label: "property_type",
  //   name: "property_type",
  //   table: "property_values",
  //   ref_name: "description",
  // }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  {
    key: "between",
    label: "rent_value",
    field1Props: {
      type: "number",
      name: "rent_form",
    },
    field2Props: {
      type: "number",
      name: "rent_to",
    },
  },
  FIELDS_STRUCTURE.uniqueField({
    label: "area_unit",
    name: "area_unit",
    table: "property_values",
    ref_name: "area",
  }),
  {
    key: "between",
    label: "area_value",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },

  // ...shared_leased_report,

  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.account({
    label: "expense_account",
    name: "expense_account_id",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_on_unit",
    name: "lawsuit_on_unit",
    options: LAWSUIT_REPORT,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_on_contract",
    name: "lawsuit_on_contract",
    options: LAWSUIT_REPORT,
  }),
];

const leased_parking_report = [
  FIELDS_STRUCTURE.parking({
    label: "parking_no",
    name: "parking_no",
  }),

  // FIELDS_STRUCTURE.textField({
  //   label: "area_name",
  //   name: "area_name",
  // }),
  ...shared_leased_report_global,
  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    options: LAWSUIT_REPORT,
  }),
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  // FIELDS_STRUCTURE.selectField({
  //   label: "contract_amount",
  //   name: "contract_amount",
  //   options: CONTRACT_AMOUNT_LIST,
  // }),
];

const leased_lands_report = [
  // FIELDS_STRUCTURE.uniqueField({
  //   label: "land",
  //   name: "name",
  //   table: "land",
  // }),
  FIELDS_STRUCTURE.uniqueField({
    label: "land_no",
    name: "land_no",
    table: "land",
    ref_name: "land_no",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "land_type",
    name: "land_type",
    table: "land",
    ref_name: "type",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_no",
    name: "area_no",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "area_type",
    name: "area_type",
    table: "area",
    ref_name: "type",
  }),


  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  ...shared_leased_report,
];

const leased_villas_report = [
  FIELDS_STRUCTURE.villa({
    label: "villa_no",
    name: "villa_no",
  }),
  FIELDS_STRUCTURE.textField({
    label: "complex_name",
    name: "complex_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  // FIELDS_STRUCTURE.textField({
  //   label: "area_name",
  //   name: "area_name",
  // }),

  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  FIELDS_STRUCTURE.textField({
    label: "city",
    name: "city"
  }),
  {
    label: "Case of termination",
    name: "case_of_termination",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: REVENUES_REPORT_CONTRACT_TERMINATION,
  },
  ...shared_leased_report,
];

const units_that_will_be_vacated = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),

  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "number_of_days",
    name: "number_of_days",
  }),
];

const reserved_units_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.selectField({
    label: "unit_type",
    name: "unit_type",
    options: CONTACT_PATTERN_ASSETS_TYPE,
  }),
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "booking",
    name: "booking",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Reserved" },
      { id: 2, name: "Canceled" },
    ],
  }),
];

const contracts_deposit_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),

  FIELDS_STRUCTURE.building({
    name:'building_id'
  }),
  FIELDS_STRUCTURE.apartment(),
  FIELDS_STRUCTURE.shop(),
  FIELDS_STRUCTURE.parking(),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    options: TERMINATION_STATUS,
  }),

  FIELDS_STRUCTURE.selectField({
    label: "deposit",
    name: "deposit",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Not refunded" },
      { id: 2, name: "Refunded" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    options: [
      { id: 1, name: "contract start date" },
      { id: 2, name: "contract expire date" },
    ],
  }),
];

// contract_expired_reports
const contract_expired_reports = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.apartment(),
  FIELDS_STRUCTURE.shop(),
  FIELDS_STRUCTURE.parking(),
  {
    label: "description",
    name: "description",
    type: "text",
  },
  // {
  //   label: "filter using",
  //   name: "filter_using",
  //   key: "select",
  //   intValue:true,
  //   selectFirstAsDefault:true,
  //   options: SELECT_LISTS('filter_using')
  // },
];
// contract_expired_reports
const earning_rental_income_earned_report = [
  {
    label: "Case of termination",
    name: "case_of_termination",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: REVENUES_REPORT_CONTRACT_TERMINATION,
  },
  {
    label: "round_to",
    name: "round_to",
    key: "select",
    intValue: true,
    options: CONTRACT_ROUND_TO,
  },
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
];

// cheque report fields
const cheques_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    table: "bank",
  },
  FIELDS_STRUCTURE.building({
    name:'building_id'
  }),
  FIELDS_STRUCTURE.apartment(),
  FIELDS_STRUCTURE.shop(),
  FIELDS_STRUCTURE.parking(),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),

  {
    label: "deposit",
    name: "deposit",
    key: "select",
    intValue: true,
    options: CHEQUE_REPORT_DEPOSIT,
    selectFirstAsDefault: true,
  },
];

const general_ledger_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
];

// leased_property_activity_report
const leased_property_activity_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.building({
    name:'building_id'
  }),
  FIELDS_STRUCTURE.apartment({
    optionLabel: "apartmentNo",
    name: "apartment_no",
  }),
  FIELDS_STRUCTURE.shop({
    optionLabel: "shopNo",
    name: "shop_no",
  }),
  FIELDS_STRUCTURE.parking({
    optionLabel: "parkingNo",
    name: "parking_no",
  }),
  FIELDS_STRUCTURE.villa({
    optionLabel: "villaNo",
    name: "villa_no",
  }),
  FIELDS_STRUCTURE.land({
    optionLabel: "landNo",
    name: "land_no",
  }),
];

const trading_sheet_report = [
  FIELDS_STRUCTURE.account({
    name: "account_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    name: "cost_center_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.level({
    label: "level",
    name: "level",
  }),
  FIELDS_STRUCTURE.currency({
    name: "currency_id",
  }),
  // FIELDS_STRUCTURE.selectField({
  //   name: "last_purchase",
  //   label: "last_purchase",
  //   options: [
  //     { id: 1, name: "maximum" },
  //     { id: 2, name: "average" },
  //     { id: 3, name: "pricing policy" },
  //     { id: 4, name: "specific price" },
  //   ],
  // }),
];

const journal_ledger_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  {
    key: "between",
    label: "entry_number",
    field1Props: {
      type: "number",
      name: "entry_number_from",
    },
    field2Props: {
      type: "number",
      name: "entry_number_to",
    },
  },
];

const cost_center_general_ledger_report = [
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "level",
    name: "level",
  }),
];

const customer_account_statement_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
];

const contract_cheque_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.suppliers(),

  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "area_unit",
    name: "area_unit",
    table: "property_values",
    ref_name: "area",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    options: CONTRACT_PAYMENT_METHODS,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "lessor_id",
    name: "lessor_id",
    table: "lessor",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    options: TERMINATION_STATUS,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    options: LAWSUIT_REPORT,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    options: INSTALLMENT_REPORT_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    options: CONTRACT_DATE_BY,
  }),
];

const sold_units_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  // FIELDS_STRUCTURE.uniqueField({
  //   label: "property_type",
  //   name: "property_type",
  //   table: "property_values",
  //   ref_name: "description",
  // }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  // FIELDS_STRUCTURE.uniqueField({
  //   label: "unit",
  //   name: "unit",
  //   table: "property_values",
  //   ref_name: "unit",
  // }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const sold_lands_report = [
  FIELDS_STRUCTURE.textField({
    label: "name",
    name: "name",
  }),
  FIELDS_STRUCTURE.textField({
    label: "land_type",
    name: "land_type",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  // FIELDS_STRUCTURE.textField({
  //   label: "area_no",
  //   name: "area_no",
  // }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const sold_villas_report = [
  FIELDS_STRUCTURE.villa({
    label: "villa_no",
    name: "villa_no",
  }),
  FIELDS_STRUCTURE.textField({
    label: "complex_name",
    name: "complex_name",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const overdue_payments_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    table: "contract",
    ref_name: "number",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "repeated",
    name: "repeated",
    options: [{ id: 0, name: "all" }],
  }),
];

const changes_flats_rent_pricing_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "Flat no",
    name: "apartment_id",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "area",
    name: "area",
  }),
];

// Mangers reports fields
const manger_cheques_report = [];

// services contracts report fields
const services_contracts_report = [
  FIELDS_STRUCTURE.client({
    name:'client_id'
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    options: CONTRACT_PAYMENT_METHODS,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    options: TERMINATION_STATUS,
  }),

  FIELDS_STRUCTURE.selectField({
    label: "contract_input_case",
    name: "contract_input_case",
    options: CONTRACT_INPUT_CASE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "clearance",
    name: "clearance",
    options: CLEARANCE_LIST,
  }),
  FIELDS_STRUCTURE.numberField({
    label: "left_to_finish_days",
    name: "left_to_finish_days",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "user",
    name: "user",
    table: "user",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_date",
    name: "termination_date",
    options: TERMINATION_DATE_OPTIONS,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    options: CONTRACT_DATE_BY,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    options: INSTALLMENT_REPORT_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_amount",
    name: "contract_amount",
    options: CONTRACT_AMOUNT_LIST,
  }),
];

const contract_cycle_report = [
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    options: CONTRACT_CYCLE_REPORT_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "registered_by",
    name: "registered_by",
    options: REGISTERED_BY_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_printed",
    name: "contract_printed",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "signed_by_the_customer",
    name: "signed_by_the_customer",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "signed_by_the_owner",
    name: "signed_by_the_owner",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_delivered_to_customer",
    name: "contract_has_been_delivered_to_customer",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_received_from_customer",
    name: "contract_received_from_customer",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_received_for_send_it_to_registration",
    name: "contract_has_been_received_for_send_it_to_registration",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_sent_to_registration",
    name: "contract_sent_to_registration",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_received_from_registration",
    name: "contract_received_from_registration",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_delivered_to_customer",
    name: "contract_has_been_delivered_to_customer",
    options: CONTRACT_PRINTED_LIST,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    options: CONTRACT_STATUS_EXPIRED,
  }),
];

const creditors_ages_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  FIELDS_STRUCTURE.numberField({
    label: "period",
    name: "period",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "number_periods",
    name: "number_periods",
  }),
  FIELDS_STRUCTURE.dateField({
    label: "date",
    name: "date",
  }),
];

const vat_bills_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "user",
    name: "user",
    table: "user",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "link_with",
    name: "link_with",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "None" },
      { id: 2, name: "Contract" },
      { id: 3, name: "Lawsuit" },
      { id: 4, name: "Electricity bill" },
      { id: 5, name: "Services contract" },
      { id: 6, name: "Maintenance contract" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "type",
    name: "type",
    options: [
      { id: 0, name: "All" },
      { id: 1, name: "Safar" },
      { id: 2, name: "Exempt" },
      { id: 3, name: "Taxable" },
      { id: 4, name: "" },
    ],
  }),
  FIELDS_STRUCTURE.textField({
    label: "kind",
    name: "kind",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_details",
    name: "show_details",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "repeat_information_for_each_pen",
    name: "repeat_information_for_each_pen",
  }),
];

// warehouse report reports fields
const warehouse_report = [
  FIELDS_STRUCTURE.textField({
    label: "name",
    name: "name",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "material_group",
    name: "material_group",
    ref_name: "material_group",
  }),
  {
    key: "between",
    label: "purchasing_price",
    field1Props: {
      type: "number",
      name: "purchasing_form",
    },
    field2Props: {
      type: "number",
      name: "purchasing_to",
    },
  },
  {
    key: "between",
    label: "selling_price",
    field1Props: {
      type: "number",
      name: "sale_form",
    },
    field2Props: {
      type: "number",
      name: "sale_to",
    },
  },

  FIELDS_STRUCTURE.checkboxField({
    label: "available",
    name: "available",
  }),
];

const complaints_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "worker",
    name: "worker",
    ref_name: UNIQUE_REF_TABLES.employee,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    ref_name: "contract",
  }),
  FIELDS_STRUCTURE.building({
    name:'building_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "problem",
    name: "problem",
    ref_name: "category_problem",
  }),
  FIELDS_STRUCTURE.note({
    label: "category_problem",
    name: "category_problem",
  }),
  FIELDS_STRUCTURE.note(),
  FIELDS_STRUCTURE.selectField({
    label: "complaint status",
    name: "complaint status",
    options: COMPLAINT_STATUS,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "worker status",
    name: "worker status",
    options: WORKER_STATUS,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "paid status",
    name: "paid status",
    options: COMPLAINT_PAID,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "complaint_approved",
    name: "complaint_approved",
    options: COMPLAINT_APPROVED,
  }),
];

const worker_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "worker",
    name: "worker",
    ref_name: UNIQUE_REF_TABLES.employee,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    ref_name: "contract",
  }),
  FIELDS_STRUCTURE.building({
    name:'building_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "problem",
    name: "problem",
    ref_name: "category_problem",
  }),
  {
    key: "between",
    label: "hour_from",
    field1Props: {
      type: "number",
      name: "form",
    },
    field2Props: {
      type: "number",
      name: "to",
    },
  },
];

const owner_expenses_report = [
  FIELDS_STRUCTURE.uniqueField({
    name: "owner",
    table: "owner",
  }),
];

const item_activity_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "material/item",
    name: "material",
    table: "material",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "class/group",
    name: "material_group",
    table: "material_group",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "store",
    name: "store",
    table: "store",
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  // FIELDS_STRUCTURE.number({
  //   name: "code",
  //   label: "code",
  // }),
  FIELDS_STRUCTURE.uniqueField({
    table: "material",
    name: "code",
    label: "code",
  }),
];

const inventory_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "material/item",
    name: "material",
    table: "material",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "class/group",
    name: "material_group",
    table: "material_group",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "store",
    name: "store",
    table: "store",
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    table: "material",
    name: "code",
    label: "code",
  }),
];

const ending_inventory_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "material/item",
    name: "material",
    table: "material",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "class/group",
    name: "material_group",
    table: "material_group",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "store",
    name: "store",
    table: "store",
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    table: "material",
    name: "code",
    label: "code",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "unit",
    name: "unit",
    options: [
      { id: 1, name: "Main unit" },
      { id: 2, name: "Sell unit" },
      { id: 3, name: "Buy unit" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "price type",
    name: "price_type",
    options: [
      { id: 1, name: "Cost" },
      { id: 2, name: "Weighted purchase chase average" },
      { id: 3, name: "sale avg" },
      { id: 4, name: "Max purchase" },
      { id: 5, name: "Less purchase" },
      { id: 6, name: "Max sale" },
      { id: 7, name: "Less sale" },
    ],
  }),
];

const sales_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "material/item",
    name: "material",
    table: "material",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "class/group",
    name: "material_group",
    table: "material_group",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "store",
    name: "store",
    table: "store",
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  FIELDS_STRUCTURE.uniqueField({
    table: "material",
    name: "code",
    label: "code",
  }),
  FIELDS_STRUCTURE.number({
    label: "classes_level",
    name: "classes_level",
  }),
  FIELDS_STRUCTURE.number({
    label: "every_number",
    name: "every_number",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "every_duration",
    name: "every_duration",
    options: [
      { id: 1, name: "week" },
      { id: 2, name: "month" },
      { id: 3, name: "year" },
    ],
  }),
];

const bill_details_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
    name: "customer_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    name: "cost_center_id",
  }),
  FIELDS_STRUCTURE.currency({
    name: "currency_id",
  }),
];

const bill_profit_report = [
  FIELDS_STRUCTURE.account({
    name:'account_id'
  }),
  FIELDS_STRUCTURE.client({
    label: "client",
  }),
  FIELDS_STRUCTURE.cost_center({
    name:'cost_center_id'
  }),
  FIELDS_STRUCTURE.currency({
    name:'currency_id'
  }),
  FIELDS_STRUCTURE.number({
    label: "bill no",
    name: "bill",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "price cost",
    name: "price cost",
    options: [
      { id: 1, name: "Cost" },
      { id: 2, name: "Weighted purchase chase average" },
      { id: 3, name: "sale avg" },
      { id: 4, name: "Max purchase" },
      { id: 5, name: "Less purchase" },
      { id: 6, name: "Max sale" },
      { id: 7, name: "Less sale" },
    ],
  }),
  FIELDS_STRUCTURE.note({
    name: "view",
    label: "view",
  }),
  FIELDS_STRUCTURE.note(),
];

const REPORTS_STRUCTURE = {
  // New reports
  bill_details_report,
  bill_profit_report,
  sales_report,
  ending_inventory_report,
  inventory_report,
  item_activity_report,
  // New reports
  contract_payments_report,
  returned_cheque_report,
  collection_cheque_report,
  contract_reports,
  contract_cheque_report,
  // contract_reports,
  contract_expired_reports,
  earning_rental_income_earned_report,
  contract_near_to_expire_report: contract_expired_reports,
  reserved_units_report,
  services_contracts_report,
  contract_cycle_report,
  contracts_deposit_report,
  // leased
  leased_units_report,
  leased_parking_report,
  leased_lands_report,
  leased_villas_report,
  units_that_will_be_vacated,
  leased_property_activity_report,
  // sold
  sold_units_report,
  sold_lands_report,
  sold_villas_report,

  // cheques_report
  cheques_report,
  overdue_payments_report,
  // accounting report
  creditors_ages_report,
  general_ledger_report,
  journal_ledger_report,
  cost_center_general_ledger_report,
  changes_flats_rent_pricing_report,
  changes_flats_sale_pricing_report: changes_flats_rent_pricing_report,

  trading_sheet_report,
  profit_and_loss_report: trading_sheet_report,
  balance_sheet_report: trading_sheet_report,
  // customer
  customer_account_statement_report,
  vat_bills_report,

  // Mangers reports
  manger_cheques_report,
  owner_expenses_report,

  // Maintenances
  warehouse_report,
  complaints_report,
  worker_report,
};

export default function getReportFields(name) {
  return REPORTS_STRUCTURE[name];
}

/******************************* GENERAL *******************************/
// export const BASE_URL = import.meta.env.VITE_BASE_URL;

import {
  APARTMENT_ASSET_TYPE_CODE,
  APARTMENT_ASSET_TYPE_DEFAULT_NAME, LAND_ASSET_TYPE_CODE,
  LAND_ASSET_TYPE_DEFAULT_NAME,
  PARKING_ASSET_TYPE_CODE,
  PARKING_ASSET_TYPE_DEFAULT_NAME,
  SHOP_ASSET_TYPE_CODE,
  SHOP_ASSET_TYPE_DEFAULT_NAME
} from "./GENERATE_STARTING_DATA";

export const SERVICE_MENU = [
  {
    key: 1,
    name: "Maintenances",
    subChild: [
      {
        isForm: true,
        key: "Maintenance order",
        link: "/maintenances/1",
      },
      {
        isForm: true,
        key: "Property preparing order",
        link: "/maintenances/2",
      },
    ],
  },
];

export const DEFAULT_BILL_MENU = [
  {
    key: 1,
    name: "Bill",
    subChild: [
      {
        isForm: true,
        key: "Input Bill",
        link: "/bill/1/",
      },
      {
        isForm: true,
        key: "Output Bill",
        link: "/bill/2/",
      },
    ],
  },
];

export const SHOULD_DELETE_COST_CENTER = {
  apartment: true,
  parking: true,
  shop: true,
};

export const POPUP_ACTIONS = {
  ADD_NEW: "ADD_NEW",
  MODIFY: "MODIFY",
  ONLY_VIEW: "ONLY_VIEW",
};

export const METHODS = {
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const IGNORED_Fields = ["id"];

export const IGNORED_SHOW_NUMBER_TABLE = {
  parking: true,
  apartment: true,
  shop: true,
};


export const CONTRACTS_ASSETS_TYPE = {
  [APARTMENT_ASSET_TYPE_DEFAULT_NAME]: APARTMENT_ASSET_TYPE_CODE,
  [PARKING_ASSET_TYPE_DEFAULT_NAME]: PARKING_ASSET_TYPE_CODE,
  [SHOP_ASSET_TYPE_DEFAULT_NAME]: SHOP_ASSET_TYPE_CODE,
  [LAND_ASSET_TYPE_DEFAULT_NAME]: LAND_ASSET_TYPE_CODE,
  [APARTMENT_ASSET_TYPE_CODE]: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
  [PARKING_ASSET_TYPE_CODE]: PARKING_ASSET_TYPE_DEFAULT_NAME,
  [SHOP_ASSET_TYPE_CODE]: SHOP_ASSET_TYPE_DEFAULT_NAME,
  [LAND_ASSET_TYPE_CODE]: LAND_ASSET_TYPE_DEFAULT_NAME,
};


export const ACTIONS = {
  OPEN_INSTALLMENT_FORM: "OPEN_INSTALLMENT_FORM",
  OPEN_COLLECTION_FORM: "OPEN_COLLECTION_FORM",
  OPEN_DEPORTATION_FORM: "OPEN_DEPORTATION_FORM",
  OPEN_ENDORSEMENT_FORM: "OPEN_ENDORSEMENT_FORM",
  OPEN_RETURN_FORM: "OPEN_RETURN_FORM",
  OPEN_TERMINATION_FINES_FORM: "OPEN_TERMINATION_FINES_FORM",
  RENEW_CONTRACT: "RENEW_CONTRACT",
};

export const USER_STEPS = {
  user_general: "user_general",
  user_files: "user_files",
};

export const SERVICE_STEPS = {
  general: "general",
  service_info: "service_info",
  service: "service",
  service_customer_request: "service_customer_request",
  service_lack_reason: "service_lack_reason",
  service_requested_material: "service_requested_material",
  service_received_material: "service_received_material",
  service_material: "service_material",
  service_worker: "service_worker",
};

export const LAWSUIT_STEPS = {
  lawsuit: "lawsuit",
  lawsuit_expenses: "lawsuit_expenses",
  lawsuit_expenses_pictures: "lawsuit_expenses_pictures",
  lawsuit_internal_expenses: "lawsuit_internal_expenses",
  lawsuit_status: "lawsuit_status",
  lawsuit_termination: "lawsuit_termination",
};

export const APARTMENT_STEPS = {
  apartment_general: "apartment_general",
  property_values: "property_values",
  apartment_pictures: "apartment_pictures",
  apartment_accumulate: "apartment_accumulate",
  apartment_rental_price: "apartment_rental_price",
  apartment_selling_price: "apartment_selling_price",
};

export const LAND_STEPS = {
  land_general: "land_general",
  land_accumulate: "land_accumulate",
  land_rental_price: "land_rental_price",
  land_selling_price: "land_selling_price",
};

export const ASSETS_STEPS = {
  assets_general: "assets_general",
  assets_accounts: "assets_accounts",
  assets_depreciation: "assets_depreciation",
  assets_input: "assets_input",
  assets_maintenance: "assets_maintenance",
  assets_sale: "assets_sale",
  assets_shipping: "assets_shipping",
};

export const PARKING_STEPS = {
  parking_general: "parking_general",
  parking_pictures: "parking_pictures",
  parking_accumulate: "parking_accumulate",
  parking_rental_price: "parking_rental_price",
  parking_selling_price: "parking_selling_price",
};

export const SHOP_STEPS = {
  shop_general: "shop_general",
  shop_pictures: "shop_pictures",
  shop_fixed_assets: "shop_fixed_assets",
  shop_accumulate: "shop_accumulate",
  shop_rental_price: "shop_rental_price",
  shop_selling_price: "shop_selling_price",
};

export const VILLA_STEPS = {
  villa_general: "villa_general",
  villa_accounts: "villa_accounts",
  villa_assets: "villa_assets",
  villa_exterior_details: "villa_exterior_details",
  villa_interior_details: "villa_interior_details",
  villa_pictures: "villa_pictures",
  villa_rental_price: "villa_rental_price",
  villa_selling_price: "villa_selling_price",
};

export const CONTRACTS_PATTERN_STEPS = {
  contract_general: "contract_general",
  contract_default_accounts: "contract_default_accounts",
  contract_pattern_default_fees_accounts: "contract_default_fees_accounts",
  contract_moving_cost_center: "contract_moving_cost_center",
  contract_contract_terms: "contract_contract_terms",
  contract_default_printing_folder: "contract_default_printing_folder",
  contract_sms: "contract SMS",
};

export const VOUCHER_PATTERN_STEPS = {
  voucher_general: "voucher_general",
  voucher_fields: "voucher_fields",
  voucher_sms: "SMS",
};
export const ACCOUNTING_VOUCHER_PATTERN_STEPS = {
  accounting_voucher_general: "accounting_voucher_general",
  accounting_voucher_fields: "accounting_voucher_fields",
  accounting_voucher_sms: "SMS",
};

export const BILL_STEPS = {
  bill: "bill",
  bill_discounts_details: "bill_discounts_details",
  bill_material_details: "bill_material_details",
};

export const MATERIAL_STEPS = {
  material: "general",
  material_balance: "material_balance",
  material_minimum: "material_minimum",
  material_prices: "material_prices",
  material_prices_details: "material_prices_details",
  material_specifications: "material_specifications",
};
export const BILL_PATTERN_STEPS = {
  bill_pattern_general: "bill_pattern_general",
  bill_pattern_accounts: "bill_pattern_accounts",
  bill_pattern_entries: "bill_pattern_entries",
  bill_pattern_options: "bill_pattern_options",
  bill_pattern_bill_details: "bill_pattern_bill_details",
  bill_pattern_references: "bill_pattern_references",
  bill_pattern_materials: "bill_pattern_materials",
};

export const CHEQUE_PATTERN_STEPS = {
  cheque_pattern_general: "cheque_pattern_general",
  cheque_pattern_collection: "cheque_pattern_collection",
  cheque_pattern_commission: "cheque_pattern_commission",
  cheque_pattern_partial_collection: "cheque_pattern_partial_collection",
  cheque_pattern_endorsement: "cheque_pattern_endorsement",
  cheque_pattern_return: "cheque_pattern_return",
  cheque_pattern_default_statement: "cheque_pattern_default_statement",
  cheque_pattern_sms: "cheque_pattern_sms",
};

export const GLOBAL_CONTRACT_STEPS = {
  contract_general_step: "general",
  contract_payments_step: "payments",
  contract_commission_step: "commission",
  contract_terms_step: "terms",
  contract_pictures_step: "pictures",
  contract_other_fees_step: "other fees",
  contract_fixed_assets_step: "fixed assets",
  contract_linked_parking_step: "linked parking",
  contract_contract_cycle_step: "contract cycle",
  contract_termination_step: "termination",
};

const SHARED_STEPS = [
  GLOBAL_CONTRACT_STEPS.contract_general_step,
  GLOBAL_CONTRACT_STEPS.contract_payments_step,
  GLOBAL_CONTRACT_STEPS.contract_commission_step,
  GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  GLOBAL_CONTRACT_STEPS.contract_termination_step,
  // GLOBAL_CONTRACT_STEPS.contract_terms_step,

]

export const APARTMENT_STEPS_CONTRACT = [
  ...SHARED_STEPS,

  // GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
]

export const SHOP_STEPS_CONTRACT = [
  ...SHARED_STEPS,
  // GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
]

export const LAND_STEPS_CONTRACT = [
  ...SHARED_STEPS,
  // GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
];

export const PARKING_STEPS_CONTRACT = [
  ...SHARED_STEPS
]

export const FLAT_PROPERTY_COLORS = {
  apartment_1: "#864AF9",
  apartment_2: "#F8E559",
  apartment_3: "#43766C",
  apartment_4: "#DC84F3",
  apartment_5: "#FF004D",
  apartment_6: "#86B6F6",
  apartment_7: "#F6F7C4",
  shop_1: "#FB8B24",
  shop_2: "#3498DB",
  parking_1: "#200E3A",
  parking_2: "#9A031E",
};
export const FLAT_PROPERTY_TYPES = {
  apartment_1: "apartment",
  apartment_2: "mezzanine",
  apartment_3: "office",
  apartment_4: "penthouse",
  apartment_5: "warehouse",
  apartment_6: "driver flats",
  apartment_7: "servant flats",
  shop_1: "shop",
  shop_2: "store",
  parking_1: "parking",
  parking_2: "underground parking",
};

export const FLAT_PROPERTY_TABS = {
  apartment: {
    tabName: "apartment",
    x: "apartment_floor",
    y: "apartment_count",
    no: "apartment_no",
    type: 1,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "",
    start: 101,
  },
  mezzanine: {
    tabName: "mezzanine",
    x: "mezzanine_floor",
    y: "mezzanine_count",
    no: "apartment_no",
    type: 2,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "M",
    start: "01",
  },
  office: {
    tabName: "office",
    x: "office_floor",
    y: "office_count",
    no: "apartment_no",
    type: 3,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "O",
    start: "101",
  },
  store: {
    tabName: "store",
    x: "store_count",
    y: "",
    no: "shop_no",
    type_col_name: "shop_kind",
    type: 2,
    table: "shop",
    prefix: "S",
    start: "01",
  },
  shop: {
    tabName: "shop",
    x: "shop_count",
    y: "",
    no: "shop_no",
    type: 1,
    type_col_name: "shop_kind",
    table: "shop",
    prefix: "SH",
    start: "01",
  },
  parking: {
    tabName: "parking",
    x: "parking_floor",
    y: "parking_count",
    no: "parking_no",
    type: 1,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "P",
    start: "01",
  },
  penthouse: {
    tabName: "penthouse",
    x: "penthouse_floor",
    y: "penthouse_count",
    no: "apartment_no",
    type: 4,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "PH",
    start: "101",
  },
  "underground parking": {
    tabName: "underground parking",
    x: "underground_parking",
    y: "",
    no: "parking_no",
    type: 2,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "UP",
    start: "01",
  },
  warehouse: {
    tabName: "warehouse",
    x: "warehouse_count",
    y: "",
    no: "apartment_no",
    type: 5,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "W",
    start: "01",
  },
};

export const FLATS_TABLE_NAME = {
  "underground parking": "parking",
  parking: "parking",
  shop: "shop",
  store: "shop",
  apartment: "apartment",
};

export const GET_NEW_ENTRY_GRID = () => {
  return Array(2)
    ?.fill(0)
    .map(() => ({
      account_id: null,
      cost_center_id: null,
      credit: null,
      currency_id: null,
      debit: null,
      note: "",
      observe_account_id: null,
    }));
};

export const GET_NEW_VOUCHER_ENTRY_GRID = () => {
  return Array(1)
    ?.fill(0)
    .map(() => ({
      account_id: null,
      cost_center_id: null,
      created_at: "",
      credit: 0,
      currency_id: null,
      note: "",
      obverse_account_id: null,
    }));
};

export const DEFAULT_COLORS = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#000000", // Black
  "#FFFFFF", // White
  "#FFA500", // Orange
  "#800080", // Purple
  "#008000", // Dark Green
  "#FFC0CB", // Pink
  "#FFD700", // Gold
  "#A52A2A", // Brown
  "#008080", // Teal
  "#FF4500", // Orange Red
  "#6A5ACD", // Slate Blue
  "#D2691E", // Chocolate
  "#2E8B57", // Sea Green
  "#7B68EE", // Medium Slate Blue
];

export const resetChequeFields = () => ({
  id: null,
  amount: 0,
  bank_id: null,
  beneficiary_name: null,
  client_id: null,
  collection_status: null,
  connect_with: null,
  connect_with_id: null,
  cost_center_id: null,
  created_at: null,
  deport_status: null,
  deposit_status: null,
  due_date: null,
  end_due_date: null,
  feedback: false,
  gen_entries: null,
  note: null,
  note1: "",
  note2: "",
  observe_account_id: null,
  observe_cost_center_id: null,
  obverse_account_note: null,
  partial_collection_status: false,
  return_status: false,
  seller_id: null,
  type: null,
  without_due_date: false,
});

export const CONSTANT_COLUMNS_NAME = {
  is_archived: "is_archived",
  is_deleted: "is_deleted",
};

export const UNIQUE_REF_TABLES = {
  clients: "clients",
  suppliers: "suppliers",
  supervisor: "supervisor",
  employee: "employee",
  user_supplier: "user_supplier",
  user_customer: "user_customer",
};

export const FLATS = {
  apartment_count: 0,
  penthouse_count: 0,
  parking_count: 0,
  mezzanine_count: 0,
  office_count: 0,
  store_count: 0,
  warehouse_count: 0,
  shop_count: 0,
  underground_parking: 0,
};

export const POPUP_LINKS_NAME = {
  entry_main_data: true,
  cheque: true,
  voucher_main_data: true,
  contract: true,
  service: true,
  bill: true,
  user_work_times: true,
  user: true,
};

export const UPLOAD_TYPES = {
  SERVICE_CUSTOMER_ATTACHMENT: "SERVICE_CUSTOMER_ATTACHMENT",
  SERVICE_WORKER_ATTACHMENT: "SERVICE_WORKER_ATTACHMENT",
};

export function toTree(data, pid = null) {
  return data?.reduce((r, e) => {
    if (e.parent_id === pid) {
      const obj = { ...e };
      const children = toTree(data, e.id);
      if (children.length) obj.children = children;
      r.push(obj);
    }
    return r;
  }, []);
}



export const BASE_URL = "Kadinle";

export const MODAL_ICONS_TYPES = {
  WARNING: "warning",
  SUCCESS: "success",
};

export const supportedImagesExtensionsTypes = [
  "image/jpg",
  "image/png",
  "image/jpeg",
  "image/webp",
];

/******************************* TABLE ROWS NUMBERS *******************************/
export const TABLE_ROWS_NUMBERS = [
  {
    value: 10,
    label: "10 rows",
  },
  {
    value: 20,
    label: "20 rows",
  },
  {
    value: 30,
    label: "30 rows",
  },
  {
    value: 40,
    label: "40 rows",
  },
  {
    value: 50,
    label: "50 rows",
  },
  {
    value: 60,
    label: "60 rows",
  },
  {
    value: 70,
    label: "70 rows",
  },
  {
    value: 80,
    label: "80 rows",
  },
  {
    value: 90,
    label: "90 rows",
  },
  {
    value: 100,
    label: "100 rows",
  },
];

export const REDUX_PERSIST_KEYS = {
  ROOT: "Kadinle_root",
  AUTH: "Kadinle_auth",
  EXTENDED_LAYOUT: "Kadinle_extended_layout",
};

export const SESSION_STORAGE_USER_KEY = 'MATEISTATE_USER_KEY'
export const SESSION_STORAGE_USER_ACCESS_TOKEN_KEY = 'MATEISTATE_USER_ACCESS_TOKEN_KEY'
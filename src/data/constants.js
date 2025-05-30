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

export const MATEI_ACCESS_TOKEN = 'MATEI_ACCESS_TOKEN'
export const MATEI_REFRESH_TOKEN = 'MATEI_REFRESH_TOKEN'
export const MATEI_LOCAL_STORAGE_USER_KEY = 'MATEI_USER_KEY'


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
  // ? this is deprecated in the old version
  // villa_pictures: "villa_pictures",
  villa_assets: "villa_assets",
  villa_exterior_details: "villa_exterior_details",
  villa_interior_details: "villa_interior_details",
  villa_accounts: "villa_accounts",
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

export const VOUCHER_STEPS = {
  voucher_general: "voucher_general",
  voucher_grid: "voucher_grid", 
  voucher_pictures: "voucher_pictures"
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
    if (e.parentId === pid) {
      const obj = { ...e };
      const children = toTree(data, e.id);
      if (children.length) obj.children = children;
      r.push(obj);
    }
    return r;
  }, []);
}


// export const BASE_URL = "https://api.matiestate.com";
export const BASE_URL = "https://v2.matiestate.com";

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


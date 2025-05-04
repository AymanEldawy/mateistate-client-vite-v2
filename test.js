let list = [
  'time_light_start',
  'time_light_end',
  'time_night_start',
  'time_night_end',
  'service_material_status',
  'bill_pattern_bill_type',
  'material_type',
  'service_status',
  'evacuation_request_status',
  'bill_connect_with',
  'tenants_package',
  'complaint_paid',
  'complaint_status',
  'worker_status',
  'complaint_approved',
  'property_values_area',
  'contract_cycle_report_list',
  'termination_date_options',
  'registered_by_list',
  'contract_printed_list',
  'filter_using',
  'clearance_list',
  'contract_input_case',
  'contract_status_expired',
  'contract_date_by',
  'contract_amount_list',
  'installment_report_list',
  'lawsuit_report',
  'lawsuit_status_report',
  'revenues_report_contract_termination',
  'revenues_report_date',
  'cheque_report_deposit',
  'type',
  'cheque_connect_with',
  'user_type',
  'account_type',
  'apartment_flat_type',
  'shop_kind_type',
  'parking_kind_type',
  'flat_property_type',
  'cheque_pattern_paper_type',
  'cheque_pattern_default_date',
  'cheque_pattern_commission_type',
  'contact_pattern_contract_type',
  'contact_pattern_assets_type',
  'unit_type',
  'contact_pattern_record_created_date',
  'installment_each_duration',
  'installment_each_number',
  'installment_voucher_type',
  'contract_connect_with',
  'termination_date',
  'termination_status',
  'contract_status',
  'contract_contract_type',
  'contract_type',
  'contract_duration',
  'bill_pattern_payment_methods',
  'contract_payment_methods',
  'contract_paid_type',
  'contract_round_to',
  'chq_return_reasons',
]
// for (const item of list) {
//   console.log(item.toUpperCase());

// }

function underscoreToCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item));
  }

  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = underscoreToCamelCase(key);
    newObj[camelKey] = convertKeysToCamelCase(value);
  }

  return newObj;
}

function convertArraysToCamelCase(arr) {
  let newArr = []
  for (const value of arr) {
    let v = underscoreToCamelCase(value)
    console.log("🚀 ~ convertArraysToCamelCase ~ v:", v)
    newArr.push(v)
  }

  return newArr
}

const underscoreData = [
 'name',
'type',
'land_no',
'last_name',
'number',
'date',
'city',
'region',
'space',
'side',
'street_count',
'street_name',
'area',
'area_unit',
'land_type',
'landowner',
'buildble',
'license_no',
'license',
'license_date',
'details',
'begin_land_value',
'currency_begin_land_id',
'currency_val_begin_land',
'begin_land_cost_center_id',
'currency_purchase_id',
'currency_val_purchase',
'purchase_note',
'cost_center_id',
'bank_account_id',
'account_comm_income_id',
'rent',
'rent_currency_id',
'account_id',
'customer_id',
'cuowner_id',
'bank_account_id',
'customer_owner_id',
'owner_account_id',
'identity_value',
'currency_identity_id',
'currency_valid_entity',
'identity_begin_date',
'identity_end_date',
'identity_entry_id',
'identity_note',
'ltnname',
'ltn_land_type',
'ltn_city',
'ltn_region',
'ltn_space',
'ltn_license',
'ltn_side',
'ban',
'commission_percent',
'used_end_date',
'create_entry_investment'









]


const camelCaseData = convertArraysToCamelCase(underscoreData);
console.log(camelCaseData);
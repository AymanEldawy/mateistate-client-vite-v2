import {
  ClipboardIcon,
  UserIcon,
  ToolsIcon,
  BanknoteIcon,
  StoreIcon,
  GearIcon,

} from "@/components/Icons";
import PATHS from "./paths";
import PERMISSIONS from "./permissions";
// import { DashboardMainIcon } from '@components/Icons/SideMenuIcons/DashboardMainIcon';
const sideMenuItems = [
  /******************** General ********************/
  // {
  //   name: "home",
  //   path: PATHS.HOME,
  //   permissions: PERMISSIONS[PATHS.HOME],
  //   // icon: <DashboardMainIcon />,
  // },
  {
    name: "menu.accounts",
    icon: <UserIcon />,
    permissions: PERMISSIONS[PATHS.ACCOUNT],
    children: [
      {
        name: "menu.accounts_accounts",
        subChild: [
          {
            name: "menu.account_card",
            path: PATHS.ACCOUNT,
            permissions: PERMISSIONS[PATHS.ACCOUNT],
          },
          {
            name: "menu.chart_of_account",
            path: PATHS.ACCOUNT_CHART,
            permissions: PERMISSIONS[PATHS.ACCOUNT_CHART],
          },
        ],
      },
      {
        name: "menu.cost_centers",
        subChild: [
          {
            name: "menu.cost_center_card",
            path: PATHS.COST_CENTER,
            permissions: PERMISSIONS[PATHS.COST_CENTER],
          },
          {
            name: "menu.chart_of_cost_center",
            path: PATHS.COST_CENTER_CHART,
            permissions: PERMISSIONS[PATHS.COST_CENTER_CHART],
          },
        ],
      },
      { name: "menu.owner_card", path: PATHS.OWNER, permissions: PERMISSIONS[PATHS.OWNER] },
      { name: "menu.seller_card", path: PATHS.SELLER, permissions: PERMISSIONS[PATHS.SELLER] },
      { name: "menu.lessor_card", path: PATHS.LESSOR, permissions: PERMISSIONS[PATHS.LESSOR] },
      { name: "menu.bank_card", path: PATHS.BANK, permissions: PERMISSIONS[PATHS.BANK] },
      { name: "menu.currency_card", path: PATHS.CURRENCY, permissions: PERMISSIONS[PATHS.CURRENCY] },

    ],
  },
  {
    name: "menu.cards",
    permissions: PERMISSIONS[PATHS.CARDS],
    icon: <ClipboardIcon />,
    children: [

      {
        name: "menu.customer_supplier_card",
        path: PATHS.USER,
        permissions: PERMISSIONS[PATHS.USER],
      },
      {
        name: "menu.building_card",
        path: PATHS.BUILDING,
        permissions: PERMISSIONS[PATHS.BUILDING],
      },
      {
        name: "menu.flat_card",
        path: PATHS.APARTMENT,
        permissions: PERMISSIONS[PATHS.APARTMENT],
      },
      {
        name: "menu.shop_card",
        path: PATHS.SHOP,
        permissions: PERMISSIONS[PATHS.SHOP],
      },
      {
        name: "menu.parking_card",
        path: PATHS.PARKING,
        permissions: PERMISSIONS[PATHS.PARKING],
      },
      {
        name: "menu.land_card",
        path: PATHS.LAND,
        permissions: PERMISSIONS[PATHS.LAND],
      },
      {
        name: "menu.villa_card",
        path: PATHS.VILLA,
        permissions: PERMISSIONS[PATHS.VILLA],
      },
      {
        name: "menu.owner_expenses",
        subChild: [
          {
            name: "menu.owner_expenses_types",
            path: PATHS.OWNER_EXPENSES_TYPES,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES_TYPES],
          },
          {
            name: "menu.owner_expenses_card",
            path: PATHS.OWNER_EXPENSES,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES],
          },
          {
            name: "menu.owner_expenses_report",
            path: PATHS.OWNER_EXPENSES_REPORT,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES_REPORT],
          },
        ],
      },
      {
        name: "menu.reservation_property_card",
        path: PATHS.RESERVATION_PROPERTY,
        permissions: PERMISSIONS[PATHS.RESERVATION_PROPERTY],
      },
    ],
  },
  {
    key: "Accounting_Transactions",
    name: "menu.accounting_transactions",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    children: [

    ]
  },
  {
    name: "menu.realty_transactions",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <BanknoteIcon />,
    children: [
      {
        name: "menu.services_contracts",
        path: PATHS.CONTRACT,
        permissions: PERMISSIONS[PATHS.CONTRACT],
      },
      {
        name: "menu.lawsuit",
        path: PATHS.LAWSUIT,
        permissions: PERMISSIONS[PATHS.LAWSUIT],
      },
      // {
      //   name: "Owners Associations Fees",
      //   path: PATHS.,
      //   permissions: PERMISSIONS[PATHS.HOME],
      // },
      {
        name: "menu.contract_cycle",
        path: PATHS.CONTRACT_CYCLE_REPORT,
        permissions: PERMISSIONS[PATHS.CONTRACT_CYCLE_REPORT],
      },
      {
        name: "menu.building_electricity_meter_reading",
        path: PATHS.BUILDING,
        permissions: PERMISSIONS[PATHS.BUILDING],
      },
    ],
  },

  {
    name: "menu.accounting_reports",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    classes: "flex !flex-col max-h-[400px] overflow-auto",
    children: [
      {
        name: "menu.cheques_report",
        path: PATHS.CHEQUE_REPORT,
        permissions: PERMISSIONS[PATHS.CHEQUE_REPORT],
      },
      {
        name: "menu.returned_cheques",
        path: PATHS.RETURNED_CHEQUES_REPORT,
        permissions: PERMISSIONS[PATHS.RETURNED_CHEQUES_REPORT],
      },
      {
        name: "menu.due_note_papers_report",
        path: PATHS.DUE_NOTE_PAPERS_REPORT,
        permissions: PERMISSIONS[PATHS.DUE_NOTE_PAPERS_REPORT],
      },
      {
        name: "menu.cheques_collection_report",
        path: PATHS.COLLECTION_CHEQUE_REPORT,
        permissions: PERMISSIONS[PATHS.COLLECTION_CHEQUE_REPORT],
      },
      {
        name: "menu.overdue_payments_report",
        path: PATHS.OVERDUE_PAYMENTS_REPORT,
        permissions: PERMISSIONS[PATHS.OVERDUE_PAYMENTS_REPORT],
      },
      {
        name: "menu.vat_bills_report",
        path: PATHS.VAT_BILLS_REPORT,
        permissions: PERMISSIONS[PATHS.VAT_BILLS_REPORT],
      },
      {
        name: "menu.customer_account_statement_report",
        path: PATHS.CUSTOMER_ACCOUNT_STATEMENT_REPORT,
        permissions: PERMISSIONS[PATHS.CUSTOMER_ACCOUNT_STATEMENT_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "menu.journal_ledger_report",
        path: PATHS.JOURNAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.JOURNAL_LEDGER_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "menu.general_ledger_report",
        path: PATHS.GENERAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.GENERAL_LEDGER_REPORT],
      },
      // reports
      {
        name: "menu.trial_balance_report",
        path: PATHS.TRIAL_BALANCE_REPORT,
        permissions: PERMISSIONS[PATHS.TRIAL_BALANCE_REPORT],
      },
      {
        name: "menu.creditors_ages_report",
        path: PATHS.CREDITORS_AGES_REPORT,
        permissions: PERMISSIONS[PATHS.CREDITORS_AGES_REPORT],
      },
      {
        name: "menu.cost_center_general_ledger_report",
        path: PATHS.COST_CENTER_GENERAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.COST_CENTER_GENERAL_LEDGER_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "menu.cost_center_trial_balance_report",
        path: PATHS.COST_CENTER_TRIAL_BALANCE_REPORT,
        permissions: PERMISSIONS[PATHS.COST_CENTER_TRIAL_BALANCE_REPORT],
      },

      {
        name: "menu.trading_sheet_report",
        path: PATHS.TRADING_SHEET_REPORT,
        permissions: PERMISSIONS[PATHS.TRADING_SHEET_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "menu.profit_and_loss_report",
        path: PATHS.PROFIT_AND_LOSS_REPORT,
        permissions: PERMISSIONS[PATHS.PROFIT_AND_LOSS_REPORT],
      },
      {
        name: "menu.balance_sheet_report",
        path: PATHS.BALANCE_SHEET_REPORT,
        permissions: PERMISSIONS[PATHS.BALANCE_SHEET_REPORT],
      },
    ],
  },
  {
    name: "menu.reality_reports",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    children: [
      {
        name: "menu.reality_units_reports",
        subChild: [
          {
            name: "menu.leased_and_non_leased_units",
            path: PATHS.LEASE_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_UNITS_REPORT],
          },
          {
            name: "menu.leased_and_non_leased_lands",
            path: PATHS.LEASE_LANDS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_LANDS_REPORT],
          },
          {
            name: "menu.leased_and_non_leased_villas",
            path: PATHS.LEASE_VILLAS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_VILLAS_REPORT],
          },
          {
            name: "menu.leased_and_non_leased_parking",
            path: PATHS.LEASE_PARKING_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_PARKING_REPORT],
          },
          {
            name: "menu.units_that_will_be_vacated_report",
            path: PATHS.UNITS_WILL_VACATED_REPORT,
            permissions: PERMISSIONS[PATHS.UNITS_WILL_VACATED_REPORT],
            classes: "border-t pt-2 mt-2",
          },
          {
            name: "menu.reserved_units_report",
            path: PATHS.RESERVED_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.RESERVED_UNITS_REPORT],
            classes: "border-b pb-2 mb-2",
          },

          {
            name: "menu.leased_property_activity_report",
            path: PATHS.LEASED_PROPERTY_ACTIVITY_REPORT,
            permissions: PERMISSIONS[PATHS.LEASED_PROPERTY_ACTIVITY_REPORT],
            classes: "border-b pb-2 mb-2",
          },
          {
            name: "menu.sold_units_report",
            path: PATHS.SOLD_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_UNITS_REPORT],
          },
          {
            name: "menu.sold_lands_report",
            path: PATHS.SOLD_LANDS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_LANDS_REPORT],
          },
          {
            name: "menu.sold_villas_report",
            path: PATHS.SOLD_VILLAS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_VILLAS_REPORT],
          },
          {
            name: "menu.changes_flats_rent_pricing_report",
            path: PATHS.CHANGES_FLATS_RENT_PRICING_REPORT,
            permissions: PERMISSIONS[PATHS.CHANGES_FLATS_RENT_PRICING_REPORT],
            classes: "pt-2 mt-2 border-t",
          },
          {
            name: "menu.changes_flats_sale_pricing_report",
            path: PATHS.CHANGES_FLATS_SALE_PRICING_REPORT,
            permissions: PERMISSIONS[PATHS.CHANGES_FLATS_SALE_PRICING_REPORT],
          },
        ],
      },
      {
        name: "menu.revenues_report",
        subChild: [
          {
            name: "menu.earning_rental_income_earned_report",
            path: PATHS.EARNING_RENTAL_INCOME_EARNED_REPORT,
            permissions: PERMISSIONS[PATHS.EARNING_RENTAL_INCOME_EARNED_REPORT],
          },
        ],
      },
      {
        name: "menu.contracts_reports",
        permissions: PERMISSIONS[PATHS.CONTRACT_REPORT],
        subChild: [
          {
            name: "menu.contract_report",
            path: PATHS.CONTRACT_DISCLOSURE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_DISCLOSURE_REPORT],
          },
          {
            name: "menu.services_contracts_report",
            path: PATHS.SERVICES_CONTRACTS_REPORT,
            permissions: PERMISSIONS[PATHS.SERVICES_CONTRACTS_REPORT],
          },
          {
            name: "menu.contract_cycle_report",
            path: PATHS.CONTRACT_CYCLE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_CYCLE_REPORT],
          },
          {
            name: "menu.contracts_deposit_report",
            path: PATHS.CONTRACTS_DEPOSIT_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACTS_DEPOSIT_REPORT],
          },
          {
            name: "menu.expired_contract_report",
            path: PATHS.EXPIRED_CONTRACT,
            permissions: PERMISSIONS[PATHS.EXPIRED_CONTRACT],
            classes: "border-t pt-1 mt-1",
          },
          {
            name: "menu.near_to_expire_contract_report",
            path: PATHS.NEAR_TO_EXPIRE_CONTRACT,
            permissions: PERMISSIONS[PATHS.NEAR_TO_EXPIRE_CONTRACT],
            classes: "border-b pb-1 mb-1",
          },
          {
            name: "menu.contract_cheque_report",
            path: PATHS.CONTRACT_CHEQUE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_CHEQUE_REPORT],
          },
          {
            name: "menu.contract_payments_report",
            path: PATHS.CONTRACT_PAYMENTS_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_PAYMENTS_REPORT],
          },
        ],
      },
      {
        name: "menu.building_schema_report",
        path: PATHS.BUILDING_SCHEMA_REPORT,
        permissions: PERMISSIONS[PATHS.BUILDING_SCHEMA_REPORT],
      },
      {
        name: "menu.unit_condition_for_construction_report",
        path: PATHS.UNIT_CONDITION_FOR_CONSTRUCTION_REPORT,
        permissions: PERMISSIONS[PATHS.UNIT_CONDITION_FOR_CONSTRUCTION_REPORT],
      },
      // {
      //   name: "Manger reports",
      //   subChild: [
      //     {
      //       name: "cheques Report",
      //       path: PATHS.CH,
      //       permissions: PERMISSIONS[PATHS.HOME],
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "menu.stores",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <StoreIcon />,
    children: [
      {
        name: "menu.stores_stores",
        path: PATHS.STORE,
        permissions: PERMISSIONS[PATHS.STORE],
      },
      {
        name: "menu.stores_chart",
        path: PATHS.STORE_CHART,
        permissions: PERMISSIONS[PATHS.STORE_CHART],
      },
      {
        name: "menu.materials",
        subChild: [
          {
            name: "menu.materials_group_card",
            path: PATHS.MATERIAL_GROUP,
            permissions: PERMISSIONS[PATHS.MATERIAL_GROUP],
          },
          {
            name: "menu.material_card",
            path: PATHS.MATERIAL,
            permissions: PERMISSIONS[PATHS.MATERIAL],
          },
          {
            name: "menu.material_chart",
            path: PATHS.MATERIAL_CHART,
            permissions: PERMISSIONS[PATHS.MATERIAL_CHART],
          },
        ],
      },
      {
        name: "menu.item_activity",
        path: PATHS.ITEM_ACTIVITY_REPORT,
        permissions: PERMISSIONS[PATHS.ITEM_ACTIVITY_REPORT],
      },
      {
        name: "menu.inventory_report",
        path: PATHS.INVENTORY_REPORT,
        permissions: PERMISSIONS[PATHS.INVENTORY_REPORT],
      },
      {
        name: "menu.ending_inventory_report",
        path: PATHS.ENDING_INVENTORY_REPORT,
        permissions: PERMISSIONS[PATHS.ENDING_INVENTORY_REPORT],
      },
      {
        name: "menu.sales_report",
        path: PATHS.SALES_REPORT,
        permissions: PERMISSIONS[PATHS.SALES_REPORT],
      },
      {
        name: "menu.bill_details_report",
        path: PATHS.BILL_DETAILS_REPORT,
        permissions: PERMISSIONS[PATHS.BILL_DETAILS_REPORT],
      },
      {
        name: "menu.bill_profit_report",
        path: PATHS.BILL_PROFIT_REPORT,
        permissions: PERMISSIONS[PATHS.BILL_PROFIT_REPORT],
      },
    ],
  },

  {
    name: "menu.maintenance",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <GearIcon />,
    children: [
      {
        key: 1,
        name: "menu.maintenances",
        subChild: [
          {
            key: 1,
            name: "menu.maintenances_maintenances",
            path: PATHS.MAINTENANCES,
            permissions: PERMISSIONS[PATHS.MAINTENANCES],
          },
          {
            key: 2,
            name: "menu.property_preparing_order",
            path: PATHS.MAINTENANCES_PROPERTY,
            permissions: PERMISSIONS[PATHS.MAINTENANCES_PROPERTY],
          },
          {
            key: 3,
            name: "menu.maintenance_order",
            path: PATHS.MAINTENANCES_SERVICE,
            permissions: PERMISSIONS[PATHS.MAINTENANCES_SERVICE],
          },
        ],
      },
      {
        name: "menu.category",
        subChild: [
          {
            name: "menu.category_card",
            path: PATHS.CATEGORY,
            permissions: PERMISSIONS[PATHS.CATEGORY],
          },
          {
            name: "menu.category_problem_card",
            path: PATHS.CATEGORY_PROBLEM,
            permissions: PERMISSIONS[PATHS.CATEGORY_PROBLEM],
          },
        ],
      },
      {
        name: "menu.unregister_material",
        path: PATHS.MATERIAL_UNREGISTER,
        permissions: PERMISSIONS[PATHS.MATERIAL_UNREGISTER],
      },
      {
        name: "menu.user_work_times",
        path: PATHS.USER_WORK_TIMES,
        permissions: PERMISSIONS[PATHS.USER_WORK_TIMES],
      },
      {
        name: "menu.lack_reasons",
        path: PATHS.LACK_REASON,
        permissions: PERMISSIONS[PATHS.LACK_REASON],
      },
      {
        key: 6,
        name: "menu.evacuation_request",
        path: PATHS.EVACUATION_REQUEST,
        permissions: PERMISSIONS[PATHS.EVACUATION_REQUEST],
      },
    ],
  },
  {
    name: "menu.patterns",
    icon: <ToolsIcon />,
    permissions: PERMISSIONS[PATHS.HOME],
    children: [
      {
        name: "menu.contract_patterns",
        path: PATHS.CONTRACT_PATTERN,
        permissions: PERMISSIONS[PATHS.CONTRACT_PATTERN],
      },
      {
        name: "menu.cheque_patterns",
        path: PATHS.CHEQUE_PATTERN,
        permissions: PERMISSIONS[PATHS.CHEQUE_PATTERN],
      },
      {
        name: "menu.voucher_patterns",
        path: PATHS.VOUCHER_PATTERN,
        permissions: PERMISSIONS[PATHS.VOUCHER_PATTERN],
      },
      {
        name: "menu.bill_patterns",
        path: PATHS.BILL_PATTERN,
        permissions: PERMISSIONS[PATHS.BILL_PATTERN],
      },
      {
        name: "menu.accounting_voucher_patterns",
        path: PATHS.ACCOUNTING_VOUCHER_PATTERN,
        permissions: PERMISSIONS[PATHS.ACCOUNTING_VOUCHER_PATTERN],
      },
    ],
  },
];

export default sideMenuItems;


export const entryMenu = {
  name: "menu.entries",
  permissions: PERMISSIONS[PATHS.ENTRIES],
  subChild: [
    {
      name: "menu.entries",
      path: PATHS.ENTRIES,
      permissions: PERMISSIONS[PATHS.ENTRIES],
    },
    {
      name: "menu.create_entry",
      path: PATHS.CREATE_ENTRY,
      permissions: PERMISSIONS[PATHS.CREATE_ENTRY],
    },
  ]
}
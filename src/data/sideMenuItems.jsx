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
    name: "Accounts",
    icon: <UserIcon />,
    permissions: PERMISSIONS[PATHS.ACCOUNT],
    children: [
      {
        name: "Accounts",
        subChild: [
          {
            name: "account card",
            path: PATHS.ACCOUNT,
            permissions: PERMISSIONS[PATHS.ACCOUNT],
          },
          {
            name: "Chart of Account",
            path: PATHS.ACCOUNT_CHART,
            permissions: PERMISSIONS[PATHS.ACCOUNT_CHART],
          },
        ],
      },
      {
        name: "Cost centers",
        subChild: [
          {
            name: "cost center card",
            path: PATHS.COST_CENTER,
            permissions: PERMISSIONS[PATHS.COST_CENTER],
          },
          {
            name: "Chart of cost center",
            path: PATHS.COST_CENTER_CHART,
            permissions: PERMISSIONS[PATHS.COST_CENTER_CHART],
          },
        ],
      },
      { name: "owner card", path: PATHS.OWNER, permissions: PERMISSIONS[PATHS.OWNER] },
      { name: "seller card", path: PATHS.SELLER, permissions: PERMISSIONS[PATHS.SELLER] },
      { name: "lessor card", path: PATHS.LESSOR, permissions: PERMISSIONS[PATHS.LESSOR] },
      { name: "bank card", path: PATHS.BANK, permissions: PERMISSIONS[PATHS.BANK] },
      { name: "Currency card", path: PATHS.CURRENCY, permissions: PERMISSIONS[PATHS.CURRENCY] },

    ],
  },
  {
    name: "Cards",
    permissions: PERMISSIONS[PATHS.CARDS],
    icon: <ClipboardIcon />,
    children: [

      {
        name: "Customer/Supplier Card",
        path: PATHS.USER,
        permissions: PERMISSIONS[PATHS.USER],
      },
      {
        name: "Building Card",
        path: PATHS.BUILDING,
        permissions: PERMISSIONS[PATHS.BUILDING],
      },
      {
        name: "Flat Card",
        path: PATHS.APARTMENT,
        permissions: PERMISSIONS[PATHS.APARTMENT],
      },
      {
        name: "Shop Card",
        path: PATHS.SHOP,
        permissions: PERMISSIONS[PATHS.SHOP],
      },
      {
        name: "Parking Card",
        path: PATHS.PARKING,
        permissions: PERMISSIONS[PATHS.PARKING],
      },
      {
        name: "Land Card",
        path: PATHS.LAND,
        permissions: PERMISSIONS[PATHS.LAND],
      },
      {
        name: "Villa Card",
        path: PATHS.VILLA,
        permissions: PERMISSIONS[PATHS.VILLA],
      },
      {
        name: "owner expenses",
        subChild: [
          {
            name: "owner expenses types",
            path: PATHS.OWNER_EXPENSES_TYPES,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES_TYPES],
          },
          {
            name: "owner expenses card",
            path: PATHS.OWNER_EXPENSES,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES],
          },
          {
            name: "owner expenses report",
            path: PATHS.OWNER_EXPENSES_REPORT,
            permissions: PERMISSIONS[PATHS.OWNER_EXPENSES_REPORT],
          },
        ],
      },
      {
        name: "reservation property Card",
        path: PATHS.RESERVATION_PROPERTY,
        permissions: PERMISSIONS[PATHS.RESERVATION_PROPERTY],
      },
    ],
  },
  {
    name: "Accounting Transactions",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    children: [

    ]
  },
  {
    name: "Realty Transactions",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <BanknoteIcon />,
    children: [
      {
        name: "Services contracts",
        path: PATHS.CONTRACT,
        permissions: PERMISSIONS[PATHS.CONTRACT],
      },
      {
        name: "Lawsuit",
        path: PATHS.LAWSUIT,
        permissions: PERMISSIONS[PATHS.LAWSUIT],
      },
      // {
      //   name: "Owners Associations Fees",
      //   path: PATHS.,
      //   permissions: PERMISSIONS[PATHS.HOME],
      // },
      {
        name: "Contract cycle",
        path: PATHS.CONTRACT_CYCLE_REPORT,
        permissions: PERMISSIONS[PATHS.CONTRACT_CYCLE_REPORT],
      },
      {
        name: "Building electricity meter reading",
        path: PATHS.BUILDING,
        permissions: PERMISSIONS[PATHS.BUILDING],
      },
    ],
  },

  {
    name: "Accounting Reports",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    classes: "flex !flex-col max-h-[400px] overflow-auto",
    children: [
      {
        name: "cheques report",
        path: PATHS.CHEQUE_REPORT,
        permissions: PERMISSIONS[PATHS.CHEQUE_REPORT],
      },
      {
        name: "Returned cheques",
        path: PATHS.RETURNED_CHEQUES_REPORT,
        permissions: PERMISSIONS[PATHS.RETURNED_CHEQUES_REPORT],
      },
      {
        name: "Due note papers report",
        path: PATHS.DUE_NOTE_PAPERS_REPORT,
        permissions: PERMISSIONS[PATHS.DUE_NOTE_PAPERS_REPORT],
      },
      {
        name: "cheques collection report",
        path: PATHS.COLLECTION_CHEQUE_REPORT,
        permissions: PERMISSIONS[PATHS.COLLECTION_CHEQUE_REPORT],
      },
      {
        name: "overdue payments report",
        path: PATHS.OVERDUE_PAYMENTS_REPORT,
        permissions: PERMISSIONS[PATHS.OVERDUE_PAYMENTS_REPORT],
      },
      {
        name: "VAT bills report",
        path: PATHS.VAT_BILLS_REPORT,
        permissions: PERMISSIONS[PATHS.VAT_BILLS_REPORT],
      },
      {
        name: "customer account statement report",
        path: PATHS.CUSTOMER_ACCOUNT_STATEMENT_REPORT,
        permissions: PERMISSIONS[PATHS.CUSTOMER_ACCOUNT_STATEMENT_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "journal Ledger Report",
        path: PATHS.JOURNAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.JOURNAL_LEDGER_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "general Ledger Report",
        path: PATHS.GENERAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.GENERAL_LEDGER_REPORT],
      },
      // reports
      {
        name: "Trial Balance Report",
        path: PATHS.TRIAL_BALANCE_REPORT,
        permissions: PERMISSIONS[PATHS.TRIAL_BALANCE_REPORT],
      },
      {
        name: "creditors ages report",
        path: PATHS.CREDITORS_AGES_REPORT,
        permissions: PERMISSIONS[PATHS.CREDITORS_AGES_REPORT],
      },
      {
        name: "cost center general ledger report",
        path: PATHS.COST_CENTER_GENERAL_LEDGER_REPORT,
        permissions: PERMISSIONS[PATHS.COST_CENTER_GENERAL_LEDGER_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "cost center trial balance report",
        path: PATHS.COST_CENTER_TRIAL_BALANCE_REPORT,
        permissions: PERMISSIONS[PATHS.COST_CENTER_TRIAL_BALANCE_REPORT],
      },

      {
        name: "trading sheet report",
        path: PATHS.TRADING_SHEET_REPORT,
        permissions: PERMISSIONS[PATHS.TRADING_SHEET_REPORT],
        classes: "pt-2 border-t mt-2",
      },
      {
        name: "profit and loss report",
        path: PATHS.PROFIT_AND_LOSS_REPORT,
        permissions: PERMISSIONS[PATHS.PROFIT_AND_LOSS_REPORT],
      },
      {
        name: "balance sheet report",
        path: PATHS.BALANCE_SHEET_REPORT,
        permissions: PERMISSIONS[PATHS.BALANCE_SHEET_REPORT],
      },
    ],
  },
  {
    name: "Reality Reports",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <ToolsIcon />,
    children: [
      {
        name: "Reality Units Reports",
        subChild: [
          {
            name: "leased and non leased units",
            path: PATHS.LEASE_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_UNITS_REPORT],
          },
          {
            name: "leased and non leased lands",
            path: PATHS.LEASE_LANDS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_LANDS_REPORT],
          },
          {
            name: "leased and non leased villas",
            path: PATHS.LEASE_VILLAS_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_VILLAS_REPORT],
          },
          {
            name: "leased and non leased parking",
            path: PATHS.LEASE_PARKING_REPORT,
            permissions: PERMISSIONS[PATHS.LEASE_PARKING_REPORT],
          },
          {
            name: "units that will be vacated report",
            path: PATHS.UNITS_WILL_VACATED_REPORT,
            permissions: PERMISSIONS[PATHS.UNITS_WILL_VACATED_REPORT],
            classes: "border-t pt-2 mt-2",
          },
          {
            name: "reserved units report",
            path: PATHS.RESERVED_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.RESERVED_UNITS_REPORT],
            classes: "border-b pb-2 mb-2",
          },

          {
            name: "leased property activity report",
            path: PATHS.LEASED_PROPERTY_ACTIVITY_REPORT,
            permissions: PERMISSIONS[PATHS.LEASED_PROPERTY_ACTIVITY_REPORT],
            classes: "border-b pb-2 mb-2",
          },
          {
            name: "sold units report",
            path: PATHS.SOLD_UNITS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_UNITS_REPORT],
          },
          {
            name: "sold lands report",
            path: PATHS.SOLD_LANDS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_LANDS_REPORT],
          },
          {
            name: "sold villas report",
            path: PATHS.SOLD_VILLAS_REPORT,
            permissions: PERMISSIONS[PATHS.SOLD_VILLAS_REPORT],
          },
          {
            name: "changes flats rent pricing report",
            path: PATHS.CHANGES_FLATS_RENT_PRICING_REPORT,
            permissions: PERMISSIONS[PATHS.CHANGES_FLATS_RENT_PRICING_REPORT],
            classes: "pt-2 mt-2 border-t",
          },
          {
            name: "changes flats sale pricing report",
            path: PATHS.CHANGES_FLATS_SALE_PRICING_REPORT,
            permissions: PERMISSIONS[PATHS.CHANGES_FLATS_SALE_PRICING_REPORT],
          },
        ],
      },
      {
        name: "Revenues report",
        subChild: [
          {
            name: "earning rental income earned report",
            path: PATHS.EARNING_RENTAL_INCOME_EARNED_REPORT,
            permissions: PERMISSIONS[PATHS.EARNING_RENTAL_INCOME_EARNED_REPORT],
          },
        ],
      },
      {
        name: "Contracts Reports",
        permissions: PERMISSIONS[PATHS.CONTRACT_REPORT],
        subChild: [
          {
            name: "Contract report",
            path: PATHS.CONTRACT_DISCLOSURE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_DISCLOSURE_REPORT],
          },
          {
            name: "services contracts report",
            path: PATHS.SERVICES_CONTRACTS_REPORT,
            permissions: PERMISSIONS[PATHS.SERVICES_CONTRACTS_REPORT],
          },
          {
            name: "contract cycle report",
            path: PATHS.CONTRACT_CYCLE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_CYCLE_REPORT],
          },
          {
            name: "contracts deposit report",
            path: PATHS.CONTRACTS_DEPOSIT_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACTS_DEPOSIT_REPORT],
          },
          {
            name: "Expired contract report",
            path: PATHS.EXPIRED_CONTRACT,
            permissions: PERMISSIONS[PATHS.EXPIRED_CONTRACT],
            classes: "border-t pt-1 mt-1",
          },
          {
            name: "Near to expire contract report",
            path: PATHS.NEAR_TO_EXPIRE_CONTRACT,
            permissions: PERMISSIONS[PATHS.NEAR_TO_EXPIRE_CONTRACT],
            classes: "border-b pb-1 mb-1",
          },
          {
            name: "contract cheque report",
            path: PATHS.CONTRACT_CHEQUE_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_CHEQUE_REPORT],
          },
          {
            name: "contract payments report",
            path: PATHS.CONTRACT_PAYMENTS_REPORT,
            permissions: PERMISSIONS[PATHS.CONTRACT_PAYMENTS_REPORT],
          },
        ],
      },
      {
        name: "building schema Report",
        path: PATHS.BUILDING_SCHEMA_REPORT,
        permissions: PERMISSIONS[PATHS.BUILDING_SCHEMA_REPORT],
      },
      {
        name: "unit condition for construction Report",
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
    name: "Stores",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <StoreIcon />,
    children: [
      {
        name: "stores",
        path: PATHS.STORE,
        permissions: PERMISSIONS[PATHS.STORE],
      },
      {
        name: "stores chart",
        path: PATHS.STORE_CHART,
        permissions: PERMISSIONS[PATHS.STORE_CHART],
      },
      {
        name: "Materials",
        subChild: [
          {
            name: "materials Group Card",
            path: PATHS.MATERIAL_GROUP,
            permissions: PERMISSIONS[PATHS.MATERIAL_GROUP],
          },
          {
            name: "Material Card",
            path: PATHS.MATERIAL,
            permissions: PERMISSIONS[PATHS.MATERIAL],
          },
          {
            name: "Material Chart",
            path: PATHS.MATERIAL_CHART,
            permissions: PERMISSIONS[PATHS.MATERIAL_CHART],
          },
        ],
      },
      {
        name: "item activity",
        path: PATHS.ITEM_ACTIVITY_REPORT,
        permissions: PERMISSIONS[PATHS.ITEM_ACTIVITY_REPORT],
      },
      {
        name: "Inventory report",
        path: PATHS.INVENTORY_REPORT,
        permissions: PERMISSIONS[PATHS.INVENTORY_REPORT],
      },
      {
        name: "Ending Inventory report",
        path: PATHS.ENDING_INVENTORY_REPORT,
        permissions: PERMISSIONS[PATHS.ENDING_INVENTORY_REPORT],
      },
      {
        name: "Sales Report",
        path: PATHS.SALES_REPORT,
        permissions: PERMISSIONS[PATHS.SALES_REPORT],
      },
      {
        name: "Bill Details report",
        path: PATHS.BILL_DETAILS_REPORT,
        permissions: PERMISSIONS[PATHS.BILL_DETAILS_REPORT],
      },
      {
        name: "Bill profit report",
        path: PATHS.BILL_PROFIT_REPORT,
        permissions: PERMISSIONS[PATHS.BILL_PROFIT_REPORT],
      },
    ],
  },

  {
    name: "Maintenance",
    permissions: PERMISSIONS[PATHS.HOME],
    icon: <GearIcon />,
    children: [
      {
        key: 1,
        name: "Maintenances",
        subChild: [
          {
            key: 1,
            name: "Maintenances",
            path: PATHS.MAINTENANCES,
            permissions: PERMISSIONS[PATHS.MAINTENANCES],
          },
          {
            key: 2,
            name: "Property preparing order",
            path: PATHS.MAINTENANCES_PROPERTY,
            permissions: PERMISSIONS[PATHS.MAINTENANCES_PROPERTY],
          },
          {
            key: 3,
            name: "Maintenance order",
            path: PATHS.MAINTENANCES_SERVICE,
            permissions: PERMISSIONS[PATHS.MAINTENANCES_SERVICE],
          },
        ],
      },
      {
        name: "Category",
        subChild: [
          {
            name: "Category Card",
            path: PATHS.CATEGORY,
            permissions: PERMISSIONS[PATHS.CATEGORY],
          },
          {
            name: "Category problem Card",
            path: PATHS.CATEGORY_PROBLEM,
            permissions: PERMISSIONS[PATHS.CATEGORY_PROBLEM],
          },
        ],
      },
      {
        name: "Unregister Material",
        path: PATHS.MATERIAL_UNREGISTER,
        permissions: PERMISSIONS[PATHS.MATERIAL_UNREGISTER],
      },
      {
        name: "user work times",
        path: PATHS.USER_WORK_TIMES,
        permissions: PERMISSIONS[PATHS.USER_WORK_TIMES],
      },
      {
        name: "lack reasons",
        path: PATHS.LACK_REASON,
        permissions: PERMISSIONS[PATHS.LACK_REASON],
      },
      {
        key: 6,
        name: "evacuation request",
        path: PATHS.EVACUATION_REQUEST,
        permissions: PERMISSIONS[PATHS.EVACUATION_REQUEST],
      },
    ],
  },
  {
    name: "Patterns",
    icon: <ToolsIcon />,
    permissions: PERMISSIONS[PATHS.HOME],
    children: [
      {
        name: "Contract patterns",
        path: PATHS.CONTRACT_PATTERN,
        permissions: PERMISSIONS[PATHS.CONTRACT_PATTERN],
      },
      {
        name: "cheque patterns",
        path: PATHS.CHEQUE_PATTERN,
        permissions: PERMISSIONS[PATHS.CHEQUE_PATTERN],
      },
      {
        name: "Voucher patterns",
        path: PATHS.VOUCHER_PATTERN,
        permissions: PERMISSIONS[PATHS.VOUCHER_PATTERN],
      },
      {
        name: "bill patterns",
        path: PATHS.BILL_PATTERN,
        permissions: PERMISSIONS[PATHS.BILL_PATTERN],
      },
      {
        name: "Accounting voucher patterns",
        path: PATHS.ACCOUNTING_VOUCHER_PATTERN,
        permissions: PERMISSIONS[PATHS.ACCOUNTING_VOUCHER_PATTERN],
      },
    ],
  },
];

export default sideMenuItems;

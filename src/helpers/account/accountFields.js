import { ACCOUNT_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "@/helpers/FIELDS_STATCUTRE";

export const ACCOUNT_FIELDS = {
  created_at: FIELDS_STRUCTURE.created_at(),
  code: FIELDS_STRUCTURE.number({
    label: "code",
    name: "code",
  }),
  name: FIELDS_STRUCTURE.name(),
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },
  type: {
    label: "type",
    name: "type",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    options: ACCOUNT_TYPE,
    required: true,
  },

  note: FIELDS_STRUCTURE.note(),
  // FIELDS_STRUCTURE.currency(),
  final_id: FIELDS_STRUCTURE.account({
    label: "final_id",
    name: "final_id",
    no_filter: true,
    required: false,
  }),
  parent_id: FIELDS_STRUCTURE.account({
    label: "parent_id",
    name: "parent_id",
    no_filter: true,
    required: false,
  }),
}

export const ACCOUNT_ASSEMBLY = {
  account_id: FIELDS_STRUCTURE.account(),
};

export const ACCOUNT_DISTRIBUTIVE = {
  account_id: FIELDS_STRUCTURE.account(),
  percentage: {
    label: "percentage",
    name: "percentage",
    type: "number",
  },
}

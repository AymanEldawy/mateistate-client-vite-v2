import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const STORE_Fields = {
  //   FIELDS_STRUCTURE.id(),
  //   FIELDS_STRUCTURE.created_at(),
  number: {
    label: "number",
    name: "number",
    type: "text",
    hide_in_form: true,
  },
  // {
  //   label: "type",
  //   name: "type",
  //   type: "number",
  //   required: true,
  // },
  code: {
    label: "code",
    name: "code",
    type: "number",
  },
  name: FIELDS_STRUCTURE.name(),
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },

  address: {
    label: "address",
    name: "address",
    type: "text",
  },
  warehouseman: {
    label: "warehouseman",
    name: "warehouseman",
    type: "text",
  },
  note: FIELDS_STRUCTURE.note(),
  parent_id: {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "store",
    no_filter: true,
  },
  final_id: {
    label: "final_id",
    name: "final_id",
    is_ref: true,
    ref_table: "store",
  },
};

import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const MATERIAL_GROUP_FIELDS = {
  //   FIELDS_STRUCTURE.id(),
  //   FIELDS_STRUCTURE.created_at(),
  // code: {
  //   label: "code",
  //   name: "code",
  //   type: "number",
  //   required: true,
  // },
  name: FIELDS_STRUCTURE.name(),
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },

  note: FIELDS_STRUCTURE.note(),
  parent_id: {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "material_group",
    no_filter: true,
  },
};

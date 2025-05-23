import FIELDS_STRUCTURE from "@/helpers/FIELDS_STRUCTURE";

export const COST_CENTER_FIELDS = {
  created_at: FIELDS_STRUCTURE.created_at(),
  code: FIELDS_STRUCTURE.number({
    label: "code",
    name: "code",
    required:true,
  }),
  name: FIELDS_STRUCTURE.name(),
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },
  note: FIELDS_STRUCTURE.note(),
  parent_id: FIELDS_STRUCTURE.cost_center({
    label: "parent_id",
    name: "parent_id",
  }),
}


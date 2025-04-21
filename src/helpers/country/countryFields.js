import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const COUNTRY_FIELDS = {
  //   FIELDS_STRUCTURE.created_at(),
  name: FIELDS_STRUCTURE.name(),
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },

  code: {
    label: "code",
    name: "code",
    type: "number",
  },
};

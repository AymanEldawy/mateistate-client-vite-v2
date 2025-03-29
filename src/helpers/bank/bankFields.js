import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const BANK_FIELDS = {
  //   FIELDS_STRUCTURE.id(),
  //   FIELDS_STRUCTURE.created_at(),
  name: FIELDS_STRUCTURE.name(),
  // { label: "ltnname", name: "ltnname", type: "text", required: false },

  address: {
    label: "address",
    name: "address",
    type: "text",
  },
};

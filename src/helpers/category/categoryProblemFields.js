export const CATEGORY_PROBLEM_FIELDS = {
  problem: {
    label: "problem",
    name: "description",
    type: "text",
    required: true,
  },
  ltnproblem: {
    label: "ltnproblem",
    name: "ltndescription",
    type: "text",
    required: true,
  },
  category_id: {
    label: "category_id",
    name: "category_id",
    type: "uuid",
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
    require: true,
  },
  minutes: {
    label: "minutes",
    name: "minutes",
    type: "number",
    required: true,
  },
  price: { label: "price", name: "price", type: "number" },
  is_available: {
    label: "is_available",
    name: "is_available",
    type: "checkbox",
    key: "switch",
  },
};

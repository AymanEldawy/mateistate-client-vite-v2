export const CATEGORY_FIELDS = {
  name: { label: "name", name: "name", type: "text", required: true },
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },

  description: {
    label: "description",
    name: "description",
    type: "text",
    required: false,
  },
  parent_id: {
    label: "parent_id",
    name: "parent_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
  image: { label: "image", name: "image", key: "image", required: false },
};

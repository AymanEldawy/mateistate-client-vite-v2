import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const INSTALLMENT_GRID_FIELDS = [
  FIELDS_STRUCTURE.number({
    name: "internal_number",
    label: "chq_number",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  }),
  FIELDS_STRUCTURE.dateField({
    label: "due_date",
    name: "due_date",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "bank_id",
    name: "bank_id",
    table: "bank",
  }),

  FIELDS_STRUCTURE.textField({
    label: "note1",
    name: "note1",
  }),
  FIELDS_STRUCTURE.textField({
    label: "note2",
    name: "note2",
  }),

  FIELDS_STRUCTURE.dateField({
    label: "end_due_date",
    name: "end_due_date",
  })

];
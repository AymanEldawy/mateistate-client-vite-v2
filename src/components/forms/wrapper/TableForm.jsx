import { useFieldArray, useFormContext } from "react-hook-form";
import TableFormBody from "./TableFormBody";
import TableFormErrors from "./TableFormErrors";
import TableFormHead from "./TableFormHead";
import TableFormIncreasableControl from "./TableFormIncreasableControl";
import TableFormWrapper from "./TableFormWrapper";

const TableForm = ({
  gridName,
  withoutAction,
  headers,
  renderFields,
  formBodyProps,
  formHeadProps,
  formIncreasableProps,
  formWrapperProps,
  increasable = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const tableError = errors?.[gridName];
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: gridName,
  });

  console.log(fields, "fields");

  return (
    <TableFormWrapper
      errors={tableError}
      {...formWrapperProps}
      increasableBar={
        increasable ? (
          <TableFormIncreasableControl
            append={() => append({})}
            grid={fields}
            {...formIncreasableProps}
            remove={remove}
          />
        ) : null
      }
      errorsWrapper={<TableFormErrors errors={tableError} />}
    >
      <TableFormHead
        withoutAction={withoutAction}
        headers={headers}
        {...formHeadProps}
      />
      <TableFormBody
        withoutAction={withoutAction}
        fields={fields}
        remove={remove}
        renderFields={renderFields}
        {...formBodyProps}
      />
    </TableFormWrapper>
  );
};

export default TableForm;

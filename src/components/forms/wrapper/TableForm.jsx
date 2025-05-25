import { useFieldArray, useFormContext } from 'react-hook-form';
import TableFormWrapper from './TableFormWrapper';
import TableFormHead from './TableFormHead';
import TableFormBody from './TableFormBody';
import TableFormIncreasableControl from './TableFormIncreasableControl';

const TableForm = ({ gridName, withoutAction, headers, renderFields, formBodyProps, formHeadProps, formIncreasableProps, formWrapperProps, increasable = true }) => {

  const { control, formState: { errors } } = useFormContext();
  const tableError = errors?.[gridName]
  const { fields, append, remove } = useFieldArray({
    control,
    name: gridName,
  });

  console.log(remove,'mpve');
  

  return (
    <TableFormWrapper
      {...formWrapperProps}
      increasableBar={increasable ?
        <TableFormIncreasableControl append={() => append({})} grid={fields} {...formIncreasableProps} remove={remove} /> : null
      }
    >
      <TableFormHead withoutAction={withoutAction} headers={headers} {...formHeadProps} />
      <TableFormBody withoutAction={withoutAction} fields={fields} remove={remove} renderFields={renderFields} {...formBodyProps} />
    </TableFormWrapper>
  );
};

export default TableForm;
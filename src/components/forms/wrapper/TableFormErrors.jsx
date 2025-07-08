import { ErrorText } from '@/components/shared/ErrorText';

const TableFormErrors = ({ errors }) => {
  // console.log(errors, 'table form errors');
  if (!errors) return;

  console.log(errors,'---erosr');
  return (
    <div>
      {errors?.map(error => {
        console.log(error,'---eror');
        
        // console.log(typeof error, 'error type');
        if (!error) return null;
        else {
          if (error?.message) {
            return <ErrorText key={error?.ref?.name}>{error?.ref?.name || ''} {error?.message}</ErrorText>
          } else return Object.entries(error)?.map(([key, value]) => (
            <ErrorText key={value?.ref?.name}><strong>{key || ''}</strong> {value?.message}</ErrorText>
          ))
        }
      })}
    </div>
  )
}

export default TableFormErrors
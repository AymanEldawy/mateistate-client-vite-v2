import { ErrorText } from '@/components/shared/ErrorText';
import React from 'react'

const TableFormErrors = ({ errors }) => {
  console.log(errors, 'table form errors');
  if (!errors) return;

  return (
    <div>
      {errors?.map(error => {
        console.log(typeof error, 'error type');
        if (!error) return null;
        else {
          if (error?.message) {
            return <ErrorText key={error?.ref?.name}>{error?.message}</ErrorText>
          } else return Object.entries(error)?.map(([key, value]) => (
            <ErrorText key={value?.ref?.name}>{value?.message}</ErrorText>
          ))
        }
      })}
    </div>
  )
}

export default TableFormErrors
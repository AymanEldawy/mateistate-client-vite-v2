import { Controller, useFormContext } from 'react-hook-form';
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";
import { useState } from 'react';

const RHFInput = ({
  containerClassName,
  labelClassName,
  label,
  col,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, required, type, readOnly } = field
  const [hideNumber, setHideNumber] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({
        field: { onChange, ref, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <div className={`w-full ${containerClassName} flex ${col ? 'flex-col' : 'flex-row items-center'} gap-1`}>
            {label && (
              <Label
                name={name}
                required={required}
                label={label}
                labelClassName={labelClassName}
              />
            )}
            <div className='relative  h-[30px]'>
              <input
                ref={ref}
                className={`border text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 focus-within:opacity-100 
                ${type === 'number' && 'absolute top-0 left-0 w-full h-full opacity-0 z-10'} 
                ${error ? "border-red-200 text-red-500" : ""}
                `}
                name={name}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onBlur={() => {
                  onBlur()
                  setHideNumber(false)
                }}
                onFocus={() => setHideNumber(true)}
                {...field}
                value={value}
              />
              {!hideNumber &&
                <span className={`numbers absolute w-full h-full top-0 left-0 border text-xs font-medium rounded p-1 ${readOnly && 'bg-[#2289fb1c] w-full dark:bg-[#444]'}`}>{Number(value || 0)?.toLocaleString()}</span>
              }
            </div>

            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default RHFInput;

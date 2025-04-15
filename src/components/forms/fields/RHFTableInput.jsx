import { Controller, useFormContext } from 'react-hook-form';

const RHFTableInput = ({
  ...field
}) => {
  const { control } = useFormContext();
  const { name, type = 'text', placeholder } = field;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({
        field: { onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div>
            <input
              ref={ref}
              className={`h-[30px] text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 focus-within:opacity-100 
                ${error ? "border-red-200 text-red-500" : ""}
              `}
              name={name}
              value={value || ""}
              aria-invalid={!!error}
              {...field}
              onChange={(e) => {
                onChange(type === 'number' ? + e.target.value : e.target.value);
              }}
              type={type}
              placeholder={placeholder || ''}
            />
          </div>
        );
      }}
    />
  );
};

export default RHFTableInput;
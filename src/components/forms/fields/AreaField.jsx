import { PROPERTY_VALUES_AREA } from "@/helpers/DEFAULT_OPTIONS";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const AreaField = ({
  containerClassName,
  inputClassName,
  error,
  updatedName,
  area_unit,
  name,
  ...field
}) => {
  const { t } = useTranslation();
  const { register, watch, setValue, control } = useFormContext();

  return (
    <div
      className={"flex gap-2 justify-between " + containerClassName}
      key={field?.name}
    >
      <input
        id={name}
        className={`border max-w-[60px] h-[39px] read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
          error ? "border-red-200 text-red-500" : ""
        } 
         `}
        type="number"
        placeholder={'0'}
        value={watch(name)}
        {...register(name, {
          valueAsNumber: field.type === "number",
          validate: (value) => {},
        })}
      />
      <select
        {...register(area_unit, {
          validate: (value) => {},
        })}
        className={`border h-[39px] read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] rounded p-1 `}
        defaultValue={PROPERTY_VALUES_AREA[0]}
      >
        {PROPERTY_VALUES_AREA?.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>
    </div>
  );
};

export default AreaField;

import { useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { RHFInput, RHFTableSelect } from ".";
import useGlobalOptions from "@/hook/useGlobalOptions";
import { ErrorText } from "@/components/shared/ErrorText";

const CurrencyFieldGroup = ({
  containerClassName,
  labelClassName,
  ...field
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { currencies } = useGlobalOptions();
  console.log("🚀 ~ currencies:", currencies)
  // const [currency, setCurrency] = useState(null);
  const { currency_name = 'currency_id', required, label } = field || {}
  const error = errors?.[currency_name];

  return (
    <div className={`flex-row flex rounded-md text-sm h-[31px] ${containerClassName}`}>
      {label && (
        <Label
          name={currency_name}
          required={required}
          label={label}
          labelClassName={labelClassName}
        />
      )}
      <RHFTableSelect
        name={currency_name}
        options={currencies}
        // default option
        selectProps={{
          components: {
            IndicatorsContainer: () => {
              return <RHFInput />
            }
          }
        }}
      />
      {error ? (
        <ErrorText>{error?.message}</ErrorText>
      ) : null}
    </div>
  );
};

export default CurrencyFieldGroup;

import { useFormContext } from "react-hook-form";
import { ErrorText } from "Components/Global/ErrorText";
import useGlobalOptions from "Hooks/useGlobalOptions";
import { Label } from "./Label";
import { RHFInput, RHFTableSelect } from ".";

const CurrencyFieldGroup = ({
  containerClassName,
  labelClassName,
  ...field
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { currencies } = useGlobalOptions();
  // const [currency, setCurrency] = useState(null);
  const { currency_name, required, label } = field
  const error = errors?.[currency_name];

  return (
    <div className={`flex-row flex rounded-md text-sm h-[31px] ${containerClassName}`}>
      {label && (
        <Label
          name={name}
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

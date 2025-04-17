import { useFormContext } from "react-hook-form";
import { Label } from "../fields/Label";
import { RHFInput, RHFTableSelect } from "../fields";
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
  // const { currencies = [] } = useGlobalOptions();
  // const [currency, setCurrency] = useState(null);
  const { name = 'currency_id', required, label } = field || {}
  const error = errors?.[name];

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
        name={name}
        options={[]}
        // default option
        optionValue="id"
        optionLabel="code"
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

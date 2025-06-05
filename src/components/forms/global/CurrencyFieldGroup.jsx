import QUERY_KEYS from "@/data/queryKeys";
import { getAllCurrencies } from "@/services/currencyService";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { RHFInput, RHFSelectField } from "../fields";

const CurrencyFieldGroup = ({
  containerClassName,
  labelClassName,
  hideErrors,
  tab,
  hideLabel,
  ...field
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { data: currencies } = useQuery({
    queryKey: [QUERY_KEYS.CURRENCY],
    queryFn: async () => {
      const response = await getAllCurrencies();
      return response?.data || [];
    },
  });


  const { name = 'currencyId', required, label } = field || {}
  const error = errors?.[name];

  return (
    <div className={`flex-row flex rounded-md text-sm h-[31px] ${containerClassName}`}>
      <RHFSelectField
        label="currency"
        name={name}
        options={currencies}
        optionValue="id"
        optionLabel="code"
        selectProps={{
          components: {
            IndicatorsContainer: () => {
              return <RHFInput
                name="currencyValue"
              />
            }
          }
        }}
      />
    </div>
  );
};

export default CurrencyFieldGroup;

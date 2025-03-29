import { RHFInput } from "../../fields";
import { COUNTRY_FIELDS } from "@/helpers/country/countryFields";

const CountryForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...COUNTRY_FIELDS?.code} />
        <RHFInput {...COUNTRY_FIELDS?.name} />
        <RHFInput {...COUNTRY_FIELDS?.ltnname} />
      </div>
    
    </div>
  );
};

export default CountryForm;

import { CONNECT_WITH_BILL_CODE, CONNECT_WITH_BILL_NAME, CONNECT_WITH_CONTRACT_CODE, CONNECT_WITH_CONTRACT_NAME, CONNECT_WITH_LAWSUIT_CODE, CONNECT_WITH_LAWSUIT_NAME, CONNECT_WITH_NOTHING_CODE } from "@/data/GENERATE_STARTING_DATA";
import { CHEQUE_CONNECT_WITH } from "@/helpers/DEFAULT_OPTIONS";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RHFSelectField } from "../fields";

const REF_TABLES = {
  [CONNECT_WITH_CONTRACT_CODE]: CONNECT_WITH_CONTRACT_NAME,
  [CONNECT_WITH_LAWSUIT_CODE]: CONNECT_WITH_LAWSUIT_NAME,
  [CONNECT_WITH_BILL_CODE]: CONNECT_WITH_BILL_NAME,
};

const UniqueFieldGroup = ({ tab, containerClassName, onSelectContract }) => {
  const { watch } = useFormContext();
  const [list, setList] = useState([])
  const selectName = tab ? `${tab}.connect_with` : "connect_with";
  const selectNameId = tab ? `${tab}.connect_with_id` : "connect_with_id";

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === selectName) {
        const name = REF_TABLES[watch(name)];
        // const response = await ApiActions.read(table);
        // if (response?.success) {
        //   setList(response?.result);
        // }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={`flex flex-row gap-2 text-sm items-center ${containerClassName}`}>
      <RHFSelectField
        name={selectName}
        label="connect with"
        options={CHEQUE_CONNECT_WITH}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
      />


      {watch(selectName) > CONNECT_WITH_NOTHING_CODE ? (
        <RHFSelectField
          name={selectNameId}
          label="connect with"
          options={list}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
      ) : null}
    </div>
  );
};

export default UniqueFieldGroup;

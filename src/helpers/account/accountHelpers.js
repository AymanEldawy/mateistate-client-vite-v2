import { ACCOUNT_ASSEMBLY_TYPE_CODE, ACCOUNT_ASSEMBLY_TYPE_NAME, ACCOUNT_DISTRIBUTIVE_TYPE_CODE, ACCOUNT_DISTRIBUTIVE_TYPE_NAME } from "@/data/GENERATE_STARTING_DATA";

export const calculatePercentage = (watch, setTotalPercentage) => {
  let grid = watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME);
  if (grid?.length < 1) return;

  setTotalPercentage(
    parseInt(
      grid?.reduce((result, curr) => {
        return result + (+curr?.percentage || 0);
      }, 0)
    )
  );
};

export const validationAccount = (watch, setError) => {
  let type = watch("type");
  let ACCOUNTS_TYPES = [
    { name: ACCOUNT_ASSEMBLY_TYPE_NAME, code: ACCOUNT_ASSEMBLY_TYPE_CODE },
    {
      name: ACCOUNT_DISTRIBUTIVE_TYPE_NAME,
      code: ACCOUNT_DISTRIBUTIVE_TYPE_CODE,
    },
  ];

  for (const account of ACCOUNTS_TYPES) {
    if (type === account.code) {
      if (!watch(`${account.name}.0.account_id`)) {
        setError(account.name, {
          type: "required",
          message: `Please fill the ${account.name}`,
        });
        return;
      }
      if (
        watch(account.name).length < 2 ||
        !watch(`${account.name}.1.account_id`)
      ) {
        setError(account.name, {
          type: "required",
          message: `The ${account.name} must be at least 2 accounts`,
        });
        return;
      }
    }
  }

  return true;
};

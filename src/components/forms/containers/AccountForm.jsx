import { ErrorText } from "@/components/shared/ErrorText";
import { ACCOUNT_ASSEMBLY_TYPE_NAME, ACCOUNT_DISTRIBUTIVE_TYPE_NAME } from "@/data/GENERATE_STARTING_DATA";
import QUERY_KEYS from "@/data/queryKeys";
import { calculatePercentage } from "@/helpers/account/accountHelpers";
import { ACCOUNT_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { getAccountCodeNumber, getAllAccounts } from "@/services/accountService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../fields";
import TableForm from "../wrapper/TableForm";

const AccountForm = () => {
  // let name = 'account';
  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT],
    queryFn: async () => {
      const response = await getAllAccounts();
      return response?.data || [];
    },
  });

  const { watch, setValue, formState: { errors }, clearErrors } = useFormContext();
  const [totalPercentage, setTotalPercentage] = useState(0)
  useEffect(() => {
    // let isAccount = name === "account";
    const subscription = watch((value, { name }) => {
      if (name === 'account.parentId') {
        automaticChangesOnAccount(watch(name));
      }
      if (name === "type") {
        // UPDATE WITH API
        // onChangeAccountType(watch(name), setValue);
      }
      if (name?.indexOf(ACCOUNT_ASSEMBLY_TYPE_NAME) !== -1) {
        clearErrors(ACCOUNT_ASSEMBLY_TYPE_NAME);
      }
      if (name?.indexOf(ACCOUNT_DISTRIBUTIVE_TYPE_NAME) !== -1) {
        clearErrors(ACCOUNT_DISTRIBUTIVE_TYPE_NAME);
        calculatePercentage(watch, setTotalPercentage);
      }

      if (name === 'account.type') {
        setValue('type', value.account.type);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const automaticChangesOnAccount = async (parentId) => {
    const response = await getAccountCodeNumber(parentId);
    if (response?.success) {
      const data = response?.data
      setValue("account.finalId", data?.finalId || data?.parentId);
      setValue("account.code", data.nextChildCode);
    }
  };  

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput
          name="account.code"
          label="code"
          type="text"
          required
        />
        <RHFInput
          name="account.name"
          label="name"
          required
        />
        <RHFSelectField
          name="account.type"
          label="type"
          required
          options={ACCOUNT_TYPE}
        />
      </div>
      {watch("type") === 1 || watch("account.type") === 1 ? (
        <div className="flex-1 grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
          <RHFSelectField
            name="account.parentId"
            label="parent_id"
            options={accounts}
          />
          <RHFSelectField
            name="account.finalId"
            label="final_id"
            options={accounts}
          />
        </div>
      ) : null}
      <RHFTextarea name="account.note" label="note" />
      {watch("type") === 3 || watch("account.type") === 3  ? (
        <div
          className={
            errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME]
              ? "border border-red-500 p-2 rounded-md my-2"
              : ""
          }
        >
          {errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME] ? (
            <ErrorText>
              {errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME]?.message}
            </ErrorText>
          ) : null}
          <TableForm
            renderFields={(item, index) => (
              <div key={index}>
                <RHFSelectField
                  name={`${ACCOUNT_ASSEMBLY_TYPE_NAME}.${index}.mainAccountId`}
                  options={accounts}
                  hideErrors
                />
              </div>
            )}
            gridName={ACCOUNT_ASSEMBLY_TYPE_NAME}
            headers={['mainAccountId']}
          />
        </div>
      ) : null}
      {watch("type") === 4|| watch("account.type") === 4 ? (
        <div
          className={
            errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME]
              ? "border border-red-500 p-2 rounded-md my-2"
              : ""
          }
        >
          {errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME] ? (
            <ErrorText>
              {errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME]?.message}
            </ErrorText>
          ) : null}
          <div className="mt-1 text-sm font-medium flex items-center gap-2">
            <span className="text-blue-600 p-1 rounded-md">
              Used: {totalPercentage || 0}
            </span>
            <span className="bg-gray-300 h-4 w-[2px]" />
            <span className="text-green-600 p-1 rounded-md">
              Rest: {100 - totalPercentage || 100}
            </span>
          </div>
          {totalPercentage > 100 ? (
            <ErrorText>The total percentage must be equal 100</ErrorText>
          ) : null}
          <TableForm
            renderFields={(item, index) => (
              <>
                <td>
                  <RHFSelectField
                    name={`${ACCOUNT_DISTRIBUTIVE_TYPE_NAME}.${index}.mainAccountId`}
                    options={accounts}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFTableInput
                    name={`${ACCOUNT_DISTRIBUTIVE_TYPE_NAME}.${index}.percentage`}
                    label=""
                    type="number"
                  />
                </td>
              </>
            )}
            gridName={ACCOUNT_DISTRIBUTIVE_TYPE_NAME}
            headers={['mainAccountId', 'percentage']}
          />
        </div>
      ) : null}
    </div>
  );
}

export default AccountForm
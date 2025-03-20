import { ErrorText } from "@/components/shared/ErrorText";
import { ACCOUNT_ASSEMBLY_TYPE_NAME, ACCOUNT_DISTRIBUTIVE_TYPE_NAME } from "@/data/GENERATE_STARTING_DATA";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { calculatePercentage } from "@/helpers/account/accountHelpers";
import { ACCOUNT_ASSEMBLY, ACCOUNT_DISTRIBUTIVE, ACCOUNT_FIELDS } from "@/helpers/account/accountFields";
import TableForm from "../wrapper/TableForm";
import { RHFTableInput, RHFInput, RHFTextarea, RHFAsyncSelectField, RHFSelectField, RHFTableAsyncSelect } from "../fields";

const AccountForm = () => {
  // let name = 'account';
  const { watch, formState: { errors }, clearErrors } = useFormContext();
  const [totalPercentage, setTotalPercentage] = useState(0)
  useEffect(() => {
    // let isAccount = name === "account";
    const subscription = watch((value, { name }) => {
      // if (isAccount) {
      //   automaticChangesOnAccount(name, watch, setValue);
      // }
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
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // const automaticChangesOnAccount = async (watch) => {
  //   const account = await getAccountCode(watch('parent_id'));
  //   setValue("final_id", account?.final_id || account?.parent_id);
  //   setValue("code", account.code);
  // };


  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput
          {...ACCOUNT_FIELDS?.code}
        />
        <RHFInput
          {...ACCOUNT_FIELDS?.name}
        />
        <RHFSelectField
          {...ACCOUNT_FIELDS?.type}
        />
      </div>
      {watch("type") === 1 ? (
        <div className="flex-1 grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
          <RHFAsyncSelectField
            {...ACCOUNT_FIELDS?.parent_id}
          />
          <RHFAsyncSelectField
            {...ACCOUNT_FIELDS?.final_id}
          />
        </div>
      ) : null}
      <RHFTextarea {...ACCOUNT_FIELDS?.note} />
      {watch("type") === 3 ? (
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
                <RHFTableAsyncSelect
                  {...ACCOUNT_ASSEMBLY?.account_id}
                  name={`${ACCOUNT_ASSEMBLY_TYPE_NAME}.${index}.account_id`}
                />
              </div>
            )}
            gridName={ACCOUNT_ASSEMBLY_TYPE_NAME}
            headers={Object.values(ACCOUNT_ASSEMBLY)?.map(c => c?.label)}
          />
        </div>
      ) : null}
      {watch("type") === 4 ? (
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
                  <RHFTableInput
                    {...ACCOUNT_ASSEMBLY?.account_id}
                    name={`${ACCOUNT_DISTRIBUTIVE_TYPE_NAME}.${index}.account_id`}
                    label=""
                  />
                </td>
                <td>
                  <RHFTableInput
                    {...ACCOUNT_DISTRIBUTIVE?.percentage}
                    name={`${ACCOUNT_DISTRIBUTIVE_TYPE_NAME}.${index}.percentage`}
                    label=""
                  />
                </td>
              </>
            )}
            gridName={ACCOUNT_DISTRIBUTIVE_TYPE_NAME}
            headers={Object.values(ACCOUNT_DISTRIBUTIVE)?.map(c => c?.label)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default AccountForm
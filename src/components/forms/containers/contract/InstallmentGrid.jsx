import { ErrorText } from "@/components/shared/ErrorText";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form"
import TableForm from "../../wrapper/TableForm";
import { INSTALLMENT_GRID_FIELDS } from "@/helpers/contract/installmentFields";
import DynamicForm from "../../wrapper/DynamicForm";
import { RHFDatePicker, RHFInputAmount, RHFTableAsyncSelect, RHFTableInput } from "../../fields";

const InstallmentGrid = () => {
  const { watch, setError, clearErrors, formState: { errors } } = useFormContext();
  const [totalCheAmount, setTotalChqAmount] = useState(0)

  const calculateAmount = useCallback(() => {
    let grid = watch("installment_grid");
    let count = 0;

    for (const item of grid) {
      count += +item?.amount;
    }
    count = Math.round(count);
    if (count > watch("installment.rest_amount")) {
      setError("installment_grid_amount", {
        message:
          "The Total Amount of cheques must be equal or less than Rest Amount",
      });
      return;
    } else clearErrors("installment_grid_amount");

    setTotalChqAmount(count)
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name?.indexOf(/amount/ig) !== -1) {
        calculateAmount()
      }
      if (name === "installment.first_batch") {
        setTotalChqAmount(
          watch("installment.total_amount") - watch("installment.first_batch")
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>

      {watch("installment_grid")?.length ? (
        <div
          className={
            errors?.installment_grid_amount
              ? "border border-red-500 p-2 rounded-md my-2"
              : ""
          }
        >
          <div className="mt-4 border-t pt-2 font-medium flex items-center gap-2">
            <span className="text-red-600 rounded-md">
              Used: {totalCheAmount || 0}
            </span>
            <span className="bg-gray-300 h-6 w-[2px] mx-8" />
            <span className="text-green-600 rounded-md">
              Rest:{" "}
              {watch("installment.rest_amount") - totalCheAmount ||
                watch("installment.rest_amount") || 0}
            </span>
          </div>
          {errors?.installment_grid_amount ? (
            <ErrorText>
              {errors?.installment_grid_amount?.message}{" "}
              {watch("installment.rest_amount")}
            </ErrorText>
          ) : null}
          <TableForm
            gridName="installment_grid"
            headers={INSTALLMENT_GRID_FIELDS?.map(c => c?.label)}
            renderFields={(item, index) => (
              <>
                <td className="border text-center">
                  <RHFTableInput
                    name={`installment_grid.${index}.internal_number`}
                  />
                </td>
                <td className="border text-center">
                  <RHFInputAmount
                    name={`installment_grid.${index}.amount`}
                    inTable
                  />
                </td>
                <td className="border text-center">
                  <RHFDatePicker
                    name={`installment_grid.${index}.due_date`}
                  />
                </td>
                <td className="border text-center">
                  <RHFTableAsyncSelect
                    name={`installment_grid.${index}.bank_id`}
                  />
                </td>
                <td className="border text-center w-[180px]">
                  <RHFTableInput
                    name={`installment_grid.${index}.note1`}
                  />
                </td>
                <td className="border text-center w-[180px]">
                  <RHFTableInput
                    name={`installment_grid.${index}.note2`}
                  />
                </td>
                <td className="border text-center">
                  <RHFDatePicker
                    name={`installment_grid.${index}.end_due_date`}
                  />
                </td>

              </>
            )}
          // errors={errors}
          // fields={fields_grid}
          // tab="installment_grid"
          // CACHE_LIST={CACHE_LIST}
          // rowsCount={watch("installment_grid")?.length}
          // tdClassName="first:min-w-[40px] min-w-[140px]"
          // withPortal
          />
        </div>
      ) : null}
    </>
  )
}

export default InstallmentGrid
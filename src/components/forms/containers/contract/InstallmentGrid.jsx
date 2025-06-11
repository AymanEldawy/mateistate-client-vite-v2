import { ErrorText } from "@/components/shared/ErrorText";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RHFDatePicker, RHFInputAmount, RHFTableAsyncSelect, RHFTableInput } from "../../fields";
import TableForm from "../../wrapper/TableForm";

const InstallmentGrid = () => {
  const { watch, setError, clearErrors, formState: { errors } } = useFormContext();
  const [totalCheAmount, setTotalChqAmount] = useState(0)

  const calculateAmount = useCallback(() => {
    let grid = watch("installmentGrid");
    let count = 0;

    for (const item of grid) {
      count += +item?.amount;
    }
    count = Math.round(count);
    if (count > watch("installment.restAmount")) {
      setError("installmentGridAmount", {
        message:
          "The Total Amount of cheques must be equal or less than Rest Amount",
      });
      return;
    } else clearErrors("installmentGridAmount");

    setTotalChqAmount(count)
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name?.indexOf(/amount/ig) !== -1) {
        calculateAmount()
      }
      if (name === "installment.firstBatch") {
        setTotalChqAmount(
          watch("installment.totalAmount") - watch("installment.firstBatch")
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>

      {watch("installmentGrid")?.length ? (
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
              {watch("installment.restAmount") - totalCheAmount ||
                watch("installment.restAmount") || 0}
            </span>
          </div>
          {errors?.installment_grid_amount ? (
            <ErrorText>
              {errors?.installment_grid_amount?.message}{" "}
              {watch("installment.restAmount")}
            </ErrorText>
          ) : null}
          <TableForm
            gridName="installment_grid"
            headers={[
              'internalNumber',
              'amount',
              'dueDate',
              'bankId',
              'note1',
              'note2',
              'endDueDate',
            ]}
            renderFields={(item, index) => (
              <>
                <td className="border text-center">
                  <RHFTableInput
                    name={`installmentGrid.${index}.internalNumber`}
                  />
                </td>
                <td className="border text-center">
                  <RHFInputAmount
                    name={`installmentGrid.${index}.amount`}
                    inTable
                  />
                </td>
                <td className="border text-center">
                  <RHFDatePicker
                    name={`installmentGrid.${index}.dueDate`}
                  />
                </td>
                <td className="border text-center">
                  <RHFTableAsyncSelect
                    name={`installmentGrid.${index}.bankId`}
                  />
                </td>
                <td className="border text-center w-[180px]">
                  <RHFTableInput
                    name={`installmentGrid.${index}.note1`}
                  />
                </td>
                <td className="border text-center w-[180px]">
                  <RHFTableInput
                    name={`installmentGrid.${index}.note2`}
                  />
                </td>
                <td className="border text-center">
                  <RHFDatePicker
                    name={`installmentGrid.${index}.endDueDate`}
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
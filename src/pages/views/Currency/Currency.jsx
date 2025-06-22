import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import QUERY_KEYS from '@/data/queryKeys'
import currencyColumns from '@/helpers/currency/currencyColumns'
import { currencyDefaultValue, currencyValidationSchema } from '@/helpers/currency/currencyValidationSchema'
import { createCurrency, deleteCurrency, deleteManyCurrencies, getAllCurrencies, getSingleCurrency, updateCurrency } from '@/services/currencyService'
import { lazy } from 'react'
const CurrencyForm = lazy(() => import("@/components/forms/containers/currency/CurrencyForm"))

const currencyConfig = {
  formProps: {
    defaultValue: currencyDefaultValue,
    validationSchema: currencyValidationSchema,
    mutationAddFunction: createCurrency,
    mutationUpdateFunction: updateCurrency,
    getSingleFunction: getSingleCurrency,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteCurrency,
    RenderForm: (props) => <CurrencyForm {...props} />
  },
  formHeaderProps: {
    header: "currency",
  },
}

const Currency = ({ formOnly, outerClose, defaultNumber }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...currencyConfig}
        outerClose={outerClose}
        numberSearchParam={defaultNumber}
      />
    )
  }

  return (
    <PaperLayout
      name="currency"
      queryKey={QUERY_KEYS.CURRENCY}
      queryFn={getAllCurrencies}
      handleDeleteSelected={deleteManyCurrencies}
      paperHeaderProps={{
        header: "currency"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: currencyColumns
      }}
      {...currencyConfig}
    />
  )
}

export default Currency
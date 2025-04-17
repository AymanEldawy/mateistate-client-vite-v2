import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { createCurrency, deleteCurrency, deleteManyCurrencies, getAllCurrencies, getSingleCurrency, updateCurrency } from '@/services/currencyService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import currencyColumns from '@/helpers/currency/currencyColumns'
import { lazy } from 'react'
import { z } from 'zod'
const CurrencyForm = lazy(() => import("@/components/forms/containers/currency/CurrencyForm"))

const defaultValue = {
  id: '',
  code: '',
  name: '',
  ltnname: '',
  rate: 1,
}

const validationSchema = () => z.object({
  id: z.string(),
  code: z.string().nonempty({ message: 'Code is Required' }),
  name: z.string().nonempty({ message: 'name is Required' }),
  ltnname: z.string().optional(),
  rate: z.number().min(0, { message: 'Rate must be greater than 0' }),
})

const currencyConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createCurrency,
    mutationUpdateFunction: updateCurrency,
    getSingleFunction: getSingleCurrency, 
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteCurrency,
    RenderForm: (props) => <CurrencyForm {...props} />
  },
  formPaginationProps: {
    name: 'currency',
    number: 1
  },
  formHeaderProps: {
    header: "Currency",
  },
}

const Currency = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...currencyConfig}
        outerClose={outerClose}
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
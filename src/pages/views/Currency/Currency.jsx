import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteCurrency, deleteManyCurrencies, getAllCurrencies } from '@/services/currencyService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import currencyColumns from '@/helpers/currency/currencyColumns'
import { lazy } from 'react'
const CurrencyForm = lazy(() => import("@/components/forms/containers/currency/CurrencyForm"))

const defaultValue = {}

const validationSchema = () => { }

const currencyConfig = {
    formProps: {
        defaultValue,
        validationSchema,
        mutationAddFunction: () => { },
        mutationUpdateFunction: () => { },
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
import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteVilla, deleteManyVillas, getAllVillas } from '@/services/villaService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import villaColumns from '@/helpers/villa/villaColumns'
import { lazy } from 'react'
import { VILLA_STEPS } from '@/data/constants'
const VillaForm = lazy(() => import("@/components/forms/containers/villa/VillaForm"))

const defaultValue = {}

const validationSchema = () => { }

const villaConfig = {
    formProps: {
        defaultValue,
        validationSchema,
        mutationAddFunction: () => { },
        mutationUpdateFunction: () => { },
        onSuccessAction: () => { },
        isSteps: true,
        onHandleDelete: deleteVilla,
        RenderForm: (props) => <VillaForm {...props} />
    },
    formPaginationProps: {
        name: 'villa',
        number: 1
    },
    formSidebarProps: {
        list: Object.values(VILLA_STEPS)
    },
    formHeaderProps: {
        header: "Villa",
    },
}

const Villa = ({ formOnly, outerClose }) => {

    if (formOnly) {
        return (
            <FormWrapper
                {...villaConfig}
                outerClose={outerClose}
            />
        )
    }

    return (
        <PaperLayout
            name="villa"
            queryKey={QUERY_KEYS.VILLA}
            queryFn={getAllVillas}
            handleDeleteSelected={deleteManyVillas}
            paperHeaderProps={{
                header: "villa"
            }}
            paperBarProps={{
                onClickPrint: true,
                onClickAdd: true,
            }}
            tableProps={{
                columns: villaColumns
            }}
            {...villaConfig}

        />
    )
}

export default Villa
import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteService, deleteManyServices, getAllServices, createService, updateService, getSingleService } from '@/services/serviceService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import serviceColumns from '@/helpers/service/serviceColumns'
import { lazy } from 'react'
const ServiceForm = lazy(() => import("@/components/forms/containers/service/ServiceForm"))

const defaultValue = {}

const validationSchema = () => { }

const serviceConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createService,
    mutationUpdateFunction: updateService,
    getSingleFunction: getSingleService,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteService,
    RenderForm: (props) => <ServiceForm {...props} />
  },
  formPaginationProps: {
    name: 'service',
    number: 1
  },
}

const Service = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...serviceConfig}
        outerClose={outerClose}
      />
    )
  }

  return (
    <PaperLayout
      name="service"
      queryKey={QUERY_KEYS.SERVICE}
      queryFn={getAllServices}
      handleDeleteSelected={deleteManyServices}
      paperHeaderProps={{
        header: "service"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: serviceColumns
      }}
      {...serviceConfig}
    />
  )
}

export default Service
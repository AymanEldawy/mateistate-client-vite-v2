import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteShop, deleteManyShops, getAllShops, createShop, updateShop, getSingleShop } from '@/services/shopService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import shopColumns from '@/helpers/shop/shopColumns'
import { lazy } from 'react'
import { SHOP_STEPS } from '@/data/constants'
import { RHFCheckbox } from '@/components/forms/fields'
import { shopDefaultValue, shopValidationSchema } from '@/helpers/shop/shopValidationSchema'
import EntryBar from '@/components/shared/EntryBar'
const ShopForm = lazy(() => import("@/components/forms/containers/shop/ShopForm"))


const shopConfig = {
  formProps: {
    defaultValue: shopDefaultValue,
    validationSchema: shopValidationSchema,
    mutationAddFunction: createShop,
    mutationUpdateFunction: updateShop,
    getSingleFunction: getSingleShop,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteShop,
    RenderForm: (props) => <ShopForm {...props} />
  },
  formPaginationProps: {
    name: 'shop',
    number: 1
  },
  formSidebarProps: {
    list: Object.values(SHOP_STEPS)
  },
  formHeaderProps: {
    header: "Shop",
  },
}

const Shop = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...shopConfig}
        outerClose={outerClose}
      />
    )
  }

  return (
    <PaperLayout
      name="shop"
      queryKey={QUERY_KEYS.SHOP}
      queryFn={getAllShops}
      handleDeleteSelected={deleteManyShops}
      paperHeaderProps={{
        header: "shop"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: shopColumns
      }}
      {...shopConfig}
    />
  )
}

export default Shop
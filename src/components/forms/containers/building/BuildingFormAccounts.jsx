import { BUILDING_DEFAULT_ACCOUNTS_FIELDS } from '@/helpers/building/buildingFields'
import { AccountField } from '../../global'

const BuildingFormAccounts = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
    {
      BUILDING_DEFAULT_ACCOUNTS_FIELDS?.map(field => (
        <AccountField {...field} />
      ))
    }
    </div>
  )
}

export default BuildingFormAccounts
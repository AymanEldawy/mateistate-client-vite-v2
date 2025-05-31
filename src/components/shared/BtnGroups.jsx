import { useQuery } from '@tanstack/react-query'
import Btn from './Btn'
import Loading from './Loading'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'

const BtnGroups = ({
  queryKey,
  queryFn,
  onClose
}) => {
  const updateSearchParams = useUpdateSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await queryFn()
      if (response?.success) {
        return response.data
      }
      return []
    }
  })


  const handleChangeCode = (code) => {
    updateSearchParams([{ name: SEARCH_PARAMS.CODE, value: code }]);
    onClose()
  }


  if (isLoading) return <Loading />

  return (
    <div className='flex items-center gap-4 '>
      {data?.map(item => {
        return <Btn key={item?.name} onClick={() => handleChangeCode(item?.code)} kind="info">{item?.name}</Btn>
      })}
    </div>
  )
}

export default BtnGroups
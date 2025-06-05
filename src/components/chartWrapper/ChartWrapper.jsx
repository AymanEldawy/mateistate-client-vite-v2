import { toTree } from '@/data/constants'
import { usePopupForm } from '@/hook/usePopupForm'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { PaperHeader } from '../layout/paper/PaperHeader'
import { ErrorText } from '../shared/ErrorText'
import Loading from '../shared/Loading'
import ChartRenderTree from './ChartRenderTree'

const ChartWrapper = ({
  title,
  queryKey,
  queryFn,
  name,
  onSelectItem,
  onDeleteItem,
  onAddItemHandler
}) => {
  const { t } = useTranslation()
  const { handleDispatchForm } = usePopupForm()

  const { isLoading, isError, data, error, isFetching, refetch } = useQuery({
    queryKey: [queryKey, 'chartTree'],
    queryFn: async () => {
      const response = await queryFn()
      if (response?.success) {
        return toTree(response?.data || [])
        // return response?.data || []
      }
    },
    // queryFn: () => {},
  });


  // onSelectItemHandler
  const onSelectItemHandler = async (item) => {
    const response = await onSelectItem(item?.id);
  };

  // onUpdateItemHandler
  const onUpdateItemHandler = async (item) => {
    console.log(item, '----');

    handleDispatchForm({
      table: name,
      oldValues: item,
      number: item?.number,
    })
  };

  // OnDeleteItemHandler
  const onDeleteItemHandler = async (item) => {
    const response = await onDeleteItem(item);
    if (response?.success) {
      toast.success(t("delete_success"));
      refetch();
    } else {
      toast.error(t("delete_failed"));
    }
  };
  // onUpdateItemHandler


  const renderChart = () => {
    return data?.length ? (
      <ChartRenderTree
        name={name}
        chartTree={data}
        // onSubmit={onSubmit}  
        refetchData={refetch}
        onSelectItemHandler={onSelectItemHandler}
        onUpdateItemHandler={onUpdateItemHandler}
        onAddItemHandler={onAddItemHandler}
        onDeleteItemHandler={onDeleteItemHandler}
      // showStatus={showStatus}
      />
    ) : (
      <ErrorText>
        {t("empty_result")}
      </ErrorText>
    )
  }


  return (
    <div className="bg-[#fff] shadow p-2 container-full rounded-md mt-4 relative">
      <PaperHeader header={title} />
      {!isLoading ? renderChart() : <Loading />}
    </div>
  )
}

export default ChartWrapper
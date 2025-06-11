import ConfirmModal from '@/components/shared/ConfirmModal';
import Loading from '@/components/shared/Loading';
import SEARCH_PARAMS from '@/data/searchParamsKeys';
import useCustomSearchParams from '@/hook/useCustomSearchParams';
import usePathname from '@/hook/usePathname';
import { useQuery } from '@tanstack/react-query';
import { lazy, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import PaperBar from './PaperBar';
import PaperHeader from './PaperHeader';

const CustomTable = lazy(() => import('../../tables/containers/CustomTable'))
const PaperModal = lazy(() => import('./PaperModal'))
const PaperFiltersAndSort = lazy(() => import('./PaperFiltersAndSort'))
const PaperError = lazy(() => import('./PaperError'))
const FormWrapper = lazy(() => import('../../forms/wrapper/FormWrapper'))

const PaperLayout = ({
  name,
  queryFn,
  paperBarProps,
  paperHeaderProps,
  tableProps,
  formHeaderProps,
  formFooterProps,
  formSidebarProps,
  formProps,
  handleDeleteSelected,
  queryKey,
}) => {
  const { t } = useTranslation()
  const pathname = usePathname();
  const numberSearchParam = useCustomSearchParams(SEARCH_PARAMS.NUMBER)
  const codeSearchParam = useCustomSearchParams(SEARCH_PARAMS.CODE)
  const [openViability, setOpenViability] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [rowSelection, setRowSelection] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 100,
  });

  // TODO: Refactor this to use a custom hook for search params
  useEffect(() => {
    setOpenForm(!!numberSearchParam || !!codeSearchParam)
  }, [numberSearchParam])


  const { isLoading, isError, data, error, isFetching, refetch } = useQuery({
    queryKey: [
      queryKey,
      columnFilters,
      pagination?.pageIndex,
      pagination?.pageSize,
    ],
    queryFn: async () => {
      const response = await queryFn(
        pagination?.pageIndex,
        pagination?.pageSize,
        columnFilters,
        globalFilter,
      )
      if (response?.success) {
        setPagination(prev => ({
          ...prev,
          pageIndex: response?.pages
        }))
        setPageCount(response?.pages)
        return response?.data
      }
    },
    // queryFn: () => {},
  });

  const onDeleteSelected = async () => {
    const response = handleDeleteSelected(Object.keys(rowSelection))
    if (response?.success) {
      toast.success(t('toastMessages.successToDelete'))
      refetch()
    }
    else {
      toast.error(t('toastMessages.failedToDelete'))
    }
    setOpenConfirmation(false)
  }

  return (
    <>
      <ConfirmModal
        open={openConfirmation}
        onConfirm={onDeleteSelected}
        setOpen={setOpenConfirmation}
      />

      <PaperModal open={openForm} onClose={() => setOpenForm(false)}>
        <FormWrapper
          formHeaderProps={formHeaderProps}
          formFooterProps={formFooterProps}
          formSidebarProps={formSidebarProps}
          onClose={() => setOpenForm(false)}
          numberSearchParam={numberSearchParam}
          codeSearchParam={codeSearchParam}
          formProps={formProps}
          defaultValue={formProps?.defaultValue}
          queryKey={queryKey}
          number={numberSearchParam}
          findAll={queryFn}
          name={name}
          refetch={refetch}
        />
      </PaperModal>
      <div className="bg-[#fff] shadow p-2 container-full rounded-md mt-4 relative">

        {(isLoading || isFetching) &&
          <Loading />
        }
        <PaperHeader {...paperHeaderProps} />
        <PaperBar
          {...paperBarProps}
          openForm={openForm}
          setOpenForm={setOpenForm}
          onClickDelete={() => setOpenConfirmation(true)}
          setOpenViability={setOpenViability}
          records={data?.length}
          setGlobalFilter={setGlobalFilter}
      />
        <PaperFiltersAndSort filters={columnFilters} sorts={[]} setColumnFilters={setColumnFilters} />
        <div className='relative'>
          {isError &&
            <PaperError error={error} />
          }
          <CustomTable
            {...tableProps}
            name={name}
            data={!isLoading && data?.length ? data : []}
            setColumnFilters={setColumnFilters}
            columnFilters={columnFilters}
            pagination={pagination}
            setPagination={setPagination}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
            setOpenViability={setOpenViability}
            openViability={openViability}
            pageCount={pageCount}
          />
        </div>
      </div>
    </>
  )
}

export default PaperLayout
import { useEffect, useState } from 'react';
import PaperBar from './PaperBar';
import { useQuery } from '@tanstack/react-query';
import CustomTable from '../../tables/containers/CustomTable';
import { PaperHeader } from './PaperHeader';
import PaperModal from './PaperModal';
import PaperError from './PaperError';
import FormWrapper from '../../forms/wrapper/FormWrapper';
import Loading from '@/components/shared/Loading';
import ConfirmModal from '@/components/shared/ConfirmModal';
import PaperFiltersAndSort from './PaperFiltersAndSort';
import { useSearchParams } from 'react-router-dom';
import SEARCH_PARAMS from '@/data/searchParamsKeys';
import useCustomSearchParams from '@/hook/useCustomSearchParams';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  const numberSearchParam = useCustomSearchParams(SEARCH_PARAMS.NUMBER)
  const codeSearchParam = useCustomSearchParams(SEARCH_PARAMS.CODE)
  const [openViability, setOpenViability] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [rowSelection, setRowSelection] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });

  useEffect(() => {
    setOpenForm(numberSearchParam)
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
          pageSize: response?.pages
        }))
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
          />
        </div>
      </div>
    </>
  )
}

export default PaperLayout
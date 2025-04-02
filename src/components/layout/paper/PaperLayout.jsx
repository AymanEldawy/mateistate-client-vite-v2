import { useState } from 'react';
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
  formPaginationProps,
  handleDeleteSelected,
}) => {
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

  const { isLoading, isError, data, error, isFetching, refetch } = useQuery({
    queryKey: [
      name,
      columnFilters,
      pagination?.pageIndex,
      pagination?.pageSize,
    ],
    queryFn: () => {
      return []
    },
  });

  const onDeleteSelected = async () => {
    const response = handleDeleteSelected()
    if (response?.success)
      refetch()
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
          formPaginationProps={formPaginationProps}
          formProps={formProps}
          defaultValues={formProps?.defaultValues}
        />
      </PaperModal>
      <div className="bg-[#fff] shadow p-2 container-full rounded-md m-4 relative">
        {isError &&
          <PaperError error={error} />
        }
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
    </>
  )
}

export default PaperLayout
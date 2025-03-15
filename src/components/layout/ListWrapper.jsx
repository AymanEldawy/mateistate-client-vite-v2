import React, { useMemo, useState } from 'react'
import TableBar from '../tables/containers/TableBar'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './../../hook/useLocalStorage';

const ListWrapper = ({
  globalFilter,
  setGlobalFilter,
  onClickPrint,
  onClickDelete,
  onClickAdd,
  customAdd,
  name,
  remove,
  queryFn
}) => {

  const navigate = useNavigate();
  const params = useParams();
  const searchParams = useSearchParams();
  const number = searchParams.get('number')
  const code = params?.code
  const { getTable, setTable } = useLocalStorage({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [openForm, setOpenForm] = useState(!!number);
  const [rowSelection, setRowSelection] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });


  const { isError, error, isLoading, isFetching, data, refetch } = useQuery({
    queryKey: [
      name,
      columnFilters,
      pagination?.pageIndex,
      pagination?.pageSize,
    ],
    queryFn,
  });

  const columns = useMemo(() => {
    const localColumns = getTable(name);
    if (localColumns) return JSON.parse(localColumns);
    else return;
  }, [name]);

  const onDelete = async () => {
    await remove(name, Object.keys(rowSelection))
    refetch()
    return true
  }

  return (
    <>
      <Modal open={openForm} bodyClassName="!p-0 !overflow-hidden">
        <FormRender
          onClose={(link) => {
            setOpenForm(false);
            refetch();
            navigate(link || `/${name}`)
          }}
          setOpenForm={setOpenForm}
          number={number}
          code={code}
        />
      </Modal>
      <div className={"main-content m-4 flex-1 container-full pb-20"}>
        <div className="flex items-center gap-4 mb-4 justify-between bg-white shadow p-2 rounded-md">
          <TableBar
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            onClickPrint={onClickPrint}
            onClickDelete={onClickDelete}
            onClickAdd={onClickAdd}
            customAdd={customAdd}
          />
          {/* header */}
          {/* bar */}
          {/* table */}
          <CustomTable
            name={name}
            data={!isLoading && data?.length ? data : []}
            columns={columns}
            setColumnFilters={setColumnFilters}
            columnFilters={columnFilters}
            pagination={pagination}
            setPagination={setPagination}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
          />
          {/* pagination */}
        </div>
      </div>
    </>
  )
}

export default ListWrapper
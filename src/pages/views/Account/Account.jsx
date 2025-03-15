import React from 'react'
import ListWrapper from '../../../components/layout/ListWrapper'
import QUERY_KEYS from './../../../data/queryKeys';

const Account = () => {

  return <p>rds</p>
  return (
    <ListWrapper
      // globalFilter={globalFilter}
      // setGlobalFilter={setGlobalFilter}
      onClickPrint={true}
      onClickDelete={true}
      onClickAdd={true}
      header="Account"
      // queryKey={QUERY_KEYS.ANNOUNCEMENTS}
      tableProps={{

      }}
      formProps={{

      }}
    // customAdd={true}
    />
  )
}

export default Account
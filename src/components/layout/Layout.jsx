import sideMenuItems, { entryMenu } from '@/data/sideMenuItems'
import withLoggedOut from '@/HOC/withLoggedOut'
import { useMenuData } from '@/hook/useMenuData'
import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { DynamicPopupForm } from '../forms/wrapper'
import Footer from './Footer'
import Header from './header/Header'
import Menu from './header/Menu'
import Sidebar from './Sidebar'

const Layout = () => {
  const { data, refetch, isLoading } = useMenuData();

  const menu = useMemo(() => {
    return sideMenuItems.map((item) => {
      if (item.key === 'Accounting_Transactions' && data) {
        item.children = [...data, entryMenu]
      }
      return item;
    })
  }, [data, isLoading])

  return (
    <div id="layout-wrapper" className={"flex flex-col pb-12 min-h-screen"}>

      <Header />
      <Menu menu={isLoading ? [] : menu} />
      <Sidebar menu={isLoading ? [] : menu} />
      <Outlet />
      <DynamicPopupForm />
      <Footer />
    </div>
  )
}

export default withLoggedOut(Layout)
import { Outlet } from 'react-router-dom'
import Menu from './header/Menu'
import Header from './header/Header'
import Footer from './Footer'
import sideMenuItems from '@/data/sideMenuItems'
import Sidebar from './Sidebar'
import withLoggedOut from '@/HOC/withLoggedOut'
import { useMenuData } from '@/hook/useMenuData'
import { useMemo } from 'react'

const Layout = () => {
  const { data, refetch, isLoading } = useMenuData();
  
  const menu = useMemo(() => {
    return sideMenuItems.map((item) => {
      if (item.key === 'Accounting_Transactions') {
        item.children = data;
      }
      return item;
    })
  }, [data, isLoading])
  console.log(menu, 'data', isLoading);

  return (
    <div id="layout-wrapper" className={"flex flex-col pb-12 min-h-screen"}>
      <Header />
      <Menu menu={isLoading ? [] : menu} />
      <Sidebar menu={isLoading ? [] : menu} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default withLoggedOut(Layout)
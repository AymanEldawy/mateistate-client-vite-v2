import { Outlet } from 'react-router-dom'
import Menu from './header/Menu'
import Header from './header/Header'
import Footer from './Footer'
import sideMenuItems from '@/data/sideMenuItems'
import Sidebar from './Sidebar'
import withLoggedOut from '@/HOC/withLoggedOut'
import { useMenuData } from '@/hook/useMenuData'

const Layout = () => {
  // const menu = useMenuData()
 
  return (
    <div id="layout-wrapper" className={"flex flex-col pb-12 min-h-screen"}>
      <Header />
      <Menu menu={sideMenuItems} />
      <Sidebar menu={sideMenuItems} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default withLoggedOut(Layout)
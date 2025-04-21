import { Outlet } from 'react-router-dom'
import Menu from './header/Menu'
import Header from './header/Header'
import Footer from './Footer'
import sideMenuItems from '@/data/sideMenuItems'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import withLoggedIn from '@/HOC/withLoggedIn'
import withLoggedOut from '@/HOC/withLoggedOut'

const Layout = () => {
  // useEffect(() => {
  //   const getMen = async () => {
  //     const menu = await getMenu();
  //     setMenu(menu);
  //   };
  //   getMen();
  // }, []);


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
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './menu/Menu'
import Header from './menu/Header'
import Footer from './menu/Footer'
import sideMenuItems from '@/data/sideMenuItems'

const Layout = () => {
  return (
    <div id="layout-wrapper" className={"flex flex-col h-screen"}>
      <Header setOpen={setOpen} mode={mode} setMode={setMode} />
      <Menu menu={sideMenuItems} />
      {/* <Backdrop open={open} onClose={() => setOpen(false)} /> */}
      {/* <Sidebar menu={menu} setOpen={setOpen} open={open} /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
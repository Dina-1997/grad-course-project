import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <header>
        Main Layout Header
    </header>
      <Outlet/>
      <footer>
        Main Layout Footer
      </footer>
    </>
  )
}

export default MainLayout

import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../Header/Header'
import { Sidebar } from '../../Sidebar/Sidebar'

import { LayoutContainer, LayoutContent } from './DefaultLayout.styles'

export function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  function onShowSidebar() {
    setIsSidebarOpen((state) => !state)
  }

  return (
    <>
      <LayoutContainer>
        <Header />

        <LayoutContent isSidebarOpen={isSidebarOpen}>
          <Sidebar onShowSidebar={onShowSidebar} showSidebar={isSidebarOpen} />
          <Outlet />
        </LayoutContent>
      </LayoutContainer>
    </>
  )
}

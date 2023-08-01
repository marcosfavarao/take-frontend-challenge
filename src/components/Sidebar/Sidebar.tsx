import { Link } from 'react-router-dom'

import { sidebarData } from './data'

import iconLeftArrow from '../../common/assets/svgs/icon-menu-lArrow.svg'
import iconRigthArrow from '../../common/assets/svgs/icon-menu-rArrow.svg'

import {
  SidebarContainer,
  SidebarNavigation,
  PathLink,
  MenuButton,
} from './Sidebar.styles'

interface SidebarProps {
  showSidebar: boolean
  onShowSidebar: () => void
}

export function Sidebar({ showSidebar, onShowSidebar }: SidebarProps) {
  function handleShowSidebar() {
    onShowSidebar()
  }

  const selectedPage = '/vehicles'
  const isSidebarOpen = showSidebar
  const changeSidebarArrow = !isSidebarOpen ? iconRigthArrow : iconLeftArrow
  const changeSidebarTitle = !isSidebarOpen ? 'Expandir Menu' : 'Fechar menu'
  return (
    <>
      <SidebarContainer showSidebar={isSidebarOpen}>
        <SidebarNavigation showSidebar={isSidebarOpen}>
          <ul>
            {sidebarData.map((data) => {
              return (
                <Link key={data.title} to={data.enable ? selectedPage : '/'}>
                  <PathLink
                    isPageEnable={data.enable}
                    selectedPage={selectedPage === data.path}
                  >
                    <img src={data.icon} alt="" />
                    {isSidebarOpen && <span>{data.title}</span>}
                  </PathLink>
                </Link>
              )
            })}
          </ul>
        </SidebarNavigation>

        <MenuButton type="button" onClick={handleShowSidebar}>
          <img src={changeSidebarArrow} alt="" title={changeSidebarTitle} />
        </MenuButton>
      </SidebarContainer>
    </>
  )
}

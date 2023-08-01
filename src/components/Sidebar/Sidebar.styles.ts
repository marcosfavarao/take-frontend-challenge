import { styled, css } from 'styled-components'

interface SidebarContainerProps {
  showSidebar: boolean
}

interface SidebarNavigationProps {
  showSidebar: boolean
}

interface PathLinkProps {
  isPageEnable: boolean
  selectedPage: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background-color: ${(props) => props.theme.white};
  width: ${(props) => (props.showSidebar ? 17.5 : 5.5)}rem;
  /* height: calc(100% - 4rem); */
  padding: 2rem 1.5rem;
  border: 1px solid transparent;
  border-right-color: ${(props) => props.theme['gray-300']};

  display: flex;
  align-items: ${(props) => (props.showSidebar ? 'flex-end' : 'center')};
  justify-content: space-between;
  flex-direction: column;
  /* transition: all 250ms linear; */
`

export const SidebarNavigation = styled.nav<SidebarNavigationProps>`
  width: 100%;
  ${(props) =>
    !props.showSidebar &&
    css`
      display: flex;
      justify-content: center;
    `}

  ul {
    list-style-type: none;

    li + li {
      margin-top: 1rem;
    }
  }
`

export const PathLink = styled.li<PathLinkProps>`
  background-color: ${(props) => props.selectedPage && props.theme['blue-500']};
  color: ${(props) => props.selectedPage && props.theme.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms;

  opacity: ${(props) => (!props.isPageEnable ? 0.4 : 1)};
  cursor: ${(props) => (!props.isPageEnable ? 'default' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.isPageEnable && props.theme['blue-500']};
    color: ${(props) => props.isPageEnable && props.theme.white};
  }
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  line-height: 0;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
  }
`

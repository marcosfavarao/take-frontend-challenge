import { styled } from 'styled-components'

interface LayoutContentProps {
  isSidebarOpen: boolean
}

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 2.5rem);
  margin: 1.25rem auto;
`

export const LayoutContent = styled.main<LayoutContentProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => (props.isSidebarOpen ? 17.5 : 5.5)}rem 1fr;
  justify-content: flex-start;
  gap: 1rem;
`

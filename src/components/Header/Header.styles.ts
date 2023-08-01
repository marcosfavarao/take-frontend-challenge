import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  filter: drop-shadow(0 2px 4px ${(props) => props.theme['gray-300']});
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`

export const HeaderActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: all 250ms linear;
    position: relative;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['blue-700']};
    }

    &:last-child {
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['blue-500']};
      }
    }
  }
`

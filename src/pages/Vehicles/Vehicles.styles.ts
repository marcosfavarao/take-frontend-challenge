import { styled } from 'styled-components'

export const VehiclesContainer = styled.section`
  width: 100%;
  padding: 1rem;
`

export const VehiclesHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }
`

export const Searchbar = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 0 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    outline: 2px solid ${(props) => props.theme['blue-500']};
  }

  input {
    width: 100%;
    padding: 0.5rem 0.25rem;
    border: 0;
    outline: 0;
  }
`

const BaseButton = styled.button`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6;
  cursor: pointer;
  transition: filter 250ms;
  &:hover {
    filter: brightness(0.9);
  }
`

export const FilterButton = styled(BaseButton)`
  color: ${(props) => props.theme['blue-500']};
  border-color: ${(props) => props.theme['blue-100']};
`

export const AddButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  border-color: ${(props) => props.theme['blue-500']};
`

export const VehiclesTable = styled.div`
  /* padding: 1rem; */
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;
`
export const CustomTableRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  z-index: -1;

  img {
    width: 6rem;
    outline: 2px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    filter: drop-shadow(0 0 2px ${(props) => props.theme['gray-300']});

    &:hover {
      scale: 1.1;
      outline-color: ${(props) => props.theme['blue-500']};
      transition: scale 250ms;
    }
  }
`

export const CustomTableRowInfo = styled.div`
  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.4;
    text-transform: uppercase;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    small {
      color: ${(props) => props.theme['gray-400']};
      font-size: 0.45rem;
      line-height: 1.6;
    }

    span {
      color: ${(props) => props.theme['blue-500']};
      font-weight: 700;
    }
  }
`

export const DataFallback = styled.div`
  height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
`

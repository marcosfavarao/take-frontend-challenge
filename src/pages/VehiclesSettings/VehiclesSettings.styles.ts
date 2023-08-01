import { styled } from 'styled-components'

export const VehiclesSettingsContainer = styled.section`
  width: 100%;
  padding: 1rem;
`

export const VehiclesSettingsHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  img {
    cursor: pointer;
  }
`

export const VehiclesSettingsContentGrid = styled.main`
  margin-top: 1rem;
`

const DisplayBase = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;

  h2 {
    padding: 1rem;
    border: 1px solid transparent;
    border-bottom-color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
  }

  section {
    padding: 1rem 2rem;
  }
`

export const VehiclesSettingsInfo = styled(DisplayBase)`
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    border: 1px solid transparent;
    border-bottom-color: ${(props) => props.theme['gray-300']};

    button {
      background-color: transparent;
      color: ${(props) => props.theme['blue-500']};
      border: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid ${(props) => props.theme['blue-500']};
      padding: 0.875rem 0;

      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      cursor: pointer;

      &:disabled {
        color: ${(props) => props.theme['gray-400']};
        border-bottom: 4px solid transparent;
        cursor: not-allowed;
      }
    }
  }
`

export const VehicleInfo = styled.form`
  h3 {
    color: ${(props) => props.theme['blue-500']};
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .vehicle-properties {
    margin-top: 1.5rem;
  }

  .vehicle-category {
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      width: 3rem;
      padding: 0.5rem;
      border: 0;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 250ms;

      &:hover {
        background-color: ${(props) => props.theme['blue-500']};
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const AlignFormFields = styled.ul`
  li {
    width: 100%;
    margin: 1.5rem auto;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

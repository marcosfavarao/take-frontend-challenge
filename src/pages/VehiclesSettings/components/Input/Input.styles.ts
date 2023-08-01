import { styled } from 'styled-components'

interface InputContainerProps {
  inputWidth: number | string
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;

  label {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-400']};
    position: absolute;
    top: -0.6rem;
    left: 0.75rem;
    font-size: 0.75rem;
    line-height: 1.4;
    padding: 0 0.25rem;
  }

  input {
    width: ${(props) => props.inputWidth || 16}rem;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 6px;
  }
`

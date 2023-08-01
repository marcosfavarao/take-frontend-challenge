import { InputContainer } from './Input.styles'

interface InputProps {
  inputLabel: string
  inputWidth?: string
}

export function Input({ inputLabel = '', inputWidth = '' }: InputProps) {
  return (
    <>
      <InputContainer inputWidth={inputWidth}>
        <label htmlFor={inputLabel}>{inputLabel}</label>
        <input type="text" id={inputLabel} />
      </InputContainer>
    </>
  )
}

import { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Container } from './styles'
import { ReactElement } from 'react'
import masks from '../../../utils/masks'

type MasksTypes =
  | 'cep'
  | 'cnpj'
  | 'cpf'
  | 'phone'
  | 'date'
  | 'time'
  | 'card'
  | 'monetary'
  | 'number'
  | 'monetaryDollar'
  | 'monetaryEuro'
  | 'double'
  | 'porcentagem'
  | 'def'

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  password?: boolean
  forgetPassword?: boolean
  error?: boolean
  textError?: string
  icon?: ReactElement
  flex?: number
  mask?: MasksTypes
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Input> = (
  {
    label,
    password,
    icon,
    error,
    textError = '',
    flex = 1,
    mask = 'def',
    ...rest
  }: Input,
  ref
) => {
  const [isInputVisible, setIsInputVisible] = useState(true)

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value = masks[mask!](event.currentTarget.value)
  }

  return (
    <Container flex={flex} error={error}>
      {label ? (
        <section className="labelContent">
          <label>{label}</label>

          {error && textError && <span>{textError}</span>}
        </section>
      ) : null}

      <div className={`inputContainer ${rest.disabled && 'disabled'}`}>
        {!!icon && icon}
        {/* {inverse && <div className="bar" />} */}
        <input
          type={password && isInputVisible ? 'password' : 'text'}
          ref={ref}
          onKeyUp={(event) => handleOnChange(event)}
          {...(!!rest.defaultValue && {
            defaultValue: masks[mask!](rest.defaultValue)
          })}
          {...rest}
        />
        {/* {!!icon && icon} */}
        {password &&
          (isInputVisible ? (
            <AiOutlineEye
              onClick={() => setIsInputVisible(false)}
              size={24}
              color="var(--black-800)"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setIsInputVisible(true)}
              size={24}
              color="var(--black-800)"
            />
          ))}
      </div>
    </Container>
  )
}

export const Input = forwardRef(InputBase)

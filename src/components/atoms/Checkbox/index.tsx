import { Container } from './styles'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

interface CheckboxProps {
  confirm: boolean
  toggleConfirm: () => void
  label?: string
  termsUse?: boolean
  recovery?: boolean
  size?: 'small' | 'medium'
  disabled?: boolean
}

export const Checkbox = ({
  confirm,
  toggleConfirm,
  label,
  recovery = false,
  termsUse,
  size = 'medium',
  disabled
}: CheckboxProps) => {
  const id = String(Math.random())

  return (
    <Container size={size}>
      <div className={`check ${disabled && 'disabled'}`}>
        <button
          type="button"
          id={id}
          className="btn"
          onClick={toggleConfirm}
          disabled={disabled}
        >
          {confirm && <FaCheck color="var(--gray-800)" />}
        </button>
        {label && <label htmlFor={id}>{label}</label>}
      </div>

      {recovery && (
        <Link href="/recover">
          <a>Esqueceu sua senha?</a>
        </Link>
      )}

      {termsUse && (
        <label htmlFor="rules" className="rules">
          Li e concordo com os{' '}
          <span>Termos de uso e Política de privacidade. </span>{' '}
        </label>
      )}
    </Container>
  )
}

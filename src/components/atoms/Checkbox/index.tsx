import { Container } from './styles'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

interface CheckboxProps {
  confirm: boolean
  toggleConfirm: () => void
  label?: string
  termsUse?: boolean
  recovery?: boolean
}

export const Checkbox = ({
  confirm,
  toggleConfirm,
  label,
  recovery = false,
  termsUse
}: CheckboxProps) => {
  return (
    <Container confirm={confirm}>
      <div className="check">
        <button
          type="button"
          id="btn"
          className="btn"
          onClick={() => toggleConfirm()}
        >
          {confirm && <FaCheck color="var(--gray-800)" />}
        </button>
        {label && <label htmlFor="btn">{label}</label>}
      </div>

      {recovery && (
        <Link href="/recover">
          <a>Esqueceu sua senha</a>
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

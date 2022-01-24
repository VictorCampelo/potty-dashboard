import { Container } from './styles'
import PuffLoader from 'react-spinners/PuffLoader'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  border?: boolean
  isLoading?: boolean
  noPadding?: boolean
}

export function Button({
  title,
  border,
  isLoading = false,
  noPadding,
  ...rest
}: ButtonProps) {
  return (
    <Container border={border} noPadding={noPadding} {...rest}>
      {isLoading ? <PuffLoader size={28} color="#fff" /> : title}
    </Container>
  )
}

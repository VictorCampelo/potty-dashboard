import { Container } from "./styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  border?: boolean;
}

export function Button({ title, border, ...rest}: ButtonProps) {
  return (
    <Container border={border} {...rest}>
      {title}
    </Container>
  )
}
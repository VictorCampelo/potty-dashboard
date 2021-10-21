import { Container } from "./styles";
import PuffLoader from "react-spinners/PuffLoader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  border?: boolean;
  isLoading?: boolean;
}

export function Button({ title, border, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container border={border} {...rest}>
      {isLoading ? <PuffLoader size={28} color="#fff" /> : title}
    </Container>
  );
}

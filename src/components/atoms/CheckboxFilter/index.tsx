import { Container } from "./styles";
import { FaCheck } from 'react-icons/fa';
import { ReactNode } from "react";

interface CheckboxFilterProps {
  confirm: boolean;
  toggleConfirm: () => void;
  children?: ReactNode;
}

export const CheckboxFilter = ({ confirm, toggleConfirm, children }: CheckboxFilterProps) => {
  return (
    <Container 
      confirm={confirm}
    > 
      <div className="check">
        <button 
          type="button"
          id="btn" 
          className="btn" 
          onClick={() => toggleConfirm()} 
        >
          { confirm && <FaCheck  color="var(--gray-800)" />}
        </button>
        {children}
      </div>
    </Container>
  )
}
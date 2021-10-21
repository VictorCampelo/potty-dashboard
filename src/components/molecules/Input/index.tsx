import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Container } from './styles';
import { ReactElement } from 'react';

interface Input extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
  password?: boolean;
  forgetPassword?: boolean;
  error?: boolean;
  textError?: string;
  icon?: ReactElement;
  flex?: number;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Input> = ({ 
  label, 
  password, 
  icon, 
  error,
  textError = '',
  flex = 1,
  ...rest 
}: Input, ref) => {
  const [isInputVisible, setIsInputVisible] = useState(true);

  return (
    <Container flex={flex} error={error} >
      <section className="labelContent">
        <label> 
          {label} 
        </label>

        {error && textError && <span>{textError}</span> }
      </section>
      
      <div className="inputContainter">

        { !!icon && icon }

        <input 
          type={ password && isInputVisible ? "password" : "text" }
          ref={ref}
          {...rest} 
        />

        { password && (
          isInputVisible ? (
          <AiOutlineEyeInvisible 
            onClick={() => setIsInputVisible(false)} 
            size={24} 
            color="var(--black-800)" 
          />
          ) : (
          <AiOutlineEye 
            onClick={() => setIsInputVisible(true)} 
            size={24} 
            color="var(--black-800)" 
          />
          )  
        )}
      </div>
    </Container>
  )
}

export const Input = forwardRef(InputBase);
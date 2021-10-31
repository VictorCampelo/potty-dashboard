import { Container } from './styles';
import { ReactElement } from 'react';

interface TextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label: string;
  error?: boolean;
  textError?: string;
  icon?: ReactElement;
  flex?: number;
}

export const TextArea = ({ 
  label, 
  icon, 
  error,
  textError = '',
  flex = 1,
  ...rest 
}: TextArea) => {

  return (
    <Container flex={flex} error={error} >
      <section className="labelContent">
        <label> 
          {label} 
        </label>

        {error && textError && <span>{textError}</span> }
      </section>
      
      <label className="inputContainter">

        { !!icon && icon }

        <textarea placeholder={rest.placeholder} {...rest} />

      </label>
    </Container>
  )
}

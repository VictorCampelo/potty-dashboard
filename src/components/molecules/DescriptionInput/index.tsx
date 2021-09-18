import { Container } from './styles';

interface DescriptionInput extends React.InputHTMLAttributes<HTMLTextAreaElement>{
  label: string;
  placeholder: string;
  error?: boolean;
  textError?: string;
  flex?: number;
}

export const DescriptionInput = ({ 
  label, 
  placeholder,
  error,
  textError = '',
  flex = 1,
  ...rest 
}: DescriptionInput) => {
  return (
    <Container flex={flex} error={error} >
      <section className="labelContent">
        <label> 
          {label} 
        </label>

        {error && textError && <span>{textError}</span> }
      </section>
      
      <label className="inputContainter">
        <textarea className="textArea" maxLength={500} placeholder={placeholder}
        {...rest}
        ></textarea>
      </label>
    </Container>
  )
}
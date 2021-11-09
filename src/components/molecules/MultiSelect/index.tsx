import Select, { OptionTypeBase, ValueType } from 'react-select';

import { Container, SelectStylesMulti } from './styles';

interface SelectInterface extends React.InputHTMLAttributes<HTMLSelectElement>{
  placeholder: string;
  name: string;
  selectedValue: string[];
  loading: boolean;
  setSelectedValue: (item) => void;
  options: Array<{
    value: string;
    label: string;
  }>
  colorTheme?: string;
}

export const MultiSelect = ({ 
  placeholder,
  options,
  selectedValue,
  setSelectedValue,
  loading,
  name,
  colorTheme
}: SelectInterface) => {
  const handleChange = (value: ValueType<OptionTypeBase, true>, event) => {
    setSelectedValue(value);
  };

  return (
    <Container>
      <label> {name} </label>

      <Select
        placeholderButtonLabel={placeholder}
        value={selectedValue}
        onChange={(values, event) => handleChange(values, event)}
        options={options}
        placeholder={placeholder}
        styles={SelectStylesMulti}
        theme={(theme) => {
          switch (colorTheme){
            case 'red': 
              return {
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#E66072',
                  primary75: '#80363F',
                  primary50: '#BF505F',
                  primary25: '#FF6A7D',
                  primary10: '#FF6A7D',
                }
              }
            case 'green':
              return {
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#41AB8F',
                  primary75: '#59EBC5',
                  primary50: '#4FD1AF',
                  primary25: '#9EE0DC',
                }
              }
            default:
              return {
                ...theme
              }
          }
        }}
        isLoading={loading}
        closeMenuOnSelect={false}
        isMulti
      />
    </Container>
  )
}

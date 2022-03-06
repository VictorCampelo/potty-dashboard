import Select from 'react-select'

import { Container, SelectStylesMulti } from './styles'

interface SelectInterface {
  placeholder: string
  style?: any
  name: string
  selectedValue: {
    value: string
    label: string
  } | null
  loading: boolean
  setSelectedValue: (item) => void
  options: Array<{
    value: string
    label: string
  }>
  colorTheme?: string
}

export const MultiSelect = ({
  placeholder,
  options,
  selectedValue,
  setSelectedValue,
  loading,
  name,
  colorTheme = 'orange',
  ...rest
}: SelectInterface) => {
  return (
    <Container {...rest}>
      <label> {name} </label>

      <Select
        placeholderButtonLabel={placeholder}
        value={selectedValue}
        onChange={(values) => setSelectedValue(values)}
        options={options}
        placeholder={placeholder}
        styles={SelectStylesMulti}
        theme={(theme) => {
          switch (colorTheme) {
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
                  primary10: '#FF6A7D'
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
                  primary25: '#9EE0DC'
                }
              }
            case 'orange':
              return {
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#ff7a00',
                  primary75: '#dd6f08',
                  primary50: '#C4C4C4',
                  primary25: '#f4f4f4'
                }
              }
            default:
              return {
                ...theme
              }
          }
        }}
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? 'Nenhuma opção' : 'Nenhum resultado encontrado'
        }
        isLoading={loading}
      />
    </Container>
  )
}

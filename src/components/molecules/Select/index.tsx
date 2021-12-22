import Select, { OptionTypeBase, ValueType } from 'react-select'

import { Container, SelectStylesMulti } from './styles'

interface SelectInterface {
  placeholder: string
  style?: any
  name: string
  selectedValue: {
    value: string
    label: string
  }
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
  colorTheme,
  ...rest
}: SelectInterface) => {
  const handleChange = (value: ValueType<OptionTypeBase, false>, event) => {
    setSelectedValue(value)
  }

  return (
    <Container {...rest}>
      <label> {name} </label>

      <Select
        placeholderButtonLabel={placeholder}
        value={selectedValue}
        onChange={(values, event) => handleChange(values, event)}
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
            default:
              return {
                ...theme
              }
          }
        }}
        isLoading={loading}
      />
    </Container>
  )
}

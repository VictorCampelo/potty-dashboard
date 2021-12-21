import styled from 'styled-components'
import { StylesConfig } from 'react-select'

type MyOptionType = {
  label: string
  value: string
}

export const Container = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  border: none;
  z-index: 123123;

  label {
    margin-bottom: 0.5rem;
  }

  .css-fwy4cj-control {
    width: 100%;
  }
`

export const SelectStyles: StylesConfig<MyOptionType, false> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'var(--gray-100)',
    border: 'none',
    height: '2rem',
    borderRadius: 11,
    zIndex: 123123
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: 'transparent'
  }),
  option: (styles) => ({ ...styles, textAlign: 'left' }),
  menu: (styles) => ({
    ...styles,
    borderRadius: 11,
    overflow: 'hidden',
    width: '100%'
  })
}

export const SelectStylesMulti: StylesConfig<MyOptionType, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: '1px solid black',
    minHeight: '2rem',
    borderRadius: 8
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: 'transparent'
  }),
  option: (styles) => ({ ...styles, textAlign: 'left' }),
  menu: (styles) => ({
    ...styles,
    borderRadius: 11,
    overflow: 'hidden',
    width: '100%'
  })
}

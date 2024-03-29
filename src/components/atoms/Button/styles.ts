import styled from 'styled-components'

interface ContainerProp {
  border: boolean
  noPadding: boolean
}

export const Container = styled.button<ContainerProp>`
  height: 3.375rem;
  width: 100%;
  min-width: max-content;
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  ${(props) => props.noPadding && 'padding: 0;'}
  color: var(--white);
  font-weight: 700;
  font-size: 1.125rem;
  background-color: var(--color-primary);
  transition: 0.2s background;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ${(props) => props.border && 'border: 2px solid var(--color-primary);'}
  ${(props) => props.border && 'color: var(--color-primary);'}
  ${(props) => props.border && 'font-weight: normal;'}
  ${(props) => props.border && 'background-color: var(--white);'}

  :hover {
    background-color: var(--color-primary-darker);
    ${(props) => props.border && 'background-color: #eeeeee;'}
  }

  :disabled {
    background-color: var(--gray-300);
    cursor: not-allowed;
  }
`

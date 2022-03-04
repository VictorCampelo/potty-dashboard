import styled from 'styled-components'

interface ContainerProps {
  size: 'small' | 'medium'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  .rules {
    span {
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }

  .btn {
    ${(props) => props.size === 'small' && 'width: 16px;height: 16px;'}
    ${(props) => props.size === 'medium' && 'width: 20px;height: 20px;'}

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border: 1px solid black;
    background: var(--white);

    margin-right: 10px;
    padding: 4px;
  }

  .check {
    display: flex;
    align-items: center;

    label {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  a {
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: underline;
  }
`

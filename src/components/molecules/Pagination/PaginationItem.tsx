import styled from 'styled-components'

interface PaginationItem {
  page: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  page,
  isCurrent = false,
  onPageChange
}: PaginationItem) {
  return (
    <Button onClick={() => onPageChange(page)} isCurrent={isCurrent}>
      {page}
    </Button>
  )
}

interface ButtonProp {
  isCurrent: boolean
}

const Button = styled.button<ButtonProp>`
  border: 0;
  background: transparent;
  transition: background 0.2s;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  color: ${(props) => (!props.isCurrent ? 'var(--gray-700)' : 'white')};
  margin-left: 8px;
  background: ${(props) =>
    !props.isCurrent ? 'transparent' : 'var(--color-secondary)'};

  :hover {
    background: ${(props) =>
      !props.isCurrent
        ? 'var(--color-primary)'
        : 'var(--color-secondary-darker)'};
  }
`

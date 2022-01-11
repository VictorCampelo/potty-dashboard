import styled from 'styled-components'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 4

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, idx) => {
      return from + idx + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
  registersPerPage
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Container>
      <Content>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem page={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                page={page}
                key={page}
                onPageChange={onPageChange}
              />
            )
          })}

        <PaginationItem
          page={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                page={page}
                key={page}
                onPageChange={onPageChange}
              />
            )
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + siblingsCount + 1 < lastPage && <span>...</span>}
            <PaginationItem page={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  display: flex;

  span {
    color: var(--gray-300);
    text-align: center;
    width: 32px;
  }
`

import { Container } from './styles'
import { ReactElement } from 'react'
import { IoIosClose } from 'react-icons/io'

interface CategoryCard extends React.AllHTMLAttributes<HTMLDivElement> {
  label: string
  // icon: ReactElement;
}

export const CategoryCard = ({
  label
}: // icon
CategoryCard) => {
  return (
    <Container>
      <div className="card-container">
        {/* <div className="icon">{icon}</div> */}
        <div className="label">{label}</div>
        <div className="close-btn">
          <div className="wrap"></div>
          <IoIosClose size={30} color={'#363F4E'} />
        </div>
      </div>
    </Container>
  )
}

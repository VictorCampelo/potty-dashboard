import { IoIosArrowDown} from 'react-icons/io'
import { IoTrashBinOutline } from 'react-icons/io5'
import { RiPencilFill } from 'react-icons/ri'
import { Container } from './styles'
import EllipsisText from "react-ellipsis-text";
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

interface CategoryListCardProps extends React.AllHTMLAttributes<HTMLAllCollection> {
  category: string;
  excludeBtn: any;
  editBtn: any;
  isRed?: boolean;
  isGreen?: boolean;
  date: Array<{
    name: string;
    amount: string;
  }>
}

export const CategoryListCard = ({
  category,
  excludeBtn,
  editBtn,
  isRed,
  isGreen,
  date,
}: CategoryListCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function handletoggle() {
    setIsOpen(!isOpen)
  }
  return (
    <Container isRed={isRed} isGreen={isGreen} isOpen={isOpen}>
      <div className="section">
        <div className="card-container" onClick={handletoggle}>
          <IoIosArrowDown size={20} className="icon-btn" color="#363F4E" />
          <h1 className="title">{category}</h1>
        </div>
        <Fade top cascade collapse delay={15} duration={400} when={isOpen}>
          <div className="children-container">
            {date.map((data) => {
              return (
                <p className="items"><EllipsisText text={data.name} length={25} /><span className="spacer"/>{data.amount} un.</p>
              )
            })}
          </div>
        </Fade>
      </div>
      <div className="edit-btn">
          <button onClick={editBtn} className="edit-btn">
            <RiPencilFill size={20} />
            Editar
          </button>
        </div>
      <div className="exclude-btn">
          <button onClick={excludeBtn} className="close-btn">
            <IoTrashBinOutline size={20} />
            Excluir
          </button>
        </div>   
    </Container>
  )
}
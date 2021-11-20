import { Container } from './styles'
import { IoTrashBinOutline } from 'react-icons/io5'
import { RiPencilFill, RiCamera2Fill } from 'react-icons/ri'
import { ellipsis } from 'functions/ellipsis'

interface ProductListCard extends React.AllHTMLAttributes<HTMLAllCollection> {
  icon: string
  name: string
  code: string
  category: string
  amount: number
  price: number
  excludeBtn: any
  editBtn: any
  isRed?: boolean
  isGreen?: boolean
}

export const ProductListCard = ({
  icon,
  name,
  code,
  category,
  amount,
  price,
  excludeBtn,
  editBtn,
  isRed,
  isGreen
}: ProductListCard) => {
  return (
    <Container isRed={isRed} isGreen={isGreen}>
      <div className="card-container">
        <div className="color">
          <div className="icon">
            {icon ? (
              <img src={icon} alt="Preview" />
            ) : (
              <RiCamera2Fill size={26} color="var(--gray-600)" />
            )}
          </div>

          <div className="desc-container">
            <tr>
              <td className="title">Nome</td>
              <td className="title">Código</td>
              <td className="title">Categoria</td>
              <td className="title">Quantidade</td>
              <td className="title">Preço</td>
            </tr>
            <tr>
              <td className="children">{ellipsis(name, 10)}</td>
              <td className="children">{ellipsis(code, 10)}</td>
              <td className="children">{ellipsis(category, 10)}</td>
              <td className="children">{ellipsis(String(amount), 10)}</td>
              <td className="children">
                <span>R$ </span>
                {ellipsis(String(price), 10)}
              </td>
            </tr>
          </div>
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
      </div>
    </Container>
  )
}

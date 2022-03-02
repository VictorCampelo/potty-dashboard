import { Container, ContainerButtons } from './styles'
import { IoTrashBinOutline } from 'react-icons/io5'
import { RiPencilFill, RiCamera2Fill } from 'react-icons/ri'
import { BsThreeDotsVertical } from 'react-icons/bs'
import formatToBrl from 'utils/formatToBrl'
import { ellipsis } from 'functions/ellipsis'
import Popup from 'reactjs-popup'

interface IProductListCard extends React.AllHTMLAttributes<HTMLAllCollection> {
  icon: string
  name: string
  code: string
  category: any
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
}: IProductListCard) => {
  return (
    <Container isRed={isRed} isGreen={isGreen}>
      <div className="card-container">
        <div className="color">
          <div className="icon">
            {icon ? (
              <img
                src={icon}
                alt="Preview"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            ) : (
              <RiCamera2Fill size={26} color="var(--gray-600)" />
            )}
          </div>

          <div className="desc-container-mobile">
            <div className="first-line" style={{ width: '300px' }}>
              <div className="key-value" style={{ width: '170px' }}>
                <span className="key">Nome</span>
                <span className="value">{name}</span>
              </div>
              <Popup
                trigger={
                  <button style={{ background: 'transparent' }}>
                    <BsThreeDotsVertical size={26} />
                  </button>
                }
                position="right center"
                on="click"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <button
                    onClick={editBtn}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#e7e8ea',
                      borderRadius: '999px',
                      border: 'none',
                      padding: '8px'
                    }}
                  >
                    <RiPencilFill size={20} />
                  </button>
                  <button
                    onClick={excludeBtn}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#e7e8ea',
                      borderRadius: '999px',
                      border: 'none',
                      padding: '8px',
                      marginLeft: '10px'
                    }}
                  >
                    <IoTrashBinOutline size={20} />
                  </button>
                </div>
              </Popup>
            </div>

            <div className="second-line">
              <div className="key-value">
                <span className="key">Preço</span>
                <span className="value">{formatToBrl(price)}</span>
              </div>
              <div className="key-value">
                <span className="key">Quantidade</span>
                <span
                  className="value"
                  style={{ margin: amount ? 'auto' : '0' }}
                >
                  {amount || 'Ilimitada'}
                </span>
              </div>
              <div className="key-value">
                <span className="key">Categoria</span>
                <span className="value">{category}</span>
              </div>
              <div className="key-value">
                <span className="key">Código</span>
                <span className="value">{ellipsis(code, 8)}</span>
              </div>
            </div>
          </div>

          <div className="desc-container">
            <tr>
              <td className="title">Nome</td>
              <td className="title">Preço</td>
              <td className="title">Quantidade</td>
              <td className="title">Categoria</td>
              <td className="title">Código</td>
            </tr>
            <tr>
              <td className="children">{ellipsis(name, 10)}</td>
              <td className="children">{formatToBrl(price)}</td>
              <td className="children">{ellipsis(String(amount), 10)}</td>
              <td className="children">{ellipsis(category.join(''), 10)}</td>
              <td className="children">{ellipsis(code, 8)}</td>
            </tr>
          </div>
        </div>
      </div>
      <ContainerButtons>
        <button onClick={editBtn} className="edit-btn">
          <RiPencilFill size={20} />
        </button>
        <button onClick={excludeBtn} className="close-btn">
          <IoTrashBinOutline size={20} />
        </button>
      </ContainerButtons>
    </Container>
  )
}

import { Container } from "./styles";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import EllipsisText from "react-ellipsis-text";

interface ProductListCard extends React.AllHTMLAttributes<HTMLAllCollection> {
  icon: string;
  name: string;
  code: string;
  category: string;
  amount: number;
  price: number;
  excludeBtn: any;
  editBtn: any;
  isRed?: boolean;
  isGreen?: boolean;
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
  isGreen,
}: ProductListCard) => {
  return (
    <Container isRed={isRed} isGreen={isGreen}>
      <div className="card-container">
        <div className="color">
          <div className="icon">
            <img src={icon} alt="Preview" />
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
              <td className="children">
                <EllipsisText text={String(name)} length={10} />
              </td>
              <td className="children">
                <EllipsisText text={String(code)} length={10} />
              </td>
              <td className="children">
                <EllipsisText text={String(category)} length={10} />
              </td>
              <td className="children">
                <EllipsisText text={String(amount)} length={10} />
              </td>
              <td className="children">
                <EllipsisText text={"R$" + String(price)} length={10} />
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
  );
};

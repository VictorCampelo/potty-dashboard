import { Container } from './styles'; 

import { RiPencilFill } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

interface DescriptionCard extends React.InputHTMLAttributes<HTMLInputElement>{
    title?: string;
    quantStar?: number;
    description?: string;
    imgSrc?: string;
  }

const  DescriptionCard = ({
    title,
    quantStar,
    description,
    imgSrc,
    ...rest 
}: DescriptionCard) => {
    let stars = [] //Criando um vetor de estrelas

    quantStar > 5 ? quantStar = 5 : null; //Tratativas para manter o máximo de estrelas como 5

    for (let i = 0; i < quantStar; i++) {
        stars.push(<AiFillStar size={18}  color="#ffe249"/>)
    }
    for (let i = quantStar; i < 5 ; i++) {
        stars.push(<AiOutlineStar size={18} color="#ffe249"/>)
    }
    //adicionando estrelas preenchidas e vazias ao vetor

    return (
        <Container>
            <div className="top">
            <div></div>

            <div className="icon">
                <img src={imgSrc} alt="icone da loja"/>
                <h1>{title}</h1>
                <div>{ stars }</div>
            </div> 
            
            <button>
                Editar 
                <RiPencilFill size={15} className="btn-icon" />
            </button>
            </div>

            <div className="bottom">
            <h1>Descrição</h1>
            <p>
                {description}    
            </p>
            </div>

        </Container>
    );
};

export default DescriptionCard;
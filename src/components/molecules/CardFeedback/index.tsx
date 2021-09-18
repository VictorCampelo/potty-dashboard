import { Container } from './styles'; 

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

interface CardFeedback extends React.InputHTMLAttributes<HTMLInputElement>{
    name?: string;
    quantStar?: number;
    text: string;
    time: string;
  }

const  CardFeedback = ({
    name,
    quantStar,
    text,
    time,
    ...rest 
}: CardFeedback) => {

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

            <div className="title">
                <h1>{name}</h1>
                <div className="stars">
                    { stars }
                </div>
            </div> 

            <p>{text}</p>

            <h3>{time}</h3>


        </Container>
    );
};

export default CardFeedback;
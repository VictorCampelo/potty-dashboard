import { Container } from './styles'; 

interface CardProduct extends React.InputHTMLAttributes<HTMLInputElement>{
    srcImg?: string;
    name?: string;
    cod?: string;
    quant?: string;
  }

const  CardProduct = ({
    srcImg,
    name,
    cod,
    quant, 
    ...rest 
}: CardProduct) => {
    return (
        <Container>

            <div className="info">
                <div className="left-area">
                    <img src={srcImg}/>

                    <div className="titles">
                        <h2>{name}</h2>
                        <h3>{cod}</h3>
                    </div>
                </div>

                <p>{"Qnt.: " + quant}</p>
            </div>

        </Container>
    );
};

export default CardProduct;
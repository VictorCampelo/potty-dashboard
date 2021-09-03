import { Container } from './styles'; 

interface CardProduct extends React.InputHTMLAttributes<HTMLInputElement>{
    srcImg?: string;
    name?: string;
    cod?: string;
    quant?: string;
    tipo?: number;
    preco?: string;
  }

const  CardProduct = ({
    srcImg,
    name,
    cod,
    quant, 
    tipo = 1,
    preco,
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

                <div>
                    <p>{"Qnt.: " + quant}</p>

                    {tipo == 2? <span>{"Un.: R$" + preco}</span> : null}
                </div>
            </div>

        </Container>
    );
};

export default CardProduct;
import { Container } from './styles'; 

import { AiFillCamera } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

interface DescriptionModal extends React.InputHTMLAttributes<HTMLInputElement>{
    title?: string;
    quantStar?: number;
    imgSrc?: string;
  }

const  DescriptionModal = ({
    title,
    quantStar,
    imgSrc,
    ...rest 
}: DescriptionModal) => {
    

    return (
        <Container>
            <div className="top">
                <h1>Descrição</h1>
                <div><IoCloseSharp size={20} /></div>

                <div className="icon">
                    <img src={imgSrc} alt="icone da loja"/>
                    <button>
                        <AiFillCamera size={15} />
                    </button>
                </div> 
            </div>

            <div className="bottom">
                <h2>Nome do negócio</h2>
                <input> 
                    
                </input>

                <h2>Descrição do negócio</h2>
                <input> </input>

                <button> Confirmar </button>
            </div>

            <div id="background-black"></div>
        </Container>
    );
};

export default DescriptionModal;
import { Container } from './styles'; 
import React, { useState } from 'react';

interface Modal extends React.InputHTMLAttributes<HTMLInputElement>{
    title?: string;
    buttons: boolean; 
    modalVisible: boolean;
  }

const  Modal = ({
    title,
    buttons = false, 
    ...rest 
}: Modal) => {
    const [visible, setVisible] = useState(true);

    if(visible === true){
    return ( 
            <Container>
                <div className="modal">
                <h1>{title}</h1>

                    {rest.children}
                </div>
                <div className="background-modal"> </div>
            </Container> );
    }else{
    return (
        null
    )
    }
    
};

export default Modal;
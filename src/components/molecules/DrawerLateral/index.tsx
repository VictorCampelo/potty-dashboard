import { Container } from './styles'; 
import React, { useState } from 'react';

import Link from 'next/link';
import { IoHomeOutline, IoPersonOutline, IoExitOutline } from 'react-icons/io5';
import { IoMdContract } from 'react-icons/io';
import { BiStore, BiClipboard, BiExtension } from 'react-icons/bi';
import {FiBox} from 'react-icons/fi';
import { AiOutlineExpand } from 'react-icons/ai';

import Modal from "../Modal";

interface DrawerLateral extends React.InputHTMLAttributes<HTMLInputElement>{
    greenOption?: number; 
}

const  DrawerLateral = ({
    greenOption,
    ...rest 
}: DrawerLateral ) => {
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <Container>
            <section className={(active ? "showNames" : "noShowNames")}>
                <div className="logo"></div>
                <nav>

                    <div className="option" onClick={() => setActive(!active)} >
                        {active ? 
                            <IoMdContract className="icon"
                                
                                color="var(--black-800)" 
                            />:
                            <AiOutlineExpand className="icon"
                                
                                color="var(--black-800)" 
                            /> 
                        }
                    </div>

                    <Link href="/shopkeeper">
                        <div className="option">
                            <IoHomeOutline className="icon"

                                color={greenOption === 0 ? "var(--green-confirmation)" : "var(--black-800)" } 

                            />
                            {active ? <a  >Home</a> : null}
                        </div>
                    </Link>
                
                    <Link href="/shop">
                        <div className="option">
                            <BiStore className="icon"
                                
                                color={greenOption === 1 ? "var(--green-confirmation)" : "var(--black-800)" } 
                            />
                            {active ? <a>Análise da loja</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <BiExtension className="icon"
                                
                                color={greenOption === 2 ? "var(--green-confirmation)" : "var(--black-800)" } 
                            />
                            {active ? <a>Categoria</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <BiClipboard className="icon"
                                
                                color={greenOption === 3 ? "var(--green-confirmation)" : "var(--black-800)" } 

                            />
                            {active ? <a>Pedidos</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/catalog">
                        <div className="option">
                            <FiBox className="icon"
                                
                                color={greenOption === 4 ? "var(--green-confirmation)" : "var(--black-800)" } 
                            />
                            {active ? <a>Catálogo</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <IoPersonOutline className="icon"
                                
                                color={greenOption === 5 ? "var(--green-confirmation)" : "var(--black-800)" } 

                            />
                            {active ? <a>Meus dados</a> : null}
                            
                        </div>
                    </Link>
                    
                    
                    <div className="option" onClick={() => setModal(true)}>
                    <IoExitOutline className="icon"
                            
                            color="var(--red)"
                    />
                    {active ? <a className="red-option">Sair</a> : null}
                    
                    
                    </div>

                    {modal ? 
                        <Modal title="Realmente deseja sair da plataforma?" buttons modalVisible={modal}>
                            <div className="bottom-area">
                                <div className="buttons">
                                    <Link href="/">
                                        <button className="red-button" >SAIR</button>
                                    </Link>
                                    <button onClick={() => setModal(false)}>VOLTAR</button>
                                </div>
                            </div>
                            
                        </Modal>
                    : null
                    }
                    
                </nav>
            </section>
        </Container>
    );
};

export default DrawerLateral;
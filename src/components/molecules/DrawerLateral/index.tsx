import { Container } from './styles'; 
import React, { useState } from 'react';

import Link from 'next/link';
import { IoHomeOutline, IoPersonOutline, IoExitOutline } from 'react-icons/io5';
import { IoMdContract } from 'react-icons/io';
import { BiStore, BiClipboard, BiExtension } from 'react-icons/bi';
import {FiBox} from 'react-icons/fi';
import { AiOutlineExpand } from 'react-icons/ai';

import Modal from "../Modal";

const  DrawerLateral: React.FC = () => {
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

                                size={25} 
                                color="var(--black-800);" 
                            />:
                            <AiOutlineExpand className="icon"
                                size={25} 
                                color="var(--black-800);" 

                            /> 
                        }
                    </div>

                    <Link href="/">
                        <div className="option">
                            <IoHomeOutline className="icon"
                                size={25} 
                                color="var(--green-confirmation)"

                            />
                            {active ? <a  >Home</a> : null}
                        </div>
                    </Link>
                
                    <Link href="/">
                        <div className="option">
                            <BiStore className="icon"

                                size={25} 
                                color="var(--black-800);" 
                            />
                            {active ? <a>Análise da loja</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <BiExtension className="icon"
                                size={25} 
                                color="var(--black-800);" 
                            />
                            {active ? <a>Categoria</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <BiClipboard className="icon"
                                size={25} 
                                color="var(--black-800);" 

                            />
                            {active ? <a>Pedidos</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <FiBox className="icon"
                                size={25} 
                                color="var(--black-800);" 
                            />
                            {active ? <a>Produtos</a> : null}
                            
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="option">
                            <IoPersonOutline className="icon"

                                size={25} 
                                color="var(--black-800);" 

                            />
                            {active ? <a>Meus dados</a> : null}
                            
                        </div>
                    </Link>
                    
                    
                    <div className="option" onClick={() => setModal(true)}>
                    <IoExitOutline className="icon"
                            size={25} 
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
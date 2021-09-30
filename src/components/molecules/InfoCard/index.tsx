import { Container } from './styles'; 

import { RiPencilFill } from 'react-icons/ri';

import { IoMdCall } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram,} from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';

import { GiKnifeFork } from 'react-icons/gi';
import { BsMap } from 'react-icons/bs';

interface InfoCard extends React.InputHTMLAttributes<HTMLInputElement>{
    title?: string; //titulo padrao de todo card
    type?: string; // tipo de card (contact, timetable, category, local)

    cell?: string; facebook?: string; instagram?: string; whatsApp?: string; // tipo contact
    
    dom?: any; seg?: any; ter?: any; qua?: any; qui?: any; sex?: any; sab?: any; // tipo timetable
    
    category?: string; // nome do tipo category
    
    local?: string; // endereço do tipo local

    button?: any;
  }
  //atributos aceitos para que o card consiga abrangir todos os tipos de informações trabalhadas

const  InfoCard = ({
    title,
    type,

    cell = "", facebook = "", instagram = "", whatsApp = "",

    dom, seg, ter, qua, qui, sex, sab,

    category,
    
    local,

    button,
    
    ...rest 

}: InfoCard) => {

    return (

        <Container>

            <div className="top">
                
                <h1>{title}</h1>
                
                <button onClick={button}>
                    Editar 
                    <RiPencilFill size={15} className="icon" />
                </button>

            </div>

            <div className="bottom">
                { type === "contact" ? 
                    <div id="Contact">
                    
                        {cell !== "" ? <div className="contact-info"> <IoMdCall size={15} /> <h2>{cell}</h2> </div> : null }
                        {facebook !== "" ? <div className="contact-info"> <FaFacebook size={15} /> <h2>{facebook}</h2> </div> : null }
                        {instagram !== "" ? <div className="contact-info"> <FiInstagram size={15} /> <h2>{instagram}</h2> </div> : null}
                        {whatsApp !== "" ? <div className="contact-info"> <IoLogoWhatsapp size={15} /> <h2>{whatsApp}</h2> </div> : null}
                    
                    </div> : null
                }
                { type === "timetable" ? 
                    <div id="timetable">

                        <div className="horario"> <h2>{"Domingo     " + dom[0] + " - " + dom[1]} </h2> </div>
                        <div className="horario"> <h2>{"Segunda     " + seg[0] + " - " + seg[1]} </h2> </div>
                        <div className="horario"> <h2>{"Terça       " + ter[0] + " - " + ter[1]} </h2> </div>
                        <div className="horario"> <h2>{"Quarta      " + qua[0] + " - " + qua[1]} </h2> </div>
                        <div className="horario"> <h2>{"Quinta      " + qui[0] + " - " + qui[1]} </h2> </div>
                        <div className="horario"> <h2>{"Sexta       " + sex[0] + " - " + sex[1]} </h2> </div>
                        <div className="horario"> <h2>{"Sabado      " + sab[0] + " - " + sab[1]} </h2> </div>                            
                    
                    </div> : null
                }
                { type === "category" ? 
                    <div id="category">

                        { category === "Alimentação" ? <GiKnifeFork size={15} /> : null} 
                        <h2>{category}</h2>

                    </div> : null
                }
                { type === "local" ? 
                    <div id="local">

                        <BsMap size={15}/> 
                        <h2>{local}</h2>

                    </div> : null
                }
            </div> 
            

            

        </Container>
    );
};

export default InfoCard;
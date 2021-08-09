import { Container } from './styles'; 

import Link from 'next/link';

const  Header: React.FC = () => {
    return (
        <Container>
            <div className="logo"></div>
            <ul>
                <li><Link href="/Venda"><a>Venda</a></Link></li>
                <li><Link href="/Fidelize"><a>Fidelize</a></Link></li>
                <li><Link href="/Planos"><a>Planos</a></Link></li>
                <li><Link href="/Gerencie"><a>Gerencie</a></Link></li>
                <li><Link href="/Ajuda"><a>Ajuda</a></Link></li>
                <button>Começar</button>
            </ul>
        </Container>
    );
};

export default Header;
import { Container } from './styles'; 


import Link from 'next/link';

const  Header: React.FC = () => {
    return (
        <Container>
            <div className="logo"></div>
            <nav>
                <Link href="/Venda"><a>Venda</a></Link>
            
                <Link href="/Fidelize"><a>Fidelize</a></Link>

                <Link href="/Planos"><a>Planos</a></Link>

                <Link href="/Gerencie"><a>Gerencie</a></Link>

                <Link href="/Ajuda"><a>Ajuda</a></Link>
                
                <button>Começar</button>
            </nav>
        </Container>
    );
};

export default Header;
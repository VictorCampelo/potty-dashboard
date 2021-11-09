import { Container } from './styles'

import { MdShoppingCart } from 'react-icons/md'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo"></div>
      <nav>
        <Link href="/Venda">
          <a>Categoria</a>
        </Link>

        <Link href="/Fidelize">
          <a>Produtos</a>
        </Link>

        <Link href="/Planos">
          <a>Contatos</a>
        </Link>

        <Link href="/Gerencie">
          <a>Quem somos</a>
        </Link>
        
        <Link href="/cart">
          <button>
            <MdShoppingCart />
            Carrinho
          </button>
        </Link>

      </nav>
    </Container>
  )
}

export default Header

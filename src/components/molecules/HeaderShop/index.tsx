import { Container } from './styles'

import { MdShoppingCart } from 'react-icons/md'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
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
        <div className="authContainer">
          <Link href="/cadastro">
            <a className="register">Criar conta</a>
          </Link>
          <Link href="/login">
            <button>Entrar</button>
          </Link>
        </div>
      </nav>
    </Container>
  )
}

export default Header

import { Container } from './styles'

import { MdShoppingCart } from 'react-icons/md'
import Link from 'next/link'

interface HeaderProps {
  isMain?: boolean
}
const Header = ({ isMain }: HeaderProps) => {
  return (
    <Container isMain={isMain}>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <nav>
        <Link href="/categorias">
          <a>Categorias</a>
        </Link>

        <Link href="/produtos">
          <a>Produtos</a>
        </Link>

        <Link href="/contatos">
          <a>Contatos</a>
        </Link>

        <Link href="/quem-somos">
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

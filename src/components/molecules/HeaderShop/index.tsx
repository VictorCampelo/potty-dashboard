import { Container } from './styles'

import { MdShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'

interface HeaderProps {
  isMain?: boolean
  store?: boolean
}
const Header = ({ isMain = false, store = false }: HeaderProps) => {
  return (
    <Container isMain={isMain} store={store}>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
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

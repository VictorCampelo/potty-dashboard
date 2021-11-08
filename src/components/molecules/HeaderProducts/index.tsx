import { Container } from './styles'
import Link from 'next/link'

const HeaderProducts: React.FC = () => {
  return (
    <Container>
      <div className="logo"></div>
      <nav>
        <Link href="/categorias">
          <a>Categorias</a>
        </Link>

        <Link href="/store">
          <a>Produtos</a>
        </Link>

        <Link href="/contacts">
          <a>Contatos</a>
        </Link>

        <Link href="/we">
          <a>Quem somos</a>
        </Link>

        <button>Ajuda</button>
      </nav>
    </Container>
  )
}

export default HeaderProducts

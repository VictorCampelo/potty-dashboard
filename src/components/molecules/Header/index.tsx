import { Container } from './styles'

import Link from 'next/link'
import router from 'next/router'

const Header: React.FC = () => {
  function handleStart() {
    router.push('/login')
  }

  return (
    <Container>
      <nav>
        <Link href="/sales">
          <a>Venda</a>
        </Link>

        <Link href="/loyalty">
          <a>Fidelize</a>
        </Link>

        <Link href="/plans">
          <a>Planos</a>
        </Link>

        <Link href="/manage">
          <a>Gerencie</a>
        </Link>

        <Link href="/help">
          <a>Ajuda</a>
        </Link>

        <button onClick={handleStart}>Começar</button>
      </nav>
    </Container>
  )
}

export default Header

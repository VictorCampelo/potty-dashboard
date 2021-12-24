import { Container } from './styles'

import Link from 'next/link'
import router from 'next/router'

const Header: React.FC = () => {
  function handleStart() {
    router.push('/login')
  }

  return (
    <Container>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </div>
    </Container>
  )
}

export default Header

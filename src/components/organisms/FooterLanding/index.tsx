import { Button } from 'components/atoms/Button'
import FooterContact from 'components/molecules/FooterContact'

import { Register } from './styles'

import { useRouter } from 'next/router'

const FooterLanding = () => {
  const router = useRouter()

  return (
    <>
      <Register>
        <div>
          <h1>Cadastrar Loja</h1>

          <p>Realize seu cadastro e teste gratuitamente por 7 dias.</p>
        </div>

        <Button
          title="Ver planos"
          onClick={() => router.push('/cadastro/lojista')}
        />
      </Register>

      <FooterContact />
    </>
  )
}

export default FooterLanding

import { Button } from 'components/atoms/Button'

import { Banner } from './styles'

const BannerLanding = () => {
  return (
    <Banner>
      <img
        src="images/landing_girl.jpg"
        alt="Foto de garota"
        width={700}
        height={500}
      />

      <div className="texts">
        <h1>Divulgue facilmente seus produtos e serviços</h1>

        <p>
          O <strong>Piauí Delivery</strong> é a forma mais rápida do seu negócio
          ser visto no mundo digital. A plataforma funciona como um catálogo
          online de todos os estabelecimentos no Piauí que trabalham com
          entregas.
        </p>

        <Button title="Cadastrar Loja" />
      </div>
    </Banner>
  )
}

export default BannerLanding

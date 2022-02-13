import { Container } from './styles'

import CardCheck from 'components/atoms/CardCheck'

const BenefitsLanding = () => {
  return (
    <Container>
      <h1>Principais vantagens de vender na Boa de Venda</h1>

      <div className="cards">
        <CardCheck
          title="Controle suas vendas"
          description="Tenha uma melhor gestão e controle da suas vendas."
        />

        <CardCheck
          title="Maior visibilidade"
          description="Exiba sua loja e produtos para mais consumidores."
        />

        <CardCheck
          title="Otimize seus custos"
          description="Reduza seus custos com atendimento, vendas e marketing"
        />
      </div>
    </Container>
  )
}

export default BenefitsLanding

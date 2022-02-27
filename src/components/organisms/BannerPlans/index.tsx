import { Banner, ContainerText } from './styles'

const BannerPlans = () => {
  return (
    <Banner>
      <div className="texts">
        <h1>Escolha o melhor plano para o seu negócio</h1>

        <ContainerText>
          <p>
            Agora que seu cadastro já está feito, vai precisar de uma das assinaturas abaixo para conseguir tirar o melhor proveito da plataforma.<br /><br />
            <b>Para isto, basta escolher um de nosssos planos e seguir para o pagamento.</b>
          </p>
          <img
            src="images/plans-illustration.svg"
            alt="Ilustracao"
            width={400}
            height={300}
          />
        </ContainerText>
      </div>
    </Banner>
  )
}

export default BannerPlans

import { CardService } from 'components/atoms/CardService'
import styled from 'styled-components'
import { BsCart, BsLaptopFill } from 'react-icons/bs'
import { FiCoffee } from 'react-icons/fi'
import { CgPill } from 'react-icons/cg'
import { MdPets } from 'react-icons/md'
import { AiOutlineTool } from 'react-icons/ai'
export const CardServices = () => {
  return (
    <Container>
      <CardService
        title="Mercado"
        background="var(--color-secondary-darker)"
        icon={<BsCart size={75} color="var(--white)" />}
      />

      <CardService
        title="Restaurante"
        background="var(--color-secondary)"
        icon={<FiCoffee size={75} color="var(--white)" />}
      />

      <CardService
        title="Farmácia"
        background="var(--color-secondary-darker)"
        icon={<CgPill size={75} color="var(--white)" />}
      />

      <CardService
        title="Pets"
        background="var(--color-secondary)"
        icon={<MdPets size={75} color="var(--white)" />}
      />
      <CardService
        title="Eletrônico"
        background="var(--color-secondary)"
        icon={<BsLaptopFill size={75} color="var(--white)" />}
      />

      <CardService
        title="EPI"
        background="var(--color-secondary-darker)"
        icon={<AiOutlineTool size={75} color="var(--white)" />}
      />

      <CardService
        title="Móveis"
        background="var(--color-secondary)"
        icon={<img src="/images/desk.svg" />}
      />

      <CardService
        title="Bebidas"
        background="var(--color-secondary-darker)"
        icon={<img src="/images/drink.svg" />}
      />
    </Container>
  )
}

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

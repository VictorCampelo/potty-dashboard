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
        background="var(--red)"
        icon={<FiCoffee size={75} color="var(--white)" />}
      />

      <CardService
        title="Farmácia"
        background="var(--blue-primary)"
        icon={<CgPill size={75} color="var(--white)" />}
      />

      <CardService
        title="Pets"
        background="var(--color-primary)"
        icon={<MdPets size={75} color="var(--white)" />}
      />
      <CardService
        title="Eletrônico"
        background="var(--black-800)"
        icon={<BsLaptopFill size={75} color="var(--white)" />}
      />

      <CardService
        title="EPI"
        background="var(--gray-600)"
        icon={<AiOutlineTool size={75} color="var(--white)" />}
      />

      <CardService
        title="Móveis"
        background="var(--color-secondary)"
        icon={<CgPill size={75} color="var(--white)" />}
      />

      <CardService
        title="Bebidas"
        background="var(--yellow)"
        icon={<CgPill size={75} color="var(--white)" />}
      />
    </Container>
  )
}

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem;
`

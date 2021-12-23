import { CardService } from 'components/atoms/CardService'
import styled from 'styled-components'
import { BsCart, BsLaptopFill } from 'react-icons/bs'
import { FiCoffee } from 'react-icons/fi'
import { CgPill } from 'react-icons/cg'
import { MdPets } from 'react-icons/md'
import { AiOutlineTool } from 'react-icons/ai'
import useMedia from 'use-media'
import sizes from 'utils/sizes'
export const CardServices = () => {
  const widthScreen = useMedia({ minWidth: '426px' })

  return (
    <Container>
      {widthScreen ? (
        <>
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
        </>
      ) : (
        <>
          <CardService
            title="Mercado"
            background="var(--color-secondary-darker)"
            icon={<BsCart size={36} color="var(--white)" />}
          />
          <CardService
            title="Móveis"
            background="var(--color-secondary)"
            icon={<img src="/images/desk.svg" width={36} />}
          />
          <CardService
            title="Pets"
            background="var(--color-secondary)"
            icon={<MdPets size={36} color="var(--white)" />}
          />
          <CardService
            title="Eletrônico"
            background="var(--color-secondary-darker)"
            icon={<BsLaptopFill size={36} color="var(--white)" />}
          />
        </>
      )}
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

  ${[sizes.down('lgMob')]} {
    gap: 1rem 2rem;
  }
`

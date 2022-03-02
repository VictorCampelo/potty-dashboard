import Head from 'next/head'
import styled from 'styled-components'

import { Wrapper, Container } from 'styles/GlobalStyle'
import { GiHamburgerMenu } from 'react-icons/gi'

import Header from 'components/molecules/HeaderShop'
import FooterLanding from 'components/organisms/FooterLanding'
import BannerPlans from 'components/organisms/BannerPlans'
import PlansLanding from 'components/organisms/PlansLanding'

import useMedia from 'use-media'
import { useState } from 'react'
import { Drawer } from 'styles/pages/Store'
import { IoIosClose } from 'react-icons/io'
import router from 'next/router'

const Plans = () => {
  const widthScreen = useMedia({ minWidth: '426px' })
  const [drawerActive, setDrawerActive] = useState(false)

  return (
    <Wrapper>
      <Head>
        <title>Plans | Boa de Venda</title>
      </Head>

      <Header />
      {!widthScreen && (
        <HeaderMob>
          <GiHamburgerMenu
            onClick={() => setDrawerActive(true)}
            size={24}
            color="black"
          />
          <Drawer className={drawerActive && 'active'}>
            <ul className="content">
              <div className="close-btn" onClick={() => setDrawerActive(false)}>
                <IoIosClose size={30} color={'#363F4E'} />
              </div>
              <li onClick={() => router.push('/login')}>Fazer Login</li>
              <li onClick={() => router.push('/cadastro')}>Fazer Cadastro</li>
              <li onClick={() => router.push('/')}>Fazer logoff</li>
            </ul>
            <div className="outside" onClick={() => setDrawerActive(false)} />
          </Drawer>
        </HeaderMob>
      )}

      <Container>
        <BannerPlans />

        <PlansLanding />

        <FooterLanding />
      </Container>
    </Wrapper>
  )
}

export const HeaderMob = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0 1.25rem;

  svg {
    margin-right: 1rem;
    flex: none;
  }

  input {
    flex: 1;
    height: 36px;
    padding: 0 1rem;
    border-radius: 40px;
    border: 1px solid var(--gray-700);
  }
`

export default Plans

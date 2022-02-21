import { Container, ResizeContainer } from './styles'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { IoHomeOutline, IoPersonOutline, IoExitOutline } from 'react-icons/io5'
import { BiStore, BiClipboard } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { AiOutlineExpand } from 'react-icons/ai'
import useMedia from 'use-media'

import Modal from '../Modal'
import { signOut } from 'contexts/AuthContext'
import { BsChevronDoubleRight } from 'react-icons/bs'

interface DrawerLateral extends React.InputHTMLAttributes<HTMLInputElement> {
  greenOption?: number
  activated?: boolean
}

const DrawerLateral = ({ greenOption, activated, ...rest }: DrawerLateral) => {
  const [active, setActive] = useState(false)
  const [modal, setModal] = useState(false)

  const isWide = useMedia({ minWidth: '1000px' })

  useEffect(() => {
    if (activated) {
      setActive(!active)
    } else {
      null
    }
  }, [])

  return (
    <>
      <Modal
        title="Realmente deseja sair da plataforma?"
        buttons
        modalVisible={modal}
      >
        <div className="bottom-area">
          <div className="buttons">
            <button onClick={signOut} className="red-button">
              SAIR
            </button>
            <button onClick={() => setModal(false)}>VOLTAR</button>
          </div>
        </div>
      </Modal>

      <Container>
        <section className={active ? 'showNames' : 'noShowNames'}>
          <div className="logo"></div>
          <nav>
            {activated ? null : (
              <ResizeContainer active={active}>
                <div className="resbtn" onClick={() => setActive(!active)}>
                  <BsChevronDoubleRight
                    color="white"
                    width={24}
                    className={active && 'active'}
                  />
                </div>
              </ResizeContainer>
            )}

            <Link href="/dashboard">
              <div className={`option ${greenOption === 0 ? 'active' : ''}`}>
                <IoHomeOutline className="icon" />
                {active ? <a>Home</a> : null}
              </div>
            </Link>

            <Link href="/dashboard/loja">
              <div className={`option ${greenOption === 1 ? 'active' : ''}`}>
                <BiStore className="icon" />
                {active ? <a>Análise da loja</a> : null}
              </div>
            </Link>

            <Link href="/dashboard/pedidos">
              <div className={`option ${greenOption === 3 ? 'active' : ''}`}>
                <BiClipboard className="icon" />
                {active ? <a>Pedidos</a> : null}
              </div>
            </Link>

            <Link href={`/dashboard/catalogo`}>
              <div className={`option ${greenOption === 4 ? 'active' : ''}`}>
                <FiBox className="icon" />
                {active ? <a>Catálogo</a> : null}
              </div>
            </Link>

            <Link href="/">
              <div className={`option ${greenOption === 5 ? 'active' : ''}`}>
                <IoPersonOutline className="icon" />
                {active ? <a>Meus dados</a> : null}
              </div>
            </Link>

            <div className="option" onClick={() => setModal(true)}>
              <IoExitOutline className="icon" color="var(--red)" />
              {active ? <a className="red-option">Sair</a> : null}
            </div>
          </nav>
        </section>
      </Container>
    </>
  )
}

export default DrawerLateral

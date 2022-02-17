import { Container } from './styles'

import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'
import { BiStore, BiClipboard } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'

interface Props {
  greenOption: number
}

const DrawerBottom = ({ greenOption }: Props) => {
  return (
    <Container>
      <Link href="/dashboard">
        <div className={greenOption === 0 ? 'link active' : 'link'}>
          <IoHomeOutline className="icon" />
          <span className="text">Início</span>
        </div>
      </Link>

      <Link href="/dashboard/loja">
        <div className={greenOption === 1 ? 'link active' : 'link'}>
          <BiStore className="icon" />
          <span className="text">Loja</span>
        </div>
      </Link>

      <Link href="/dashboard/pedidos">
        <div className={greenOption === 3 ? 'link active' : 'link'}>
          <BiClipboard className="icon" />
          <span className="text">Pedidos</span>
        </div>
      </Link>

      <Link href="/dashboard/catalogo">
        <div className={greenOption === 4 ? 'link active' : 'link'}>
          <FiBox className="icon" />
          <span className="text">Catálogo</span>
        </div>
      </Link>
    </Container>
  )
}

export default DrawerBottom

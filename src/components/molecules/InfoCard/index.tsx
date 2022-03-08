import { Container } from './styles'

import { RiPencilFill } from 'react-icons/ri'

import { IoMdCall } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io5'

import {
  GiDrinkMe,
  GiElectric,
  GiElectricalCrescent,
  GiElectricalResistance,
  GiElectricalSocket,
  GiKnifeFork,
  GiShirt
} from 'react-icons/gi'
import { BsMap } from 'react-icons/bs'
import { PulseLoader } from 'react-spinners'

interface InfoCard extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string //titulo padrao de todo card
  type?: string // tipo de card (contact, timetable, category, local)

  vazio?: boolean
  voidText?: string
  isLoading?: boolean

  cell?: string
  facebook?: string
  instagram?: string
  whatsApp?: string // tipo contact

  dom?: any
  seg?: any
  ter?: any
  qua?: any
  qui?: any
  sex?: any
  sab?: any // tipo timetable

  categories?: string[]

  local?: string // endereço do tipo local

  button?: any
}
//atributos aceitos para que o card consiga abrangir todos os tipos de informações trabalhadas

const InfoCard = ({
  title,
  type,

  cell = '',
  facebook = '',
  instagram = '',
  whatsApp = '',

  dom,
  seg,
  ter,
  qua,
  qui,
  sex,
  sab,

  categories,

  local,

  button,

  voidText,
  isLoading,
  vazio
}: InfoCard) => {
  return (
    <Container>
      <div className="top">
        <h1>{title}</h1>

        <button onClick={button}>
          Editar
          <RiPencilFill size={15} className="icon" />
        </button>
      </div>

      <div className="bottom">
        {isLoading ? (
          <div
            style={{
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PulseLoader size={5} color="var(--color-primary)" />
          </div>
        ) : (
          <>
            {type === 'contact' ? (
              <div id="Contact">
                {!vazio ? (
                  <>
                    {cell !== '' ? (
                      <div className="contact-info">
                        <IoMdCall size={15} /> <h2>{cell}</h2>{' '}
                      </div>
                    ) : null}
                    {facebook !== '' ? (
                      <div className="contact-info">
                        <FaFacebook size={15} /> <h2>{facebook}</h2>{' '}
                      </div>
                    ) : null}
                    {instagram !== '' ? (
                      <div className="contact-info">
                        <FiInstagram size={15} /> <h2>{instagram}</h2>{' '}
                      </div>
                    ) : null}
                    {whatsApp !== '' ? (
                      <div className="contact-info">
                        <IoLogoWhatsapp size={15} /> <h2>{whatsApp}</h2>{' '}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="voidText">
                      <p>{voidText}</p>
                    </div>
                  </>
                )}
              </div>
            ) : null}
            {type === 'timetable' ? (
              <div id="timetable">
                {!vazio ? (
                  <>
                    <div className="horario">
                      <div className="days">
                        <h2>Segunda</h2>
                        <h2>Terça</h2>
                        <h2>Quarta</h2>
                        <h2>Quinta</h2>
                        <h2>Sexta</h2>
                        <h2>Sábado</h2>
                        <h2>Domingo</h2>
                      </div>
                      <div className="hours">
                        <div className="hour">
                          <p>{seg[0]}</p>
                          <p>-</p>
                          <p>{seg[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{ter[0]}</p>
                          <p>-</p>
                          <p>{ter[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{qua[0]}</p>
                          <p>-</p>
                          <p>{qua[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{qui[0]}</p>
                          <p>-</p>
                          <p>{qui[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{sex[0]}</p>
                          <p>-</p>
                          <p>{sex[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{sab[0]}</p>
                          <p>-</p>
                          <p>{sab[1]}</p>
                        </div>
                        <div className="hour">
                          <p>{dom[0]}</p>
                          <p>-</p>
                          <p>{dom[1]}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="voidText">
                      <p>{voidText}</p>
                    </div>
                  </>
                )}
              </div>
            ) : null}
            {type === 'category' ? (
              <div id="category">
                {!vazio ? (
                  <div>
                    {categories?.length ? (
                      categories.map((category) => {
                        return (
                          <div key={category} className="categories-info">
                            {category === 'Roupas' && <GiShirt size={20} />}
                            {category === 'Eletrodomésticos' && (
                              <GiElectric size={20} />
                            )}
                            {category === 'Eletrônicos' && (
                              <GiElectricalResistance size={20} />
                            )}
                            {category === 'Comida' && <GiKnifeFork size={20} />}
                            {category === 'Bebida' && <GiDrinkMe size={20} />}

                            <h2>{category}</h2>
                          </div>
                        )
                      })
                    ) : (
                      <span style={{ marginLeft: '-8px' }}>
                        Nenhuma categoria cadastrada...
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="voidText">
                      <p>{voidText}</p>
                    </div>
                  </>
                )}
              </div>
            ) : null}
            {type === 'local' && (
              <div id="local">
                {!vazio ? (
                  <>
                    <BsMap size={15} />
                    <h2>{local}</h2>
                  </>
                ) : (
                  <>
                    <div className="voidText">
                      <p>{voidText}</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  )
}

export default InfoCard

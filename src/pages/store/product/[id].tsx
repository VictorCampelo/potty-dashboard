import { Input } from '../../../components/molecules/SearchInput'
import Head from 'next/head'
import { VscSearch } from 'react-icons/vsc'
import {
  Wrapper,
  Container,
  CardProduct,
  CardDesc,
  CardDescMobile,
  ProductWrapper,
  Footer,
  FilterCard,
  Installments,
  Button,
  Divisor,
  MenuBottom
} from '../../../styles/pages/Product'
import { Button as BigButton } from 'components/atoms/Button'
import React, { useCallback, useContext, useState } from 'react'
import ReactStars from 'react-stars'
import CatalogTabs from '../../../components/molecules/CatalogTabs'
import CardFeedback from '../../../components/molecules/CardFeedback'

import {
  AiFillFacebook,
  AiFillPhone,
  AiFillStar,
  AiOutlineWhatsApp,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineArrowLeft
} from 'react-icons/ai'
import { BsShareFill } from 'react-icons/bs'
import router, { useRouter } from 'next/router'
import { CheckboxFilter } from '../../../components/atoms/CheckboxFilter'
import HeaderShop from 'components/molecules/HeaderShop'
import { getProduct } from 'services/bussiness.services'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { CartContext } from 'contexts/CartContext'
import { IoIosClose } from 'react-icons/io'
import { getStoreId } from 'services/bussiness.services'
import Carousel from 'components/atoms/Carousel'
import { CartButton } from 'components/atoms/CartButton'
import { PulseLoader } from 'react-spinners'
import useMedia from 'use-media'
import CustomModal from 'components/molecules/CustomModal'
import { AuthContext } from 'contexts/AuthContext'

const fakeFeedBack = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  }
]

const fakeProducts = [
  {
    id: '404d2460-d787-47dd-8636-5364d77718b7',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  },
  {
    id: '2',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  },
  {
    id: '404d2460-d787-47dd-8636-5364d77718b7',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  },
  {
    id: '2',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  },
  {
    id: '2',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  },
  {
    id: '2',
    name: 'Geladeira Bras Temp 111IX',
    formatedName: 'Geladeira Bras Temp',
    avgStars: 0,
    sumStars: 0,
    city: 'Teresina',
    avatar: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/ldOjAMuIdtODoId2dA/1641945700673.jpg'
    },
    background: {
      url: 'https://bdv-dev.s3.us-east-2.amazonaws.com/FelipeBalinhas/1642018034723'
    }
  }
]

interface File {
  createdAt: string
  createdBy: string | null
  filename: string
  id: string
  name: string
  updatedAt: string
  url: string
}

const ProductShow = () => {
  const router = useRouter()
  const { id } = router.query
  const { items, setItems } = useContext(CartContext)
  const [name, setName] = useState('')

  useEffect(() => {
    const hostName = window.location.hostname

    let previousName = ''
    for (let i = 0; i < hostName.length; i++) {
      if (hostName[i] === '.') {
        break
      }
      previousName += hostName[i]
    }

    setName(previousName)
  }, [])

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const images = [
    {
      title: 'Foto 1',
      original:
        'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg',
      thumbnail:
        'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/d583f95f19ffbab9ee844a469909052a.jpg'
    },
    {
      title: 'Foto 2',
      original:
        'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/16cfcfb8ab328d6ce5e19bd1deb5e651.jpg',
      thumbnail:
        'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/16cfcfb8ab328d6ce5e19bd1deb5e651.jpg'
    },
    {
      title: 'Foto 3',
      original:
        'https://a-static.mlcdn.com.br/1500x1500/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/e82ef77fcefc0aff7ce228350d02e838.jpg',
      thumbnail:
        'https://a-static.mlcdn.com.br/200x200/geladeira-brastemp-frost-free-bre57-443l-220v-branco/madeiramadeira-openapi/311837/e82ef77fcefc0aff7ce228350d02e838.jpg'
    }
  ]

  const [imagePreviewDesc, setImagePreviewDesc] = useState(images[0])
  const [toggleState, setToggleState] = useState(1)

  const [storeId, setStoreId] = useState('')
  const [productId, setProductId] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [avgStars, setAvgStars] = useState(0)
  const [sumFeedbacks, setSumFeedbacks] = useState(0)
  const [sumOrders, setSumOrders] = useState(0)
  const [price, setPrice] = useState(0)
  const [priceWithDiscount, setPriceWithDiscount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [parcelAmount, setParcelAmount] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [actualFile, setActualFile] = useState<File>({} as File)
  const [actualFileDesc, setActualFileDesc] = useState<File>({} as File)

  const getPosition = (id: string) => {
    const item = files.findIndex((file) => file.id === id)

    return item
  }
  const handleUpFile = () => {
    const length = files.length
    const index = getPosition(actualFile?.id)
    if (index > 0) {
      setActualFile(files[index - 1])
    }
  }

  const handleDownFile = () => {
    const length = files.length
    const index = getPosition(actualFile?.id)
    if (index < length - 1) {
      setActualFile(files[index + 1])
    }
  }

  const handleUpFileDesc = () => {
    const index = getPosition(actualFileDesc?.id)
    if (index > 0) {
      setActualFileDesc(files[index - 1])
    }
  }

  const handleDownFileDesc = () => {
    const length = files.length
    const index = getPosition(actualFileDesc?.id)
    if (index < length - 1) {
      setActualFileDesc(files[index + 1])
    }
  }
  const [isLoading, setIsLoading] = useState(true)
  const [showInstallment, setShowInstallment] = useState(false)

  const widthScreen = useMedia({ minWidth: '426px' })

  const [descModalVisible, setDescModalVisible] = useState(false)
  const [avalModalVisible, setAvalModalVisible] = useState(false)

  function toggleDescModalVisible() {
    setDescModalVisible(!descModalVisible)
  }

  function toggleAvalModalVisible() {
    setAvalModalVisible(!avalModalVisible)
  }

  function handleOpenProduct(id) {
    router.push(`/product/${id}`)
  }

  async function loadData() {
    try {
      const { data } = await getProduct(`${id}`)
      console.log(data)
      setTitle(data?.title)
      setDesc(data?.description)
      setAvgStars(data?.avgStars)
      setSumFeedbacks(data?.sumFeedbacks)
      setSumOrders(data?.sumOrders)
      setPrice(data?.price)
      setParcelAmount(data?.parcelAmount)
      setDiscount(data?.discount)
      setProductId(data?.id)
      setStoreId(data?.storeId)
      setFiles(data?.files)
      setActualFile(data?.files[0])
      setActualFileDesc(data?.files[0])

      setPriceWithDiscount(getDiscount(data?.price, data?.discount || 0))
    } catch (e) {
      if (e.response.status === 500) {
        return toast.error('Erro interno, tente novamente', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
      if (e.response.status === 404) {
        toast.error('Produto não encontrado', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        return router.push('/login')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (id) loadData()
  }, [id])

  function getDiscount(price: number, discount: number) {
    return price - (price * discount) / 100
  }

  const notifySuccess = useCallback((message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }, [])

  function handleAddToCart() {
    if (items.find((it) => it.productId == productId)) {
      const copyItems = [...items]
      copyItems.forEach((it) => {
        if (it.productId == productId) it.amount = it.amount + 1
      })
    } else {
      setItems([
        ...items,
        {
          amount: 1,
          price: discount ? getDiscount(price, discount) : price,
          productId,
          storeId,
          title,
          enabled: true
        }
      ])

      localStorage.setItem(
        'ultimo.cart.items',
        JSON.stringify([
          ...items,
          {
            amount: 1,
            price,
            productId,
            storeId,
            title,
            enabled: true
          }
        ])
      )
    }

    notifySuccess('Item adicionado no carrinho')
  }

  /**
   * Example: getNumberArray({ size: 10, startAt: 1 }) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   */
  const getNumberArray = ({
    size,
    startAt = 0
  }: {
    size: number
    startAt: number
  }) => {
    return Array.from({ length: size }, (_, i) => i + startAt)
  }

  return (
    <Wrapper>
      <Head>
        <title>Produto | Boa de Venda</title>
      </Head>
      <HeaderShop isMain={false} />
      {isLoading ? (
        <div
          style={{
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%'
          }}
        >
          <PulseLoader size={10} />
        </div>
      ) : (
        <Container>
          <header className="header">
            <Input
              icon={<VscSearch />}
              placeholder="Pesquisar na loja"
              search
              inverse
            />
          </header>
          <CardProduct>
            <div className="image-container">
              {!widthScreen && (
                <div className="actions">
                  <div
                    className="btn"
                    style={{ marginTop: 'var(--spacing-xxxs)' }}
                  >
                    <Button style={{ width: 40, height: 40, margin: 'auto' }}>
                      <AiOutlineLeft size={20} />
                    </Button>
                  </div>
                </div>
              )}
              <div className="list-images">
                <Button style={{ marginBottom: '1rem' }} onClick={handleUpFile}>
                  {' '}
                  <AiOutlineUp size={20} color="var(--gray-600)" />
                </Button>
                {files.map((data, index) => {
                  return (
                    <img
                      key={`${data}${index}`}
                      onClick={() => setActualFile(data)}
                      src={data?.url}
                      alt={data?.filename}
                    />
                  )
                })}
                <Button style={{ marginTop: '1rem' }} onClick={handleDownFile}>
                  {' '}
                  <AiOutlineDown size={20} color="var(--gray-600)" />
                </Button>
              </div>
              <img
                src={actualFile?.url}
                alt="Foto do produto"
                className="product-image"
              />
              {!widthScreen && (
                <div className="actions">
                  <div className="top">
                    <div className="share">
                      <Button style={{ width: 40, height: 40 }}>
                        <BsShareFill size={25} />
                      </Button>
                    </div>
                  </div>
                  <div className="mid">
                    <div className="btn">
                      <Button style={{ width: 40, height: 40 }}>
                        <AiOutlineRight size={20} />
                      </Button>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="progress">
                      <p>1 de 4</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="description-container">
              <h1 className="title">{title}</h1>
              <div className="desc">
                <ReactStars count={1} size={23} value={1} edit={false} />
                <p>{avgStars}</p>
                <p className="avaliations">{sumFeedbacks} avaliações</p>
                <p className="separate">|</p>
                <p>{sumOrders} pedidos</p>
              </div>

              <div className="price-container">
                {discount ? (
                  <>
                    <div className="discount">
                      <h4>De: {formatToBrl(price)}</h4>
                      <div>-{discount}%</div>
                    </div>
                    <div className="price">
                      <div className="parcel">{parcelAmount}x</div>
                      <div className="values">
                        <h1>{formatToBrl(priceWithDiscount)}</h1>
                        <p
                          style={widthScreen ? { display: 'none' } : undefined}
                        >
                          {parcelAmount}x de{' '}
                          <strong>{formatToBrl(priceWithDiscount)}</strong>
                        </p>
                      </div>
                      {!widthScreen && (
                        <BigButton
                          title="COMPRAR AGORA"
                          style={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            fontWeight: 600
                          }}
                        />
                      )}
                    </div>
                    <p style={!widthScreen ? { display: 'none' } : undefined}>
                      Em até {parcelAmount}x sem juros ou{' '}
                      <strong>
                        {formatToBrl(getDiscount(priceWithDiscount, 10))}
                      </strong>{' '}
                      à vista
                    </p>
                  </>
                ) : (
                  <>
                    <div className="price">
                      <div className="values">
                        <h1>
                          {formatToBrl(price)} <small>à prazo</small>
                        </h1>
                        <p>Ou {formatToBrl(getDiscount(price, 10))} à vista</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="installments">
                  <a onClick={() => setShowInstallment(!showInstallment)}>
                    Ver parcelas
                  </a>

                  {showInstallment && (
                    <Installments>
                      <div className="head">
                        <div className=""></div>

                        <h1 className="title">Formas de parcelamento</h1>

                        <IoIosClose
                          onClick={() => setShowInstallment(!showInstallment)}
                          size={30}
                          color={'#363F4E'}
                        />
                      </div>

                      <img src="/images/cards.png" alt="bandeiras aceitas" />

                      <div className="list">
                        <p className="list1">
                          <strong>
                            {formatToBrl(priceWithDiscount)} à vista
                          </strong>{' '}
                          <br />
                          {getNumberArray({
                            size: parcelAmount > 6 ? 6 : parcelAmount,
                            startAt: 2
                          }).map((month) => {
                            return (
                              <>
                                {month}x de{' '}
                                {formatToBrl(priceWithDiscount / month)} sem
                                juros.
                                <br />
                              </>
                            )
                          })}
                        </p>

                        {parcelAmount > 6 && (
                          <p className="list2">
                            {getNumberArray({
                              size: parcelAmount - 6,
                              startAt: 7
                            }).map((month) => {
                              return (
                                <>
                                  {month}x de{' '}
                                  {formatToBrl(priceWithDiscount / month)} sem
                                  juros.
                                  <br />
                                </>
                              )
                            })}
                          </p>
                        )}
                      </div>
                    </Installments>
                  )}
                </div>
              </div>
              <div className="button-container">
                {!isLoading && (
                  <>
                    <BigButton
                      border
                      title="COMPRAR AGORA"
                      style={{
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        fontWeight: 600
                      }}
                    />
                    <BigButton
                      title="ADICIONE AO CARRINHO"
                      style={{
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        fontWeight: 600
                      }}
                      onClick={handleAddToCart}
                    />
                  </>
                )}
              </div>
            </div>
          </CardProduct>

          {widthScreen ? (
            <CardDesc>
              <CatalogTabs
                tab1="Descrição"
                tab2="Avaliação"
                setToggleState={setToggleState}
                toggleState={toggleState}
                content1={
                  <>
                    <div className="description-container">
                      <div className="left-container">
                        <div className="image-container">
                          <div className="list-images">
                            <Button
                              style={{ marginBottom: '1rem' }}
                              onClick={handleUpFileDesc}
                            >
                              {' '}
                              <AiOutlineUp size={20} color="var(--gray-600)" />
                            </Button>
                            {files.map((file, index) => {
                              return (
                                <img
                                  key={`${file}${index}`}
                                  onClick={(e) => setActualFileDesc(file)}
                                  src={file.url}
                                  alt={file.filename}
                                />
                              )
                            })}
                            <Button
                              style={{ marginTop: '1rem' }}
                              onClick={handleDownFileDesc}
                            >
                              {' '}
                              <AiOutlineDown
                                size={20}
                                color="var(--gray-600)"
                              />
                            </Button>
                          </div>
                          <img src={actualFileDesc.url} alt="Foto do produto" />
                        </div>
                      </div>
                      <div className="right-container">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </>
                }
                content2={
                  <>
                    <div className="rated-container">
                      <header>
                        <h1 className="rate">Avaliações de Clientes</h1>
                        <div>
                          <h1>{avgStars}</h1>
                          <ReactStars
                            count={5}
                            size={50}
                            value={5}
                            edit={false}
                          />
                        </div>
                        <p>({sumFeedbacks} avaliações)</p>
                      </header>
                      <div className="container">
                        <div className="left-container">
                          {fakeFeedBack.map((e) => {
                            return (
                              <CardFeedback
                                key={e.id}
                                name="Henrique Soares"
                                quantStar={5} //max stars is 5
                                text="Entrega extremamente rápida, entregador educado e gentil, produto exatamente como o descrito. Parabéns! Com certeza voltarei a comprar!"
                                time="30/09/2021"
                                width={850}
                              />
                            )
                          })}
                        </div>
                        <div className="right-container">
                          <FilterCard>
                            <div className="filter">
                              <h1>Ordenar</h1>
                              <h4>Recente</h4>
                              <h4>Melhor avaliação</h4>
                              <h4>Pior avaliação</h4>
                              <h1>Filtros</h1>
                              <div className="stars-container">
                                <div style={{ marginBottom: 10 }}>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <p style={{ margin: 0 }}>
                                      Somente com foto
                                    </p>
                                  </CheckboxFilter>
                                </div>
                                <div>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <ReactStars
                                      color1="#e9e9e9"
                                      count={5}
                                      size={32}
                                      value={5}
                                      edit={false}
                                    />
                                  </CheckboxFilter>
                                  <div className="percentil">
                                    <p>85%</p>
                                  </div>
                                </div>
                                <div>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <ReactStars
                                      color1="#e9e9e9"
                                      count={5}
                                      size={32}
                                      value={4}
                                      edit={false}
                                    />
                                  </CheckboxFilter>
                                  <div className="percentil">
                                    <p>10%</p>
                                  </div>
                                </div>
                                <div>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <ReactStars
                                      color1="#e9e9e9"
                                      count={5}
                                      size={32}
                                      value={3}
                                      edit={false}
                                    />
                                  </CheckboxFilter>
                                  <div className="percentil">
                                    <p>3%</p>
                                  </div>
                                </div>
                                <div>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <ReactStars
                                      color1="#e9e9e9"
                                      count={5}
                                      size={32}
                                      value={2}
                                      edit={false}
                                    />
                                  </CheckboxFilter>
                                  <div className="percentil">
                                    <p>0%</p>
                                  </div>
                                </div>
                                <div>
                                  <CheckboxFilter
                                    confirm={false}
                                    toggleConfirm={() => {}}
                                  >
                                    <ReactStars
                                      color1="#e9e9e9"
                                      count={5}
                                      size={32}
                                      value={1}
                                      edit={false}
                                    />
                                  </CheckboxFilter>
                                  <div className="percentil">
                                    <p>2%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </FilterCard>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </CardDesc>
          ) : (
            <CardDescMobile>
              <div className="description-container">
                {/* <button> */}

                <div className="title" onClick={toggleDescModalVisible}>
                  <h2>Descrição</h2>
                  <AiOutlineRight size={20} />
                </div>
                {/* </button> */}
                <div className="description">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
              <div className="rated-container">
                <div className="title" onClick={toggleAvalModalVisible}>
                  <h2>Avaliações</h2>
                  <AiOutlineRight size={20} />
                </div>
                <Divisor />
                <div className="star-container">
                  <div className="left-container">
                    <div className="star">
                      <h1>{avgStars}</h1>
                      <ReactStars count={1} size={50} value={1} edit={false} />
                    </div>
                    <p>{sumFeedbacks} avaliações</p>
                  </div>
                  <div className="right-container">
                    <div className="stars-container">
                      <div>
                        <ReactStars
                          color1="#e9e9e9"
                          count={5}
                          size={24}
                          value={5}
                          edit={false}
                        />
                        <p>90%</p>
                      </div>
                      <div>
                        <ReactStars
                          color1="#e9e9e9"
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                        />
                        <p>4%</p>
                      </div>
                      <div>
                        <ReactStars
                          color1="#e9e9e9"
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                        />
                        <p>2%</p>
                      </div>
                      <div>
                        <ReactStars
                          color1="#e9e9e9"
                          count={5}
                          size={24}
                          value={2}
                          edit={false}
                        />
                        <p>3%</p>
                      </div>
                      <div>
                        <ReactStars
                          color1="#e9e9e9"
                          count={5}
                          size={24}
                          value={1}
                          edit={false}
                        />
                        <p>1%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardDescMobile>
          )}

          <ProductWrapper>
            <h1 style={{ height: '40px' }}>Produtos relacionados</h1>
            <div className="carousel-container">
              <div className="carousel-item">
                <Carousel data={fakeProducts} isProduct />
              </div>
            </div>
          </ProductWrapper>

          {widthScreen && (
            <Footer>
              <div>
                <h1>Contato</h1>
                <span>
                  <AiFillPhone size={24} color="var(--gray-700)" />
                  (89) 99444-5552
                </span>

                <span>
                  <AiOutlineWhatsApp size={24} color="var(--gray-700)" />
                  Whatsapp
                </span>

                <span>
                  <AiOutlineMail size={24} color="var(--gray-700)" />
                  emailexample@gmail.com
                </span>
              </div>
              <div className="mapContainer">
                <img src="/images/map.png" />
                <span>
                  Avenida Paulista, 63892, São Paulo - SP, 000.000-000
                </span>
              </div>
            </Footer>
          )}
        </Container>
      )}
      <CustomModal
        buttons={false}
        setModalOpen={toggleDescModalVisible}
        modalVisible={descModalVisible}
        under
      >
        <div className="modalDescription">
          <div className="title">
            <AiOutlineArrowLeft
              size={25}
              className="arrow"
              onClick={toggleDescModalVisible}
            />
            <h2>Descrição</h2>
          </div>
          <Divisor />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </CustomModal>

      <CustomModal
        buttons={false}
        setModalOpen={toggleAvalModalVisible}
        modalVisible={avalModalVisible}
        under
      >
        <div className="modalAvaliations">
          <div className="title">
            <AiOutlineArrowLeft
              size={25}
              className="arrow"
              onClick={toggleAvalModalVisible}
            />
            <h2>Avaliações</h2>
          </div>
          <Divisor />
          <h2>{title}</h2>
          <div className="star-container">
            <div className="top-container">
              <h1>{avgStars.toFixed(1)}</h1>
              <div className="star">
                <ReactStars count={5} size={32} value={5} edit={false} />
                <p>{sumFeedbacks} avaliações</p>
              </div>
            </div>
            <div className="bot-container">
              <div className="stars-container">
                <div>
                  <ReactStars
                    color1="#e9e9e9"
                    count={5}
                    size={40}
                    value={5}
                    edit={false}
                  />
                  <p>90%</p>
                </div>
                <div>
                  <ReactStars
                    color1="#e9e9e9"
                    count={5}
                    size={40}
                    value={4}
                    edit={false}
                  />
                  <p>4%</p>
                </div>
                <div>
                  <ReactStars
                    color1="#e9e9e9"
                    count={5}
                    size={40}
                    value={3}
                    edit={false}
                  />
                  <p>2%</p>
                </div>
                <div>
                  <ReactStars
                    color1="#e9e9e9"
                    count={5}
                    size={40}
                    value={2}
                    edit={false}
                  />
                  <p>3%</p>
                </div>
                <div>
                  <ReactStars
                    color1="#e9e9e9"
                    count={5}
                    size={40}
                    value={1}
                    edit={false}
                  />
                  <p>1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>

      {widthScreen && <CartButton />}

      {!widthScreen && (
        <MenuBottom>
          <div className="price">
            <div className="values">
              <h1>{formatToBrl(getDiscount(price, discount))}</h1>
              <p style={widthScreen ? { display: 'none' } : undefined}>
                {parcelAmount}x de <strong>{formatToBrl(price)}</strong> sem
                juros.
              </p>
            </div>
            <BigButton
              title="COMPRAR AGORA"
              style={{
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                fontWeight: 600
              }}
            />
            <CartButton isFromProduct />
          </div>
        </MenuBottom>
      )}
    </Wrapper>
  )
}

export default ProductShow

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

import useMedia from 'use-media'
import CustomModal from 'components/molecules/CustomModal'

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
  alternativeText: null | string
  caption: null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  ext: null
  filename: string
  formats: string | null
  hash: string | null
  height: string | null
  id: string
  mime: null
  name: string
  previewUrl: null
  provider: null
  providerMetadata: null
  tags: null
  updatedAt: string
  updatedBy: null
  url: string
  width: string | null
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

  const [imagePreview, setImagePreview] = useState(images[0].original)
  const [imagePreviewDesc, setImagePreviewDesc] = useState(images[0].original)
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
  const [files, setFiles] = useState<File[]>([])

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
    // try {
    //   setStoreId(await getStoreId(name))
    //   console.log(storeId)
    //   console.log(name)
    // } catch (e) {
    //   console.error(e)
    // }

    try {
      const { data } = await getProduct(`${id}`)
      console.log(data)
      setTitle(data?.title)
      setDesc(data?.description)
      setAvgStars(data?.avgStars)
      setSumFeedbacks(data?.sumFeedbacks)
      setSumOrders(data?.sumOrders)
      setPrice(data?.price)
      setDiscount(data?.discount)
      setProductId(data?.id)
      setStoreId(data?.storeId)
      setFiles(data?.files)

      setPriceWithDiscount(
        parseFloat(
          getDiscount(
            getDiscount(data?.price, data?.discount).toFixed(2),
            10
          ).toFixed(2)
        )
      )
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

  function getDiscount(price, discount) {
    const porcentagem = price / 100
    const X = porcentagem * discount
    const resultado = price - X
    return resultado
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
          price,
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

  return (
    <Wrapper>
      <Head>
        <title>Produto | Último</title>
      </Head>

      <HeaderShop isMain={false} />
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
              <Button style={{ marginBottom: '1rem' }}>
                {' '}
                <AiOutlineUp size={20} color="var(--gray-600)" />
              </Button>
              {files.map((data) => {
                return (
                  <img
                    key={data?.id}
                    // onClick={(e) => setImagePreview(data.original)}
                    src={data?.url}
                    alt={data?.filename}
                  />
                )
              })}
              <Button style={{ marginTop: '1rem' }}>
                {' '}
                <AiOutlineDown size={20} color="var(--gray-600)" />
              </Button>
            </div>
            <img
              src={files[0]?.url}
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
                    <h4>De: R$ {price}</h4>
                    <div>-{discount}%</div>
                  </div>
                  <div className="price">
                    <div className="parcel">12x</div>
                    <div className="values">
                      <h1>R$ {getDiscount(price, discount).toFixed(2)}</h1>
                      <p style={widthScreen ? { display: 'none' } : undefined}>
                        12x de <strong>R$ {priceWithDiscount}</strong>
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
                    Em até 12x sem juros ou{' '}
                    <strong>R$ {priceWithDiscount}</strong> a vista
                  </p>
                </>
              ) : (
                <>
                  <div className="price">
                    <div className="values">
                      <h1>
                        R$ {price} <small>à prazo</small>
                      </h1>
                      <p>Ou R$ {getDiscount(price, 10).toFixed(2)} à vista</p>
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
                        <strong>R$ {priceWithDiscount} à vista</strong> <br />
                        2x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 2
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        3x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 3
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        4x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 4
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        5x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 5
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        6x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 6
                        ).toFixed(2)}{' '}
                        sem juros <br />
                      </p>

                      <p className="list2">
                        7x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 7
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        8x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 8
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        9x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 9
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        10x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 10
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        11x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 11
                        ).toFixed(2)}{' '}
                        sem juros <br />
                        12x R${' '}
                        {(
                          Number(getDiscount(price, discount).toFixed(2)) / 12
                        ).toFixed(2)}{' '}
                        sem juros <br />
                      </p>
                    </div>
                  </Installments>
                )}
              </div>
            </div>
            <div className="button-container">
              {!isLoading && (
                <>
                  {/* <button>COMPRAR AGORA</button> */}
                  <BigButton
                    border
                    title="COMPRAR AGORA"
                    style={{
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                      fontWeight: 600
                    }}
                  />
                  {/* <button onClick={handleAddToCart}>
                    ADICIONE AO CARRINHO
                  </button> */}
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
                          <Button style={{ marginBottom: '1rem' }}>
                            {' '}
                            <AiOutlineUp size={20} color="var(--gray-600" />
                          </Button>
                          {images.map((data) => {
                            return (
                              <img
                                key={data.title}
                                onClick={(e) =>
                                  setImagePreviewDesc(data.original)
                                }
                                src={data.thumbnail}
                                alt={data.title}
                              />
                            )
                          })}
                          <Button style={{ marginTop: '1rem' }}>
                            {' '}
                            <AiOutlineDown size={20} color="var(--gray-600" />
                          </Button>
                        </div>
                        <img src={imagePreviewDesc} alt="Foto do produto" />
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
                                  <p style={{ margin: 0 }}>Somente com foto</p>
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

              {/* <a href="facebook.com">
              <AiFillFacebook size={24} color="var(--gray-700)" />
              Facebook
            </a> */}
              <span>
                <AiOutlineMail size={24} color="var(--gray-700)" />
                emailexample@gmail.com
              </span>
            </div>
            <div className="mapContainer">
              <img src="/images/map.png" />
              <span>Avenida Paulista, 63892, São Paulo - SP, 000.000-000</span>
            </div>
          </Footer>
        )}
      </Container>
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
              <h1>R$ {getDiscount(price, discount).toFixed(2)}</h1>
              <p style={widthScreen ? { display: 'none' } : undefined}>
                12x de <strong>R$ {priceWithDiscount}</strong>
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

import HeaderShop from 'components/molecules/HeaderShop'
import Head from 'next/head'
import { CheckboxFilter } from 'components/atoms/CheckboxFilter'
import {
  AiFillStar,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineLeft,
  AiFillHeart,
  AiOutlineHeart
} from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import {
  Wrapper,
  CategoriesCard,
  Container,
  DescriptionShop,
  FilterCard,
  FilterCardSecondary,
  InfoSerch,
  Page,
  ProductCard,
  StatusCard,
  TopoPage,
  FilterCardTertiary,
  HorizonCard,
  HeaderMob,
  Drawer,
  ProductWrapper,
  Button
} from 'styles/pages/Store'
import FooterContact from 'components/organisms/FooterContact'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getProducts, getStore, getStoreId } from 'services/bussiness.services'
import { ellipsis } from 'functions/ellipsis'
import { CartButton } from 'components/atoms/CartButton'
import useMedia from 'use-media'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosClose } from 'react-icons/io'
import { Input } from 'components/molecules/SearchInput'
import CarouselProducts from 'components/atoms/CarouselProducts'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Pagination } from 'components/molecules/Pagination'
import formatToBrl from 'utils/formatToBrl'

const Products = () => {
  const router = useRouter()

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

  const [buttonOn, setButtonOn] = useState(true)
  const [drawerActive, setDrawerActive] = useState(false)

  const [imageIcon, setImageIcon] = useState(null)
  const [imageBanner, setImageBanner] = useState(null)

  const [businessName, setBusinessName] = useState('')
  const [desc, setDesc] = useState('')

  const [avgstars, setAvgStars] = useState(0)
  const [sumOrders, setSumOrders] = useState(0)
  const [sumFeedbacks, setSumFeedbacks] = useState(0)
  const [sumStars, setSumStars] = useState(0)
  const [createAt, setCreateAt] = useState(new Date())

  const [products, setProducts] = useState([])

  const [telefone, setTelefone] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [whatsApp, setWhatsApp] = useState('')

  const [businessAddress, setBusinessAddress] = useState('')

  const [dom, setDom] = useState([])
  const [seg, setSeg] = useState([])
  const [ter, setTer] = useState([])
  const [qua, setQua] = useState([])
  const [qui, setQui] = useState([])
  const [sex, setSex] = useState([])
  const [sab, setSab] = useState([])

  const [favorite, setFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [store, setStore] = useState<any>(null)

  const widthScreen = useMedia({ minWidth: '426px' })

  function handleFavorite() {
    setFavorite(!favorite)
  }

  function handleOpenProduct(id) {
    router.push(`/store/product/${id}`)
  }

  async function loadData() {
    try {
      const id = await getStoreId(`${name}`)
      const { data } = await getStore(`${id}`)
      setStore(data)
      const products = await getProducts(`${id}`)
      setImageIcon(data?.avatar)
      setImageBanner(data?.background)

      setBusinessName(data?.name)
      setDesc(data?.description)

      setSumOrders(data?.sumOrders)
      setSumFeedbacks(data?.sumFeedbacks)
      setSumStars(data?.sumStars)
      setAvgStars(data?.avgStars)

      setCreateAt(new Date(data?.createdAt))

      setProducts(products?.data)

      if (data?.schedules) {
        setDom(data?.schedules?.dom)
        setSeg(data?.schedules?.seg)
        setTer(data?.schedules?.ter)
        setQua(data?.schedules?.qua)
        setQui(data?.schedules?.qui)
        setSex(data?.schedules?.sex)
        setSab(data?.schedules?.sab)
      }

      setTelefone(data?.phone)
      setFacebook(data?.facebookLink)
      setInstagram(data?.instagramLink)
      setWhatsApp(data?.whatsappLink)

      setBusinessAddress(data?.address)
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
        toast.error('Loja não encontrada', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        return router.push(`/`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function getDiscount(price: number, discount: number) {
    return price - (price * discount) / 100
  }

  useEffect(() => {
    if (name) {
      loadData()
    }
  }, [name])

  return (
    <Wrapper>
      <Page>
        <Head>
          <title>Loja | Último</title>
        </Head>

        <TopoPage>
          <img
            className="capa"
            src={imageBanner?.url || '/images/capa.png'}
            alt="capa"
          />
          <div className="iconShare">
            <BsFillShareFill
              size={25}
              color={widthScreen ? 'var(--black-800)' : 'var(--color-primary)'}
            />
          </div>
          {!widthScreen && (
            <div className="openContainer">
              <div className="circle" />
              <span>Aberto agora</span>
            </div>
          )}

          <HeaderShop />

          {!widthScreen && (
            <HeaderMob>
              <div className="menu">
                <div className="title">
                  <AiOutlineLeft
                    size={25}
                    color="#000"
                    onClick={() => {
                      router.back()
                    }}
                  />
                  <h1>Loja</h1>
                  <span>({businessName})</span>
                </div>

                <GiHamburgerMenu
                  onClick={() => setDrawerActive(true)}
                  size={24}
                  color="black"
                />
              </div>
              {/* <input placeholder="Pesquisar na loja" /> */}
              <div className="searchBar">
                <Input
                  placeholder="Pesquisar na loja"
                  search
                  inverse
                  icon={<AiOutlineSearch size={15} />}
                />
              </div>
              <Drawer className={drawerActive && 'active'}>
                <ul className="content">
                  <div
                    className="close-btn"
                    onClick={() => setDrawerActive(false)}
                  >
                    <IoIosClose size={30} color={'#363F4E'} />
                  </div>
                  <li onClick={() => router.push('/login')}>Fazer Login</li>
                  <li onClick={() => router.push('/cadastro')}>
                    Fazer Cadastro
                  </li>
                  <li onClick={() => router.push('/')}>Fazer logoff</li>
                </ul>
                <div
                  className="outside"
                  onClick={() => setDrawerActive(false)}
                />
              </Drawer>
            </HeaderMob>
          )}
        </TopoPage>

        {widthScreen ? (
          <InfoSerch>
            <div className="input">
              <AiOutlineSearch id="search" />
              <input placeholder="Pesquisar na loja" />
            </div>

            <div className="body">
              <DescriptionShop>
                <div className="top">
                  <img
                    src={imageIcon?.url || '/images/icon.png'}
                    alt="perfil"
                  />
                  <div className="title">
                    <h1>{ellipsis(businessName, 20)}</h1>
                    <div className="stars">
                      {[...new Array(avgstars)].map((e, index) => {
                        return (
                          <AiFillStar
                            key={`${e}123${index}`}
                            size={24}
                            color="var(--gold)"
                          />
                        )
                      })}
                      {[...new Array(5 - avgstars)].map((e, index) => {
                        return (
                          <AiOutlineStar
                            key={`${e}124${index}`}
                            size={24}
                            color="var(--gold)"
                          />
                        )
                      })}
                      <h2>({sumStars})</h2>
                    </div>
                  </div>
                  {favorite ? (
                    <AiFillHeart
                      size={50}
                      color="var(--color-primary)"
                      onClick={handleFavorite}
                      className="favorite"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={50}
                      color="var(--color-primary)"
                      onClick={handleFavorite}
                      className="favorite"
                    />
                  )}
                </div>
                <p>{ellipsis(desc, 208)}</p>
              </DescriptionShop>

              <StatusCard>
                <div className="status">
                  <span>Detalhes</span>
                </div>
                <div className="body">
                  <div className="info-produto">
                    <div className="left-part">
                      <img src="/images/caixa.svg" alt="icon" />
                      <h2>Quantidade de Produtos:</h2>
                    </div>
                    <span>{products.length}</span>
                  </div>
                  <div className="info-produto">
                    <div className="left-part">
                      <img src="/images/sacola.svg" alt="icon" />
                      <h2>Quantidade de vendas:</h2>
                    </div>
                    <span>{sumOrders}</span>
                  </div>
                  <div className="info-produto">
                    <div className="left-part">
                      <img src="/images/loja.svg" alt="icon" />
                      <h2>Loja cadastrada no site em:</h2>
                    </div>
                    <span>{createAt.getFullYear()}</span>
                  </div>
                  <div className="info-produto">
                    <div className="left-part">
                      <img src="/images/estrela.svg" alt="icon" />
                      <h2>Quantidade de avaliações:</h2>
                    </div>
                    <span>{sumFeedbacks}</span>
                  </div>
                </div>
              </StatusCard>

              <StatusCard>
                <div className="status">
                  <div className="statusDot" />
                  <span>Aberto agora</span>
                </div>
                <div className="text">
                  <p>
                    Hoje: <br />
                    7h às 12h <br />
                    13h às 18h <br />
                  </p>
                </div>
              </StatusCard>
            </div>
          </InfoSerch>
        ) : (
          <DescriptionShop>
            <div className="top">
              <img src={imageIcon?.url || '/images/icon.png'} alt="perfil" />
              <div className="title">
                <h1>{businessName}</h1>
                <div className="stars">
                  {[...new Array(avgstars)].map((e) => {
                    return <AiFillStar key={e + '123'} color="var(--gold)" />
                  })}
                  {[...new Array(5 - avgstars)].map((e) => {
                    return (
                      <AiOutlineStar
                        key={e + '124'}
                        size={24}
                        color="var(--gold)"
                      />
                    )
                  })}
                  <h2>({sumStars})</h2>
                </div>
              </div>
            </div>
            <p>{ellipsis(desc, 100)}</p>
          </DescriptionShop>
        )}

        <Container>
          <section className="productsContainer">
            <div className="products">
              {widthScreen && (
                <div className="filterWrapper">
                  <FilterCard>
                    <span className="orderBy">Ordenar por: </span>

                    <button>
                      <span className="item active">Melhor resultado</span>
                    </button>

                    <button>
                      <span className="item">Mais pedidos</span>
                    </button>

                    <button>
                      <span className="item">Mais recente</span>
                    </button>

                    <button>
                      <span className="item">Preço</span>
                    </button>
                  </FilterCard>

                  <FilterCardSecondary>
                    <CheckboxFilter confirm={false} toggleConfirm={() => {}}>
                      <AiFillStar size={24} color="var(--gold)" />
                      <label>4.0 ou mais</label>
                    </CheckboxFilter>
                  </FilterCardSecondary>

                  <FilterCardTertiary>
                    <button id="button-left" onClick={() => setButtonOn(true)}>
                      <img
                        src={
                          buttonOn
                            ? '/images/quadro.svg'
                            : '/images/quadroOff.svg'
                        }
                        alt="button"
                      />
                    </button>
                    <hr />
                    <button
                      id="button-right"
                      onClick={() => setButtonOn(false)}
                    >
                      <img
                        src={
                          buttonOn ? '/images/stack.svg' : '/images/stackOn.svg'
                        }
                        alt="button"
                      />
                    </button>
                  </FilterCardTertiary>
                </div>
              )}
              <div className="bottom">
                {widthScreen && (
                  <div className="categoriesContainer">
                    <CategoriesCard>
                      <div className="title">
                        <span>Categorias da loja:</span>
                      </div>

                      <div className="item">
                        <a>Todas as categorias</a>
                      </div>

                      <div className="item">
                        <a>Cozinha</a>
                      </div>

                      <div className="item">
                        <a>Quartos</a>
                      </div>

                      <div className="item">
                        <a className="active">Sala de estar</a>
                      </div>

                      <div className="item">
                        <a>Escritório</a>
                      </div>
                    </CategoriesCard>
                  </div>
                )}
                {products.length > 0 ? (
                  widthScreen ? (
                    <div className="productWrapper">
                      {buttonOn ? (
                        <>
                          {products.map((e) => {
                            return (
                              <ProductCard
                                key={e.id}
                                onClick={() => handleOpenProduct(e.id)}
                              >
                                {/* <img
                                  src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000"
                                  alt="geladeira frost free"
                                /> */}
                                <img
                                  src={e.files[0]?.url || '/images/capa.png'}
                                  alt={e.title}
                                />
                                <div className="title">
                                  <span>{ellipsis(e.title, 30)}</span>
                                </div>
                                <div className="score">
                                  <AiFillStar
                                    key={e.id}
                                    size={18}
                                    color="var(--gold)"
                                  />
                                  <span>
                                    {e.avgStars} | {e.sumOrders} Pedidos
                                  </span>
                                </div>
                                <div className="price">
                                  <small>
                                    {e.discount
                                      ? `De: ${formatToBrl(
                                          getDiscount(e.price, e.discount)
                                        )}`
                                      : null}
                                  </small>
                                  <span>{formatToBrl(e.price)}</span>
                                </div>

                                {/* <p>{ellipsis(e.description, 120)}</p> */}
                                {e.parcelAmount > 1 && (
                                  <p>
                                    Em até {e.parcelAmount}x sem juros ou{' '}
                                    <strong>
                                      {formatToBrl(
                                        getDiscount(e.price, e.discount)
                                      )}
                                    </strong>{' '}
                                    à vista
                                  </p>
                                )}
                                <Button position="left">
                                  <BiChevronLeft size={25} color="black" />
                                </Button>
                                <Button position="right">
                                  <BiChevronRight size={25} color="black" />
                                </Button>
                              </ProductCard>
                            )
                          })}
                        </>
                      ) : (
                        <div className="horizon">
                          {products.map((e) => {
                            return (
                              <HorizonCard
                                key={e.id}
                                onClick={() => handleOpenProduct(e.id)}
                              >
                                <img
                                  key={e.id}
                                  src="https://brastemp.vtexassets.com/arquivos/ids/213732/Geladeira-BRE80AK-Frontal.jpg?v=637298140570900000"
                                  alt="geladeira frost free"
                                />
                                <div className="infos">
                                  <span className="title">
                                    {ellipsis(e.title, 70)}
                                  </span>
                                  <div className="score">
                                    <AiFillStar
                                      key={e.id}
                                      size={18}
                                      color="var(--gold)"
                                    />
                                    <span>
                                      {e.avgStars} | {e.sumOrders} Pedidos
                                    </span>
                                  </div>
                                  <div className="price">
                                    <span>{formatToBrl(e.price)}</span>
                                    <small>
                                      {e.discount
                                        ? `De: ${formatToBrl(
                                            getDiscount(e.price, e.discount)
                                          )}`
                                        : null}
                                    </small>
                                  </div>

                                  <p>{ellipsis(e.description, 120)}</p>
                                </div>
                              </HorizonCard>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <ProductWrapper>
                      <div>
                        <h3>Eletrônicos e eletrodomésticos</h3>
                        <div className="carousel-container">
                          <div className="carousel-item">
                            <CarouselProducts
                              data={products}
                              buttons={false}
                              storeName={name}
                              promo
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3>Cozinha</h3>
                        <div className="carousel-container">
                          <div className="carousel-item">
                            <CarouselProducts
                              data={products}
                              buttons={false}
                              storeName={name}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3>Móveis</h3>
                        <div className="carousel-container">
                          <div className="carousel-item">
                            <CarouselProducts
                              data={products}
                              buttons={false}
                              storeName={name}
                            />
                          </div>
                        </div>
                      </div>
                    </ProductWrapper>
                  )
                ) : (
                  <div className="emptyProducts">
                    <div className="img">
                      <img src="images/emptyCart.svg" alt="Sem produtos" />
                    </div>
                    <div className="title">
                      <h1>Essa loja ainda não tem produtos :(</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          {widthScreen && (
            <footer>
              <Pagination
                onPageChange={() => {}}
                currentPage={1}
                totalCountOfRegisters={100}
                registersPerPage={10}
              />
            </footer>
          )}
        </Container>
        {widthScreen && store !== null && (
          <FooterContact
            title={store.name}
            cnpj={store.CNPJ}
            address={store.formattedAddress}
            phone={store.phone}
            whatsappLink={store.whatsappLink}
            instagramLink={store.instagramLink}
            facebookLink={store.facebookLink}
            cep={store.zipcode}
          />
        )}
      </Page>

      <CartButton />
    </Wrapper>
  )
}

export default Products

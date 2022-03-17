import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { BsWhatsapp } from 'react-icons/bs'
import { FiChevronLeft, FiArrowLeft } from 'react-icons/fi'
import { MultiSelect as Select } from 'components/molecules/Select'
import { useContext, useState, useEffect } from 'react'
import router from 'next/router'
import { CartContext } from 'contexts/CartContext'
import { api } from 'services/apiClient'
import { getUser } from 'services/client.services'
import useMedia from 'use-media'
import { toast } from 'react-toastify'
import CustomModal from 'components/molecules/CustomModal'
import { IoIosClose } from 'react-icons/io'
import { Input } from 'components/molecules/Input'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { BiBuildings, BiMapAlt } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaHome } from 'react-icons/fa'
import { Button } from 'components/atoms/Button'
import {
  Container,
  Content,
  CartContainerFooter as ContainerFooterMobile
} from 'styles/pages/Cart'
import sizes from 'utils/sizes'
import { Checkbox } from 'components/atoms/Checkbox'
import formatToBrl from 'utils/formatToBrl'
import formatPhone from 'utils/masks/formatPhone'
import { IoPencilOutline } from 'react-icons/io5'
import getNumberArray from 'utils/getNumberArray'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import _ from 'lodash'
import { PulseLoader } from 'react-spinners'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface PaymentMethod {
  id: string
  methodName: string
  allowParcels: boolean
}

interface UserAddress {
  uf: string
  street: string
  city: string
  zipcode: string
  neighborhood: string
  complement: string
  addressNumber: number
  logradouro: string
}

interface User extends UserAddress, Store {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
}

interface Store {
  store: {
    addressNumber: 2456
    city: 'Teresina'
    neighborhood: 'Ininga'
    phone: '(86) 99523-3237'
    state: 'PI'
    street: 'Rua 31 de março'
    zipcode: '64049-700'
    uf: string
  }
}

interface Option {
  label: string
  value: string
}

const addressRegisterFormSchema = yup.object().shape({
  uf: yup.string().required('Estado obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  street: yup.string().required('Logradouro obrigatório'),
  addressNumber: yup.string().required('obrigatório'),
  neighborhood: yup.string().required('Bairro obrigatório'),
  zipcode: yup
    .string()
    .required('CEP obrigatório')
    .min(9, 'Mínimo 8 caracteres')
})

const CartContinue = () => {
  const widthScreen = useMedia({ minWidth: '426px' })

  const { stores, loadingStores, items, loadingItems, setItems } =
    useContext(CartContext)
  const [paymentMethods, setPaymentMethods] =
    useState<PaymentMethod[] | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [storesWithoutDelivery, setStoresWithoutDelivery] = useState<{
    [storeId: string]: boolean
  }>({})

  const [addressModalActive, setAddressModalActive] = useState(false)
  const [clearModalActive, setClearModalActive] = useState(false)

  //Fix checkout

  const [deliveryMethod, setDeliveryMethod] =
    useState<'house' | 'store'>('house')
  const [parcelCheckbox, setParcelCheckbox] = useState(false)

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  let parcelsOptions = getNumberArray({
    size: 11,
    startAt: 2
  }).map((parcel) => {
    return {
      value: `${parcel}`,
      label: `${parcel}x`
    }
  })

  const [paymentMethodOption, setPaymentMethodOption] =
    useState<Option | null>(null)
  const [parcelOption, setParcelOption] = useState<Option>({
    value: '2',
    label: '2x'
  })
  const [allowParcels, setAllowParcels] = useState(false)

  const [itemsPaymentMethod, setItemsPaymentMethod] = useState<{
    [productId: string]: { methodName: string; parcelAmount?: string }
  }>({})

  const finallyPurchase =
    Object.keys(itemsPaymentMethod).length === items.length

  const updateItemPaymentMethod = ({
    productId,
    methodName,
    parcelAmount
  }: {
    productId: string
    methodName: string
    parcelAmount: string
  }) => {
    const updated = {
      methodName,
      parcelAmount
    }
    if (
      !paymentMethods.find((methods) => methods.methodName === methodName)
        ?.allowParcels
    ) {
      updated.parcelAmount = undefined

      setParcelOption({
        value: '1',
        label: '1x'
      })
      setAllowParcels(false)
    }
    setItemsPaymentMethod({
      ...itemsPaymentMethod,
      [productId]: updated
    })
  }

  const onSelectPaymentMethod = (option) => {
    setPaymentMethodOption(option)
    setAllowParcels(
      paymentMethods.find(({ methodName }) => methodName === option.value)
        .allowParcels
    )
    setParcelOption(null)
    updateItemPaymentMethod({
      productId: selectedProduct.productId,
      methodName: option.value,
      parcelAmount: parcelOption?.value
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(addressRegisterFormSchema)
  })

  const getStore = (storeId: string) => {
    return stores.find(({ id }) => id === storeId)
  }

  const toggleParcelCheckbox = () => {
    setParcelCheckbox(!parcelCheckbox)
  }

  const toggleClearModal = () => {
    setClearModalActive(!clearModalActive)
  }

  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product)

    setPaymentMethods(getStore(product.storeId).paymentMethods)

    const method = itemsPaymentMethod[product.productId]

    if (method) {
      setPaymentMethodOption({
        value: method.methodName,
        label: method.methodName
      })

      setAllowParcels(
        paymentMethods.find(
          ({ methodName }) => methodName === method.methodName
        )?.allowParcels
      )

      if (Number(method.parcelAmount) > 0) {
        setParcelOption({
          value: method.parcelAmount,
          label: `${method.parcelAmount}x`
        })

        parcelsOptions = getNumberArray({
          size: +method.parcelAmount,
          startAt: 1
        }).map((parcel) => {
          return {
            value: `${parcel}`,
            label: `${parcel}x`
          }
        })

        setAllowParcels(true)
        setParcelCheckbox(true)
      }
    }
  }

  const openAddressModal = () => {
    const address = {
      uf: user.uf,
      city: user.city,
      zipcode: user.zipcode,
      addressNumber: user.addressNumber,
      complement: user.complement,
      neighborhood: user.neighborhood,
      street: user.street
    }

    Object.entries(address).forEach(([key, value]) => {
      setValue(key, value)
    })

    setAddressModalActive(true)
  }

  const handleFinishPurchase = async () => {
    try {
      if (!finallyPurchase) {
        const productsIds = items.map(({ productId }) => productId)
        const productsIdsWithPaymentMethod = Object.keys(itemsPaymentMethod)
        const nextItemId = productsIds.find(
          (id) => !productsIdsWithPaymentMethod.includes(id)
        )
        const nextItem = items.find(({ productId }) => productId === nextItemId)

        setSelectedProduct(nextItem)

        setPaymentMethods(getStore(nextItem.storeId).paymentMethods)

        updateItemPaymentMethod({
          productId: nextItem.productId,
          methodName: paymentMethodOption.value,
          parcelAmount: parcelOption?.value
        })

        return
      }

      const products = Object.entries(_.groupBy(items, 'storeId')).map(
        ([storeId, products]) => {
          const orderProducts = products.map((item) => {
            const order = {
              productId: item.productId,
              amount: Number(item.amount),
              paymentMethod: itemsPaymentMethod[item.productId].methodName,
              parcels: Number(itemsPaymentMethod[item.productId].parcelAmount)
            }
            if (!order.parcels) delete order.parcels
            return order
          })
          return {
            storeId,
            orderProducts,
            delivery: storesWithoutDelivery[storeId] ? false : true
          }
        }
      )

      const { data } = await api.post(`/orders`, { products })

      localStorage.setItem('ultimo.cart.items', '[]')

      data.whatsapp.forEach((it) => window.open(it))

      router.push('/cart/finish')
    } catch (e) {
      console.error(e)

      if (e.response.status === 401) {
        return toast.error(
          'Clique aqui para fazer o login e finalizar sua compra!',
          {
            onClick: () => router.push('/login')
          }
        )
      }

      if (e.response.status === 500) {
        return toast.error(
          'Faça o login com uma conta de usuário para finalizar a compra!'
        )
      }

      toast.error('Erro ao finalizar compra, tente novamente mais tarde!')
    }
  }

  const handleUpdateAddress = async (values: UserAddress) => {
    try {
      const address = {
        uf: values.uf,
        city: values.city,
        zipcode: values.zipcode,
        addressNumber: values.addressNumber,
        complement: values.complement,
        neighborhood: values.neighborhood,
        street: values.street
      }

      const { status } = await api.patch('/users', address)

      if (status === 200) setUser({ ...user, ...address })

      setAddressModalActive(false)

      toast.success('Endereço atualizado com sucesso!')
    } catch (e) {
      console.error(e)
      toast.error('Erro ao atualizar endereço, tente novamente mais tarde!')
    }
  }

  const loadUserData = async () => {
    try {
      const { data, status } = await getUser()

      if (status === 200) setUser(data)
    } catch (e) {
      console.error(e)
      router.push('/login')
    }
  }

  useEffect(() => {
    if (!loadingItems && !loadingStores && items.length && stores.length) {
      const firstItem = items[0]

      setSelectedProduct(firstItem)
      setPaymentMethods(getStore(firstItem.storeId).paymentMethods)
    }
  }, [loadingItems, loadingStores])

  useEffect(() => {
    if (selectedProduct?.storeId)
      setStoresWithoutDelivery({
        ...storesWithoutDelivery,
        [selectedProduct.storeId]: deliveryMethod === 'store'
      })
  }, [deliveryMethod])

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <>
      <Head>
        <title>Carrinho | Último</title>
      </Head>

      <HeaderProducts />

      <CustomModal
        buttons={false}
        modalVisible={clearModalActive}
        setModalOpen={toggleClearModal}
      >
        <ModalContainer>
          <div className="title" style={{ textAlign: 'center' }}>
            <span>
              Realmente deseja <strong>esvaziar</strong> o carrinho?
            </span>
          </div>
          <div
            className="buttonsContainer"
            style={{ textAlign: 'center', marginTop: 'var(--spacing-xs)' }}
          >
            <Button
              title="ESVAZIAR"
              onClick={() => {
                setItems([])
                toggleClearModal()
              }}
              style={{ marginBottom: 'var(--spacing-xxs)' }}
            />
            <span onClick={toggleClearModal}>CANCELAR</span>
          </div>
        </ModalContainer>
      </CustomModal>

      <CustomModal
        buttons={false}
        showCloseButton={false}
        setModalOpen={() => setAddressModalActive(!addressModalActive)}
        modalVisible={addressModalActive}
        under={!widthScreen}
      >
        <ModalContainer>
          <div className="exit-container">
            <FiArrowLeft
              size={25}
              color="black"
              onClick={() => setAddressModalActive(false)}
              style={widthScreen ? { display: 'none' } : undefined}
            />
            <h1>Adicionar novo endereço</h1>

            <IoIosClose
              onClick={() => setAddressModalActive(false)}
              size={36}
              color={'black'}
              style={widthScreen ? undefined : { display: 'none' }}
            />
          </div>

          <form
            className="input-container"
            onSubmit={handleSubmit(handleUpdateAddress)}
          >
            <div className="row">
              <Input
                label="CEP"
                placeholder="00000-000"
                mask="cep"
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
                {...register('zipcode')}
                textError={errors.zipcode?.message}
                error={errors.zipcode}
                maxLength={9}
              />

              <Input
                label="Bairro"
                placeholder="Bairro"
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
                {...register('neighborhood')}
                textError={errors.neighborhood?.message}
                error={errors.neighborhood}
              />
            </div>

            <div className="row mid">
              <Input
                label="Logradouro"
                placeholder="Logradouro"
                flex={3}
                icon={<FaHome size={20} color="var(--black-800)" />}
                {...register('street')}
                textError={errors.complement?.message}
                error={errors.complement}
              />

              <Input
                label="Número"
                placeholder="0000"
                mask="number"
                className="input-logradouro-number"
                flex={1}
                type="numeric"
                maxLength={6}
                icon={<BiBuildings size={20} color="var(--black-800)" />}
                {...register('addressNumber')}
                textError={errors.addressNumber?.message}
                error={errors.addressNumber}
              />
            </div>

            <div className="row">
              <Input
                label="Cidade"
                placeholder="Cidade"
                icon={
                  <HiOutlineLocationMarker size={20} color="var(--black-800)" />
                }
                {...register('city')}
                textError={errors.city?.message}
                error={errors.city}
                maxLength={45}
              />

              <Input
                label="Estado"
                placeholder="Estado"
                icon={
                  <HiOutlineLocationMarker size={20} color="var(--black-800)" />
                }
                {...register('uf')}
                textError={errors.uf?.message}
                error={errors.uf}
                maxLength={45}
              />
            </div>

            <div className="row">
              <Complement
                label="Complemento"
                placeholder="Complemento"
                {...register('complement')}
                textError={errors.complement?.message}
                maxLength={30}
              />
            </div>

            <div className="buttons-container">
              <Button
                title="Voltar"
                type="button"
                border
                style={widthScreen ? undefined : { display: 'none' }}
                onClick={() => setAddressModalActive(false)}
              />
              <Button title="Atualizar" type="submit" />
            </div>
          </form>
        </ModalContainer>
      </CustomModal>

      <Container>
        <Content>
          {!widthScreen && (
            <div className="header" onClick={() => router.push('/')}>
              <FiArrowLeft size={25} color="var(--black-800)" />
              <h1>Meu carrinho</h1>
            </div>
          )}
          <h1 style={widthScreen ? undefined : { display: 'none' }}>
            Finalizar compra
          </h1>

          <CardsContainer>
            <div className="top-container">
              <AddressCard>
                {widthScreen && <h2> {selectedProduct?.title}</h2>}

                <DeliveryMethod className="delivery-method">
                  <span>Escolha a forma que deseja receber seus pedidos</span>

                  <Checkbox
                    confirm={deliveryMethod === 'house'}
                    toggleConfirm={() => setDeliveryMethod('house')}
                    size="small"
                    label="Receber em domicílio"
                  />
                  <Checkbox
                    confirm={deliveryMethod === 'store'}
                    toggleConfirm={() => setDeliveryMethod('store')}
                    size="small"
                    label="Retirar na loja"
                  />
                </DeliveryMethod>

                <div className="address-infos">
                  <AddressInfo>
                    {user ? (
                      <div className="wrap-dados">
                        <span>
                          <strong>Nome do usuário:</strong> {user.firstName}{' '}
                          {user.lastName}
                        </span>

                        <span>
                          <strong>Endereço: </strong>
                          {user.street || user.store?.street}{' '}
                          {user.addressNumber || user.store?.addressNumber},{' '}
                          {user.neighborhood || user.store?.neighborhood},{' '}
                          {user.city || user.store?.city},{' '}
                          {user.uf || user.store?.uf},{' '}
                          {user.zipcode || user.store?.zipcode}, Brasil
                        </span>

                        <span>
                          <strong>Telefone: </strong>{' '}
                          {formatPhone(user.phone || user.store?.phone || '')}
                        </span>
                      </div>
                    ) : (
                      <>
                        <span>
                          <strong>Nome do usuário:</strong> Carregando...
                        </span>

                        <span>
                          <strong>Endereço: </strong> Carregando...
                        </span>

                        <span>
                          <strong>Telefone: </strong> Carregando...
                        </span>
                      </>
                    )}
                  </AddressInfo>

                  <UpdateAddressButton onClick={openAddressModal}>
                    <IoPencilOutline size={24} />
                    Atualizar endereço
                  </UpdateAddressButton>
                </div>

                <div className="wrap-paymentsMethods">
                  <h3>Forma de pagamento</h3>

                  <div className="paymentContainer">
                    <Select
                      name="Forma de pagamento"
                      options={paymentMethods?.map(({ methodName }) => ({
                        value: methodName,
                        label: capitalizeFirstLetter(methodName)
                      }))}
                      selectedValue={paymentMethodOption}
                      setSelectedValue={onSelectPaymentMethod}
                      loading={false}
                      placeholder="Selecione sua forma de pagamento"
                    />

                    {parcelCheckbox && (
                      <Select
                        name="Parcelamento"
                        options={parcelsOptions}
                        selectedValue={parcelOption}
                        setSelectedValue={(option) => {
                          setParcelOption(option)
                          updateItemPaymentMethod({
                            productId: selectedProduct.productId,
                            methodName: paymentMethodOption.value,
                            parcelAmount: option.value
                          })
                        }}
                        loading={false}
                        placeholder="Selecione o número de parcelas"
                      />
                    )}
                  </div>

                  <Checkbox
                    disabled={!allowParcels}
                    confirm={parcelCheckbox}
                    toggleConfirm={() => {
                      toggleParcelCheckbox()
                      updateItemPaymentMethod({
                        productId: selectedProduct.productId,
                        methodName: paymentMethodOption?.value,
                        parcelAmount: !parcelCheckbox
                          ? parcelOption?.value
                          : '0'
                      })
                    }}
                    label="Parcelar Compra"
                  />
                </div>
              </AddressCard>

              {!widthScreen ? (
                <>
                  <div className="wrap-products-mobile">
                    <div className="wrap-products-title">
                      <h3>Produtos</h3>
                    </div>
                    <Swiper
                      pagination={{
                        type: 'fraction'
                      }}
                      spaceBetween={38}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {stores.map((store) => {
                        return (
                          <>
                            {store.items.map((product, i) => (
                              <SwiperSlide key={i}>
                                <ProductItem
                                  key={product.productId}
                                  active={
                                    selectedProduct?.productId ===
                                    product.productId
                                  }
                                  onClick={() => handleSelectProduct(product)}
                                >
                                  <div className="img-container">
                                    <img
                                      src={product?.image}
                                      alt="Foto do produto"
                                    />
                                  </div>

                                  <div className="info-container">
                                    <h4>
                                      {product.title.length > 40
                                        ? product.title.slice(0, 40) + ' ...'
                                        : product.title}
                                    </h4>
                                    <span>{product.amount}x</span>
                                  </div>
                                </ProductItem>
                              </SwiperSlide>
                            ))}
                          </>
                        )
                      })}
                    </Swiper>
                  </div>
                </>
              ) : (
                <ProductsContainer>
                  {loadingStores ? (
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <PulseLoader size={8} color="var(--color-primary)" />
                    </div>
                  ) : (
                    stores.map((store, i) => {
                      return (
                        <div key={i}>
                          <h1>{store.name}</h1>

                          <div className="products-container">
                            {store.items.map((product) => (
                              <ProductItem
                                key={product.productId}
                                active={
                                  selectedProduct?.productId ===
                                  product.productId
                                }
                                onClick={() => handleSelectProduct(product)}
                              >
                                <div className="img-container">
                                  <img
                                    src={product?.image}
                                    alt="Foto do produto"
                                  />
                                </div>

                                <div className="info-container">
                                  <h4>
                                    {product.title.length > 40
                                      ? product.title.slice(0, 40) + ' ...'
                                      : product.title}
                                  </h4>

                                  <span>{product.amount}x</span>
                                </div>
                              </ProductItem>
                            ))}
                          </div>
                        </div>
                      )
                    })
                  )}
                </ProductsContainer>
              )}
            </div>

            {widthScreen ? (
              <CartContainerFooter>
                <div className="buttonContainer">
                  <button
                    className="finish goback"
                    onClick={() => {
                      router.push('/cart')
                    }}
                  >
                    <FiChevronLeft size={24} color="var(--color-primary)" />
                    Voltar para o carrinho
                  </button>
                </div>

                <div className="info">
                  <div>
                    <span>Total: </span>
                    <strong>{formatToBrl(total)}</strong>
                  </div>
                  <span className="spanBottom"></span>
                </div>

                <div className="buttonContainer">
                  <button
                    className="finish"
                    onClick={handleFinishPurchase}
                    disabled={!paymentMethodOption?.value}
                  >
                    {finallyPurchase ? (
                      <>
                        <BsWhatsapp size={24} color="white" />
                        FINALIZAR COMPRAR
                      </>
                    ) : (
                      <>PRÓXIMO PRODUTO</>
                    )}
                  </button>
                </div>
              </CartContainerFooter>
            ) : (
              <ContainerFooterMobile
                disabled={items.filter((it) => it.enabled).length === 0}
              >
                <div className="info">
                  <div>
                    <span>Total: </span>
                    <strong>{formatToBrl(total)}</strong>
                  </div>
                  <span className="spanBottom">
                    {items.filter((it) => it.enabled).length <= 1
                      ? items.length + ' item'
                      : items.length + ' itens'}
                    {!widthScreen && (
                      <a
                        onClick={toggleClearModal}
                        className="
                      empty-cart"
                      >
                        Esvaziar Carrinho
                      </a>
                    )}
                  </span>
                </div>
                <div className="buttonContainerMob">
                  <button className="finish" onClick={handleFinishPurchase}>
                    {' '}
                    <BsWhatsapp size={24} color="white" />
                    <p>FINALIZAR</p>
                  </button>
                </div>
              </ContainerFooterMobile>
            )}
          </CardsContainer>
        </Content>
      </Container>
    </>
  )
}

export default CartContinue

const CardsContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    height: 80%;
    gap: 2rem;
    min-height: 350px;
  }

  @media (max-width: 430px) {
    .top-container {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 100%;
    }

    .wrap-products-mobile {
      order: -1;
      width: 350px;
      margin: 0 auto;

      .wrap-products-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 25px 0;
      }

      h4 {
        font-size: 14px;
        color: #5d1a82;
      }

      .swiper {
        width: 100%;
        position: relative;
        margin-left: 15px;

        overflow: visible;

        min-height: 135px;
        box-sizing: border-box;

        .swiper-pagination {
          position: absolute;
          top: -47px;
          left: 325px;
          height: 20px;
          width: fit-content;
        }

        .swiper-button-next {
          position: absolute;
          bottom: -20px;
          width: fit-content;
          height: 20px;
          color: #ff7a00;
        }

        .swiper-button-next::after {
          display: none;
        }

        .swiper-button-next::before {
          width: max-content;
          content: 'Próximo item ' url('/images/next.png');
          display: block;
          position: absolute;
          bottom: -100px;
          right: 0;
        }

        .swiper-button-prev {
          position: absolute;
          bottom: -20px;
          width: fit-content;
          height: 20px;
          color: #ff7a00;
        }

        .swiper-button-prev::after {
          display: none;
        }

        .swiper-button-prev::before {
          width: max-content;
          content: url('/images/prev.png') ' Item anterior';
          display: block;
          position: absolute;
          bottom: -100px;
          left: 0;
        }
      }

      .swiper-slide {
        box-sizing: border-box;
        /* text-align: center; */
        min-height: 130pxpx;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically; */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        object-fit: cover;
      }
    }
  }
`

const AddressCard = styled.section`
  grid-column: span 2 / span 3;
  width: 100%;
  background: white;
  border-radius: 30px;
  padding: 1.5rem 2rem 1.5rem 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .paymentContainer {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 430px) {
    display: grid;

    .delivery-method {
      order: 0;
    }

    .wrap-paymentsMethods {
      order: 1;
      margin-top: 20px;
      h3 {
        display: none;
      }
    }

    .address-infos {
      order: 2;

      margin-bottom: 50px;
    }
  }

  ${[sizes.down('lgMob')]} {
    box-shadow: none;
    max-width: 100vw;

    .paymentContainer {
      flex-wrap: wrap;
    }

    h1 {
      display: none;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h2 {
    font-size: 30px;
    line-height: 45px;
    font-weight: 600;
    color: var(--color-secondary-darker);
  }

  h3 {
    font-size: 24px;
    line-height: 60px;
    font-weight: 600;
  }
`
const DeliveryMethod = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0;

  div {
    margin: 0.1rem 0 !important;
  }
`
const AddressInfo = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff6ed;
  border: 1px solid var(--color-primary);
  padding: 1.2rem 1rem;
  border-radius: 30px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  ${[sizes.down('lgMob')]} {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xxxs);
    strong {
      display: none;
    }
  }
  span {
    display: block;
  }
`
const Complement = styled(Input)`
  width: 400px;
`
const UpdateAddressButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  background: transparent;
  border: none;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: color 0.2s;

  ${[sizes.down('lgMob')]} {
    margin-bottom: var(--spacing-md);
  }
  svg {
    color: var(--color-primary);
    margin-right: 0.5rem;
    transition: color 0.2s;
  }

  :hover {
    color: var(--color-primary-darker);

    svg {
      color: var(--color-primary-darker);
    }
  }
`

const ProductsContainer = styled.section`
  width: 100%;
  background: white;
  border-radius: 30px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;

  ${[sizes.down('lgMob')]} {
    display: none;
  }
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.6rem;
    padding-left: 1.2rem;
  }

  .products-container {
    height: 100%;
    width: 100%;
    overflow: hidden auto;
    padding: 0 0.75rem;
  }
`

export const CartContainer = styled.section`
  background: white;
  width: 100%;
  border-radius: 30px;
  height: 20%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;

  .subTotal {
    padding-left: 1rem;
  }

  h1 {
    padding: 1.5rem;
  }

  .info {
    span,
    strong {
      font-size: 1.25rem;
    }

    strong {
      color: var(--color-primary);
    }
  }

  .buttonContainer {
    display: flex;

    button {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      margin-left: 1rem;
      border: none;
      background: white;
      border-radius: 50px;
      height: 48px;
      font-weight: bold;

      svg {
        margin-right: 0.5rem;
      }

      &.empty {
        border: 1px solid var(--red);
        color: var(--red);
      }

      &.finish {
        background: var(--color-primary);
        color: white;
      }

      &.goback {
        border: 1px solid var(--color-primary);
        background: white;
        color: var(--color-primary);
      }

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`

export const CartContainerFooter = styled(CartContainer)`
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: space-between;
`

export const ProductItem = styled.div<{ active: boolean }>`
  height: 96px;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  padding-left: 1.5rem;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background: var(--gray-150);
  }

  @media (max-width: 430px) {
    border: 2px solid #5d1a82;
    box-sizing: border-box;
    border-radius: 8px;
    min-height: 130px;
    width: 350px;

    .img-container {
      width: 115px;
      height: 115px;
      display: flex;
      align-items: center;

      img {
        display: block;
      }
    }
  }

  ${(props) =>
    props.active &&
    `
  background: #FFF6ED;
  border: 1px solid #FF7A00;`}

  .img-container {
    display: flex;

    border-radius: 8px;
    background: #f3f3f3;
    object-fit: contain;

    img {
      border-radius: 8px;
      width: 81px;
      height: 81px;
    }
  }

  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25rem 1rem;

    h4 {
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      font-weight: 600;
    }
  }
`

export const ModalContainer = styled.div`
  width: auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    padding-bottom: 170px;
  }

  ${[sizes.down('lgMob')]} {
    width: 100%;
  }
  span {
    font-size: var(--font-size-md);
  }
  .exit-container {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    align-items: center;

    @media (max-width: 430px) {
      justify-content: space-around;
    }

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-size: 24px;

      color: var(--gray-700);

      @media (max-width: 430px) {
        font-size: 18px;
      }
    }

    svg {
      cursor: pointer;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    ${[sizes.down('lgMob')]} {
      .row {
        flex-direction: column;
      }

      .mid {
        flex-direction: row;
      }
    }

    .row {
      display: flex;
      gap: 1rem;

      @media (max-width: 430px) {
        .input-logradouro-number {
          padding-left: 0px;
          margin-left: -10px;
        }
      }
    }
  }

  .buttons-container {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 0 12.5%;
  }
`

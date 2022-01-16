import Head from 'next/head'
import styled from 'styled-components'
import HeaderProducts from 'components/molecules/HeaderShop'
import { BsWhatsapp } from 'react-icons/bs'
import { FiChevronLeft, FiPlus, FiArrowLeft } from 'react-icons/fi'
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
import { SubmitHandler, useForm } from 'react-hook-form'
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

type PaymentForm = {
  value: string
  label: string
}

type adressRegisterFormData = {
  state: string
  city: string
  publicPlace: string
  number: string
  district: string
  cep: string
}

const adressRegisterFormSchema = yup.object().shape({
  state: yup.string().required('Estado obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  publicPlace: yup.string().required('Logradouro obrigatório'),
  number: yup.string().required('obrigatório'),
  district: yup.string().required('Bairro obrigatório'),
  cep: yup.string().required('CEP obrigatório').min(9, 'Mínimo 8 caracteres')
})

type AddressProps = {
  uf: string
  city: string
  zipcode: string
  addressNumber: string
  complement: string
  neighborhood: string
  street: string
}

const CartContinue = () => {
  const { items, setItems } = useContext(CartContext)
  const [addAdressModal, setAddAdressModal] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState({})
  const [addressUser, setAddressUser] = useState<AddressProps | undefined>(
    {} as AddressProps
  )

  // Estado Modal Clear Items
  const [itemsClear, setItemsClear] = useState(false)
  const [parcel, setParcel] = useState(false)

  function toggleParcel() {
    setParcel(!parcel)
  }

  function handleClear() {
    setItemsClear(!itemsClear)
  }

  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price) * Number(curr.amount)
  }, 0)

  const [paymentForm, setPaymentForm] = useState<PaymentForm>({
    value: '0',
    label: 'Cartão de crédito'
  })

  const [installments, setInstallments] = useState<PaymentForm>({
    value: '0',
    label: '1x'
  })

  const paymentForms = [
    {
      value: '0',
      label: 'Cartão de crédito'
    },
    {
      value: '1',
      label: 'Cartão de debito'
    },
    {
      value: '2',
      label: 'Pix'
    },
    {
      value: '3',
      label: 'Boleto'
    }
  ]

  const Installments = [...Array(12)].map((it, idx) => ({
    value: String(idx + 1),
    label: idx + 1 + 'x'
  }))

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(adressRegisterFormSchema)
  })

  const widthScreen = useMedia({ minWidth: '426px' })

  async function handleFinishPurcharse() {
    try {
      let data
      if (!widthScreen) {
        const stores = []

        items.forEach((it) => {
          if (stores.some((store) => store.storeId == it.storeId)) {
            stores.find((store) =>
              store.orderProducts.push({
                productId: it.productId,
                amount: it.amount
              })
            )
          } else {
            stores.push({
              storeId: it.storeId,
              orderProducts: [
                {
                  productId: it.productId,
                  amount: it.amount
                }
              ]
            })
          }
        })

        const res = await api.post(`/orders`, {
          products: [...stores]
        })

        data = res.data
      } else {
        const stores = []

        items.forEach((it) => {
          if (stores.some((store) => store.storeId == it.storeId)) {
            stores.find((store) =>
              store.orderProducts.push({
                productId: it.productId,
                amount: it.amount
              })
            )
          } else {
            stores.push({
              storeId: it.storeId,
              orderProducts: [
                {
                  productId: it.productId,
                  amount: it.amount
                }
              ]
            })
          }
        })

        const res = await api.post(`/orders`, {
          products: [...stores]
        })

        data = res.data
      }

      localStorage.setItem('ultimo.cart.items', '')
      data.whatsapp.forEach((it) => window.open(it))
      router.push('/cart/finish')
    } catch (e) {
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

  async function loadCEP(data) {
    console.log(data.value)
  }

  async function loadData() {
    try {
      // Consumindo os dados da /me para popular a tela de checkout
      const response = await getUser()
      if (response.status == 200) {
        const data = response?.data
        const name = `${data?.firstName} ${data?.lastName}`
        setName(name)
        setAddressUser({
          uf: data?.uf,
          city: data?.city,
          zipcode: data?.zipcode,
          addressNumber: data?.addressNumber,
          complement: data?.complement,
          neighborhood: data?.neighborhood,
          street: data?.street
        })
      }
    } catch (error) {
      // router.push('/login')
      console.log(error)
    }
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title>Carrinho | Último</title>
      </Head>

      <HeaderProducts />

      <CustomModal
        buttons={false}
        modalVisible={itemsClear}
        setModalOpen={handleClear}
      >
        <ModalContainer>
          {/* <div className="clearContainer"> */}
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
                handleClear()
              }}
              style={{ marginBottom: 'var(--spacing-xxs)' }}
            />
            <span onClick={handleClear}>CANCELAR</span>
          </div>
          {/* </div> */}
        </ModalContainer>
      </CustomModal>

      <CustomModal
        buttons={false}
        setModalOpen={() => {
          setAddAdressModal(!addAdressModal)
        }}
        modalVisible={addAdressModal}
        under={!widthScreen}
      >
        <ModalContainer>
          <div className="exit-container">
            <FiArrowLeft
              size={25}
              color="black"
              onClick={() => setAddAdressModal(false)}
              style={widthScreen ? { display: 'none' } : undefined}
            />
            <h1>Adicionar novo endereço</h1>

            <IoIosClose
              onClick={() => setAddAdressModal(false)}
              size={36}
              color={'black'}
              style={widthScreen ? undefined : { display: 'none' }}
            />
          </div>

          <form className="input-container">
            <div className="row">
              <Input
                label="CEP"
                placeholder="00000-000"
                mask="cep"
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
                {...register('cep')}
                textError={errors.cep?.message}
                error={errors.cep}
                maxLength={9}
                onChange={(e) => loadCEP(e)}
              />

              <Input
                label="Bairro"
                placeholder="Bairro"
                icon={<BiMapAlt size={20} color="var(--black-800)" />}
                {...register('district')}
                textError={errors.district?.message}
                error={errors.district}
              />
            </div>

            <div className="row mid">
              <Input
                label="Logradouro"
                placeholder="Logradouro"
                flex={3}
                icon={<FaHome size={20} color="var(--black-800)" />}
                {...register('publicPlace')}
                textError={errors.publicPlace?.message}
                error={errors.publicPlace}
              />

              <Input
                label="Número"
                placeholder="0000"
                mask="number"
                flex={1}
                type="numeric"
                maxLength={6}
                icon={<BiBuildings size={20} color="var(--black-800)" />}
                {...register('number')}
                textError={errors.number?.message}
                error={errors.number}
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
                {...register('state')}
                textError={errors.state?.message}
                error={errors.state}
                maxLength={45}
              />
            </div>

            <div className="buttons-container">
              <Button
                title="Voltar"
                border
                style={widthScreen ? undefined : { display: 'none' }}
              />
              <Button title="Adicionar" style={{ marginBottom: 80 }} />
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
              <AdressCard>
                <h1>Endereço</h1>

                <AdressInfo>
                  <span>
                    <strong>Nome do usuário:</strong> {name}
                  </span>

                  <span>
                    <strong>Endereço: </strong>
                    {addressUser?.street} {addressUser?.addressNumber},{' '}
                    {addressUser?.neighborhood},{addressUser?.city},{' '}
                    {addressUser?.uf}, {addressUser?.zipcode}, Brasil
                  </span>

                  <span>
                    <strong>Telefone: </strong> 8999821-1234
                  </span>
                </AdressInfo>

                <NewAdressButton onClick={() => setAddAdressModal(true)}>
                  <FiPlus size={24} />
                  Adicionar novo endereço
                </NewAdressButton>

                <h1>Forma de pagamento</h1>

                <div
                  style={{ display: 'flex', gap: 16 }}
                  className="paymentContainer"
                >
                  <Select
                    name="Forma de pagamento"
                    options={paymentForms}
                    selectedValue={paymentForm}
                    setSelectedValue={setPaymentForm}
                    loading={false}
                    placeholder="Selecione sua forma de pagamento"
                  />

                  {paymentForm?.value === '0' && widthScreen && (
                    <Select
                      name="Parcelamento"
                      options={Installments}
                      selectedValue={installments}
                      setSelectedValue={setInstallments}
                      loading={false}
                      placeholder="Selecione o número de parcelas"
                    />
                  )}

                  {!widthScreen && (
                    <>
                      <Checkbox
                        confirm={parcel}
                        toggleConfirm={toggleParcel}
                        label="Parcelar Compra"
                      />
                      <Select
                        name="Parcelamento"
                        options={Installments}
                        selectedValue={installments}
                        setSelectedValue={setInstallments}
                        loading={false}
                        placeholder="Selecione o número de parcelas"
                        style={parcel ? undefined : { display: 'none' }}
                      />
                    </>
                  )}
                </div>
              </AdressCard>

              <ProductsContainer>
                <h1>Produtos</h1>

                <div className="productscontainer">
                  {items.map((it) => (
                    <ProductItem key={it.productId}>
                      <div className="imgcontainer">
                        <img src="" alt="" />
                      </div>

                      <div className="infocontainer">
                        <h4>{it.title}</h4>

                        <span>{it.amount}x</span>
                      </div>
                    </ProductItem>
                  ))}
                </div>
              </ProductsContainer>
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
                    <strong>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(total)}
                    </strong>
                  </div>
                  <span className="spanBottom"></span>
                </div>

                <div className="buttonContainer">
                  <button className="finish" onClick={handleFinishPurcharse}>
                    <BsWhatsapp size={24} color="white" />
                    FINALIZAR COMPRA
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
                    <strong>
                      {!widthScreen
                        ? new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(
                            items
                              .filter((it) => it.enabled)
                              .reduce((prev, curr) => {
                                return (
                                  prev +
                                  Number(curr.price) * Number(curr.amount)
                                )
                              }, 0)
                          )
                        : new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(total)}
                    </strong>
                  </div>
                  <span className="spanBottom">
                    {items.filter((it) => it.enabled).length <= 1
                      ? items.length + ' item'
                      : items.length + ' itens'}
                    {!widthScreen && (
                      <a onClick={handleClear}>Esvaziar Carrinho</a>
                    )}
                  </span>
                </div>
                <div className="buttonContainerMob">
                  <button className="finish" onClick={handleFinishPurcharse}>
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
  height: 67vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;

  .top-container {
    display: flex;
    height: 80%;
    gap: 2rem;
    min-height: 350px;
  }
`

const AdressCard = styled.section`
  flex: 3;
  height: 100%;
  background: white;
  border-radius: 30px;
  padding: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${[sizes.down('lgMob')]} {
    box-shadow: none;
    max-width: 100vw;

    .paymentContainer {
      display: flex;
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
`

const AdressInfo = styled.div`
  width: 100%;
  background: #fff6ed;
  border: 1px solid var(--color-primary);
  padding: 0.9rem 0.75rem;
  border-radius: 11px;
  margin-top: 0.5rem;
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

const NewAdressButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  background: transparent;
  border: none;
  font-weight: bold;
  margin-top: 0.5rem;
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
  flex: 1;
  height: 100%;
  background: white;
  border-radius: 30px;
  padding: 2rem 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;

  ${[sizes.down('lgMob')]} {
    display: none;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .productscontainer {
    flex: 1;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
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
    }
  }
`

export const CartContainerFooter = styled(CartContainer)`
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: space-between;
`

export const ProductItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  .imgcontainer {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background: #f3f3f3;
  }

  .infocontainer {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25rem 1rem;

    h4 {
      font-size: 1rem;
    }
  }
`

export const ModalContainer = styled.div`
  width: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: var(--font-size-md);
  }
  .exit-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-size: 24px;

      color: var(--gray-700);
    }

    svg {
      cursor: pointer;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${[sizes.down('lgMob')]} {
      width: 100%;

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
    }
  }

  .buttons-container {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 0 12.5%;
  }
`

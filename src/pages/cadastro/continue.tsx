import Header from '../../components/molecules/Header'
import Head from 'next/head'
import Link from 'next/link'
import { Wrapper, ContainerLojist } from '../../styles/pages/preLogin'

import { FiMail, FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Input } from '../../components/molecules/Input'
import { useState, useEffect } from 'react'
import { Button } from '../../components/atoms/Button'
import { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiBuildings, BiMapAlt } from 'react-icons/bi'
import Router from 'next/router'
import { ShopkeeperContext } from '../../contexts/ShopkeeperContext'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMedia } from 'use-media'
import { CheckboxFilter } from 'components/atoms/CheckboxFilter'
import router from 'next/router'

type registerFormData = {
  firstName: string
  lastName: string
  clientState: string
  clientCity: string
  publicPlace: string
  number: string
  district: string
  cep: string
}

const RegisterFormSchema = yup.object().shape({
  firstName: yup.string().required('Nome obrigatório'),
  lastName: yup.string().required('Sobrenome obrigatório'),
  clientState: yup.string().required('Estado obrigatório'),
  clientCity: yup.string().required('Cidade obrigatória'),
  publicPlace: yup.string().required('Logradouro obrigatório'),
  number: yup.string().required('obrigatório'),
  district: yup.string().required('Bairro obrigatório'),
  cep: yup.string().required('CEP obrigatório').min(9, 'Mínimo 8 caracteres')
})

const BusinessRegister = () => {
  // Estados, funções e variáveis referentes a responsividade da tela
  const [show, setShow] = useState(0)
  const [terms, setTerms] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const widthScreen = useMedia({ minWidth: '426px' })

  function showNext() {
    setShow(show + 1)
  }

  function showPrevious() {
    setShow(show - 1)
  }
  //

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('data'))
    if (data) {
      setValue('publicPlace', data.publicPlace)
      setValue('cep', data.cep)
      setValue('district', data.district)
      setValue('number', data.number)
      setValue('city', data.city)
      setValue('state', data.state)
    }
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm({
    resolver: yupResolver(RegisterFormSchema)
  })

  const handleContinueRegister: SubmitHandler<registerFormData> = async (
    values,
    event
  ) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      city: values.clientCity,
      state: values.clientState,
      publicPlace: values.publicPlace,
      number: values.number,
      district: values.district,
      cep: values.cep,
      ...userInfo
    }

    // const res = await signUp(user)

    // if (res.status === 200 || res.status === 201) {
    //   return router.push('/confirmacao-cadastro')
    // }
  }

  useEffect(() => {
    const userData = localStorage.getItem('ultimo.register.user')

    if (!userData) {
      router.push('/cadastro')
    } else {
      setUserInfo(JSON.parse(userData))
    }
  }, [])

  return (
    <Wrapper>
      <Head>
        <title> Cadastro | Último</title>
      </Head>

      <Header />
      <ContainerLojist>
        <form onSubmit={handleSubmit(handleContinueRegister)}>
          <div className="title">
            <h1> Cadastro </h1>
          </div>
          {widthScreen ? (
            <div className="inputContainer">
              <div>
                <div className="inputRow">
                  <Input
                    label="Nome do cliente"
                    placeholder="Nome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('firstName')}
                    textError={errors.firstName?.message}
                    error={errors.firstName}
                    maxLength={45}
                  />
                </div>

                <div className="inputRow">
                  <Input
                    label="Sobrenome do cliente"
                    placeholder="Sobrenome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('lastName')}
                    textError={errors.lastName?.message}
                    error={errors.lastName}
                    maxLength={45}
                  />
                </div>

                <div className="inputRow">
                  <CheckboxFilter
                    confirm={terms}
                    toggleConfirm={() => setTerms(!terms)}
                  >
                    <span>
                      Li e concordo com os <a href="#">termos de uso</a> e{' '}
                      <a href="#">política de privacidade</a>
                    </span>
                  </CheckboxFilter>
                </div>
              </div>
              <div>
                <div className="inputRow">
                  <Input
                    label="CEP"
                    placeholder="00000-000"
                    mask="cep"
                    icon={<BiMapAlt size={20} color="var(--black-800)" />}
                    {...register('cep')}
                    textError={errors.cep?.message}
                    error={errors.cep}
                    maxLength={45}
                  />

                  <Input
                    label="Bairro"
                    placeholder="Bairro"
                    icon={<BiMapAlt size={20} color="var(--black-800)" />}
                    {...register('district')}
                    textError={errors.district?.message}
                    error={errors.district}
                    maxLength={45}
                  />
                </div>

                <div className="inputRow">
                  <Input
                    label="Logradouro"
                    placeholder="Logradouro"
                    flex={3}
                    icon={<FaHome size={20} color="var(--black-800)" />}
                    {...register('publicPlace')}
                    textError={errors.publicPlace?.message}
                    error={errors.publicPlace}
                    maxLength={45}
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

                <div className="inputRow">
                  <Input
                    label="Estado"
                    placeholder="Estado"
                    icon={
                      <HiOutlineLocationMarker
                        size={20}
                        color="var(--black-800)"
                      />
                    }
                    {...register('clientState')}
                    textError={errors.clientState?.message}
                    error={errors.clientState}
                    maxLength={45}
                  />

                  <Input
                    label="Cidade"
                    placeholder="Cidade"
                    icon={
                      <HiOutlineLocationMarker
                        size={20}
                        color="var(--black-800)"
                      />
                    }
                    {...register('clientCity')}
                    textError={errors.clientCity?.message}
                    error={errors.clientCity}
                    maxLength={45}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="inputContainer">
              <div style={show === 0 ? undefined : { display: 'none' }}>
                <div className="inputRow">
                  <Input
                    label="Nome do cliente"
                    placeholder="Nome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('firstName')}
                    textError={errors.firstName?.message}
                    error={errors.firstName}
                    maxLength={45}
                  />
                </div>

                <div className="inputRow">
                  <Input
                    label="Sobrenome cliente"
                    placeholder="Sobrenome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('lastName')}
                    textError={errors.lastName?.message}
                    error={errors.lastName}
                    maxLength={45}
                  />
                </div>
              </div>
              <div style={show === 1 ? undefined : { display: 'none' }}>
                <div className="inputRow">
                  <Input
                    label="CEP"
                    placeholder="00000-000"
                    mask="cep"
                    icon={<BiMapAlt size={20} color="var(--black-800)" />}
                    {...register('cep')}
                    textError={errors.cep?.message}
                    error={errors.cep}
                    maxLength={45}
                  />

                  <Input
                    label="Estado"
                    placeholder="Estado"
                    icon={
                      <HiOutlineLocationMarker
                        size={20}
                        color="var(--black-800)"
                      />
                    }
                    {...register('clientState')}
                    textError={errors.clientState?.message}
                    error={errors.clientState}
                    maxLength={45}
                  />
                </div>

                <div className="inputRow">
                  <Input
                    label="Cidade"
                    placeholder="Cidade"
                    icon={
                      <HiOutlineLocationMarker
                        size={20}
                        color="var(--black-800)"
                      />
                    }
                    {...register('clientCity')}
                    textError={errors.clientCity?.message}
                    error={errors.clientCity}
                    maxLength={45}
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

                <div className="inputCol">
                  <Input
                    label="Bairro"
                    placeholder="Bairro"
                    icon={<BiMapAlt size={20} color="var(--black-800)" />}
                    {...register('district')}
                    textError={errors.district?.message}
                    error={errors.district}
                  />
                </div>
                <div>
                  <Input
                    label="Logradouro"
                    placeholder="Logradouro"
                    flex={3}
                    icon={<FaHome size={20} color="var(--black-800)" />}
                    {...register('publicPlace')}
                    textError={errors.publicPlace?.message}
                    error={errors.publicPlace}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="buttonContainer">
            <div
              style={
                widthScreen ? { marginRight: '1rem' } : { marginBottom: '1rem' }
              }
            >
              {!widthScreen && show > 0 ? (
                <Button
                  onClick={showPrevious}
                  title="Voltar"
                  type="button"
                  border
                />
              ) : (
                <Button
                  onClick={() => Router.push('/cadastro')}
                  title="Voltar"
                  type="button"
                  border
                />
              )}
            </div>
            <div>
              {!widthScreen && show < 1 ? (
                <Button onClick={showNext} title="Continuar" type="button" />
              ) : (
                <Button type="submit" title="Finalizar" />
              )}
            </div>
          </div>

          <Link href="/login">
            <a style={{ marginTop: '1rem' }}>
              Já possui conta?{' '}
              <strong style={{ textDecoration: 'underline' }}>
                faça login!
              </strong>
            </a>
          </Link>
        </form>
      </ContainerLojist>
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '85%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave1.svg"
        alt="wave 1"
      />
      <img
        style={{
          position: 'absolute',
          bottom: 0,
          height: '65%',
          left: 0,
          right: 0,
          zIndex: -1,
          width: '100%'
        }}
        src="/images/wave2.svg"
        alt="wave 2"
      />
    </Wrapper>
  )
}

export default BusinessRegister

import Header from '../../components/molecules/Header'
import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Wrapper,
  ContainerLojist
} from '../../styles/pages/preLogin'

import { FiMail, FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Input } from '../../components/molecules/Input'
import { Checkbox } from '../../components/atoms/Checkbox'
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

type bussinesRegisterFormData = {
  firstName: string
  lastName: string
  businessName: string
  cpfCnpj: string
  businessState: string
  businessCity: string
  publicPlace: string
  number: string
  district: string
  cep: string
}

const bussinesRegisterFormSchema = yup.object().shape({
  firstName: yup.string().required('Primeiro nome obrigatório'),
  lastName: yup.string().required('Último nome obrigatório'),
  businessName: yup.string().required('Nome do negócio obrigatório'),
  cpfCnpj: yup
    .string()
    .required('CPF ou CNPJ obrigatório')
    .min(14, 'Mínimo 14 caracteres [CPF]')
    .max(18),
  businessState: yup.string().required('Estado obrigatório'),
  businessCity: yup.string().required('Cidade obrigatória'),
  publicPlace: yup.string().required('Logradouro obrigatório'),
  number: yup.string().required('obrigatório'),
  district: yup.string().required('Bairro obrigatório'),
  cep: yup.string().required('CEP obrigatório').min(9, 'Mínimo 8 caracteres')
})

const BusinessRegister = () => {
  const { setStore } = useContext(ShopkeeperContext)
  const [cpfCnpj, setCpfCnpj] = useState('')

  // Estados, funções e variáveis referentes a responsividade da tela
  const [show, setShow] = useState(0)
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
      setValue('firstName', data.firstName)
      setValue('lastName', data.lastName)
      setValue('businessName', data.name)
      setValue('cpfCnpj', data.cpfCnpj)
      // setValue('address', data.address)
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
    getValues,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(bussinesRegisterFormSchema)
  })

  const handleContinueRegister: SubmitHandler<bussinesRegisterFormData> =
    async (values, event) => {
      const store = {
        firstName: values.firstName,
        lastName: values.lastName,
        name: values.businessName,
        cpfCnpj: values.cpfCnpj,
        // address: `${values.publicPlace}, n° ${values.number}, ${values.district}, CEP: ${values.cep}`,
        publicPlace: values.publicPlace,
        number: values.number,
        district: values.district,
        cep: values.cep,
        city: values.businessCity,
        state: values.businessState
      }

      sessionStorage.setItem('data', JSON.stringify(store))
      setStore(store)
      Router.push('/business-register/continue')
    }

  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header />
      <ContainerLojist>
        <form onSubmit={handleSubmit(handleContinueRegister)}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>
          {widthScreen ? (
            <div className="inputContainer">
              <div>
                <div className="inputCol">
                  <Input
                    label="Nome do negócio"
                    placeholder="Nome do negócio"
                    icon={<FiMail size={20} color="var(--black-800)" />}
                    {...register('businessName')}
                    textError={errors.businessName?.message}
                    error={errors.businessName}
                  />
                </div>
                <div className="inputRow">
                  <Input
                    label="Nome"
                    placeholder="Nome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('firstName')}
                    textError={errors.firstName?.message}
                    error={errors.firstName}
                  />

                  <Input
                    label="Sobrenome"
                    placeholder="Sobrenome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('lastName')}
                    textError={errors.lastName?.message}
                    error={errors.lastName}
                  />
                </div>
                <div className="inputCol">
                  <Input
                    label="CPF/CNPJ"
                    placeholder="000.000.000-00"
                    mask={cpfCnpj.length <= 14 ? 'cpf' : 'cnpj'}
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('cpfCnpj')}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    textError={errors.cpfCnpj?.message}
                    error={errors.cpfCnpj}
                  />
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

                <div className="inputRow">
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
                    {...register('businessState')}
                    textError={errors.businessState?.message}
                    error={errors.businessState}
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
                    {...register('businessCity')}
                    textError={errors.businessCity?.message}
                    error={errors.businessCity}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="inputContainer">
              <div style={show === 0 ? undefined : { display: 'none' }}>
                <div className="inputCol">
                  <Input
                    label="Nome do negócio"
                    placeholder="Nome do negócio"
                    icon={<FiMail size={20} color="var(--black-800)" />}
                    {...register('businessName')}
                    textError={errors.businessName?.message}
                    error={errors.businessName}
                  />
                </div>
                <div className="inputRow">
                  <Input
                    label="Nome"
                    placeholder="Nome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('firstName')}
                    textError={errors.firstName?.message}
                    error={errors.firstName}
                  />

                  <Input
                    label="Sobrenome"
                    placeholder="Sobrenome"
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('lastName')}
                    textError={errors.lastName?.message}
                    error={errors.lastName}
                  />
                </div>
                <div className="inputCol">
                  <Input
                    label="CPF/CNPJ"
                    placeholder="000.000.000-00"
                    mask={cpfCnpj.length <= 14 ? 'cpf' : 'cnpj'}
                    icon={<FiUser size={20} color="var(--black-800)" />}
                    {...register('cpfCnpj')}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    textError={errors.cpfCnpj?.message}
                    error={errors.cpfCnpj}
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
                    {...register('businessState')}
                    textError={errors.businessState?.message}
                    error={errors.businessState}
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
                    {...register('businessCity')}
                    textError={errors.businessCity?.message}
                    error={errors.businessCity}
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
              {!widthScreen && show < 3 ? (
                <Button onClick={showNext} title="Continuar" type="button" />
              ) : (
                <Button type="submit" title="Continuar" />
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
    </Wrapper>
  )
}

export default BusinessRegister

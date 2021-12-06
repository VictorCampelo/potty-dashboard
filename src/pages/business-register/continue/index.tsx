import Header from '../../../components/molecules/Header'
import Head from 'next/head'
import { Container, Wrapper } from '../../../styles/pages/preLogin'

import { Input } from '../../../components/molecules/Input'
import { useContext, useState } from 'react'
import { Button } from '../../../components/atoms/Button'
import Router from 'next/router'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineWhatsApp
} from 'react-icons/ai'
import { ShopkeeperContext } from '../../../contexts/ShopkeeperContext'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

type bussinesRegisterFormData = {
  number: string
  facebookUrl: string
  instagramUrl: string
  whatsappUrl: string
}

const bussinesRegisterFormSchema = yup.object().shape({
  number: yup.string().required('Telefone obrigatório'),
  facebookUrl: yup.string().required('Facebook obrigatório'),
  instagramUrl: yup.string().required('Instagram obrigatório'),
  whatsappUrl: yup.string().required('Whatsapp obrigatório')
})

const BusinessRegister = () => {
  const { setStore, storeDto } = useContext(ShopkeeperContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({
    resolver: yupResolver(bussinesRegisterFormSchema)
  })

  const handleFinishRegister: SubmitHandler<bussinesRegisterFormData> = async (
    values,
    event
  ) => {
    const store = {
      ...storeDto,
      phone: values.number,
      facebook_link: values.facebookUrl,
      instagram_link: values.instagramUrl,
      whatsapp_link: values.whatsappUrl
    }

    setStore(store)

    Router.push('/business-register/finish')
  }

  return (
    <Wrapper>
      <Head>
        <title> Registro de Negócio | Último</title>
      </Head>

      <Header />
      <Container>
        <form onSubmit={handleSubmit(handleFinishRegister)}>
          <div className="title">
            <h1> Registro de Negócio </h1>
          </div>

          <div className="inputContainer">
            <Input
              label="Telefone"
              placeholder="(00) 0000-0000"
              mask="phone"
              icon={<AiFillPhone size={20} color="var(--black-800)" />}
              {...register('number')}
              textError={errors.number?.message}
              error={errors.number}
            />

            <Input
              label="Facebook"
              placeholder="facebook.com/exemplo"
              icon={<AiFillFacebook size={20} color="var(--black-800)" />}
              {...register('facebookUrl')}
              textError={errors.facebookUrl?.message}
              error={errors.facebookUrl}
            />

            <Input
              label="Instagram"
              placeholder="instagram.com/exemplo"
              icon={<AiFillInstagram size={20} color="var(--black-800)" />}
              {...register('instagramUrl')}
              textError={errors.instagramUrl?.message}
              error={errors.instagramUrl}
            />

            <Input
              label="Whatsapp"
              placeholder="wa.me/550000000000"
              icon={<AiOutlineWhatsApp size={20} color="var(--black-800)" />}
              {...register('whatsappUrl')}
              textError={errors.whatsappUrl?.message}
              error={errors.whatsappUrl}
            />
          </div>

          <div className="buttonContainer">
            <Button type="submit" title="CONTINUAR" />
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default BusinessRegister

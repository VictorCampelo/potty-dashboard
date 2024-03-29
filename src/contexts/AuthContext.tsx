import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import { api } from 'services/apiClient'
import { AxiosResponse } from 'axios'

type SignInCredentials = {
  email: string
  password: string
}

type User = {
  email: string
  firstName?: string
  lastName?: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<AxiosResponse<any>>
  signOut: () => void
  isAuthenticaded: boolean
  user: User
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export function signOut() {
  destroyCookie(undefined, 'ultimo.auth.token')
  destroyCookie(undefined, 'ultimo.auth.refreshToken')

  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null)
  const isAuthenticaded = !!user

  useEffect(() => {
    const { 'ultimo.auth.token': token } = parseCookies()
    if (token) {
      api
        .get('/users/me')
        .then((res) => {
          const { email, firstName, lastName } = res.data
          setUser({ email, firstName, lastName })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    const res = await api.post('/auth/signin', {
      email,
      password
    })

    const token = res.data.jwtToken

    setCookie(undefined, 'ultimo.auth.token', token, {
      maxAge: 60 * 60 * 24 * 30, // 1 month
      path: '/'
      // secure: true,
    })

    setUser({
      email
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    return res
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticaded, user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

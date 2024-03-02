import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { signOut } from 'contexts/AuthContext'
import { AuthTokenError } from 'services/errors/AuthTokenError'

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    // baseURL: 'https://api-dev.boadevenda.com',
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies['ultimo.auth.token']}`
    }
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error?.response?.status === 412) {
        document
          .querySelector('body')
          .dispatchEvent(new Event('non-subscribe-modal-show'))
      }

      if (error?.response?.status === 401) {
        if (error?.response?.data?.code === 'token.expired') {
          if (process.browser) {
            signOut()
          } else {
            return Promise.reject(new AuthTokenError())
          }
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}

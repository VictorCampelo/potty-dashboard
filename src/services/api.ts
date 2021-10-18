import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies'; 
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://f631-2804-28c8-8211-8140-e122-f398-e743-1d5a.ngrok.io/',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${cookies['atrium.auth.token']}`
    }
  })

  api.interceptors.response.use(response => {
    return response
  }, (error: AxiosError) => {
    if(error.response.status === 401) {
      if(error.response.data?.code === 'token.expired') {
        if(process.browser) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
    }

    return Promise.reject(error);
  });

  return api;
}
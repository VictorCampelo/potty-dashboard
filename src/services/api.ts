import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies'; 
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
<<<<<<< HEAD
<<<<<<< Updated upstream
    baseURL: 'http://localhost:3030',
=======
    baseURL: 'http://9203-2804-28c8-8215-4e01-394c-5170-ea5e-1be2.ngrok.io',
>>>>>>> Stashed changes
=======
    baseURL: 'c',
>>>>>>> 9fcc2eda3a98bb4fd7bd36114e99068bf552ba7d
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies['ultimo.auth.token']}`
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
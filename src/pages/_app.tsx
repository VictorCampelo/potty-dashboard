import { AuthProvider } from '../contexts/AuthContext'
import GlobalStyle from '../layout/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  ) 
}

export default MyApp

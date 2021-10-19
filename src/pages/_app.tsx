import { AuthProvider } from '../contexts/AuthContext'
import { ShopkeeperProvider } from '../contexts/ShopkeeperContext'
import GlobalStyle from '../layout/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ShopkeeperProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ShopkeeperProvider>
    </AuthProvider>
  ) 
}

export default MyApp

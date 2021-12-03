import { CartProvider } from 'contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../contexts/AuthContext'
import { RenderFieldProvider } from '../contexts/RenderFieldContext'
import { ShopkeeperProvider } from '../contexts/ShopkeeperContext'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ShopkeeperProvider>
        <CartProvider>
          <RenderFieldProvider>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </RenderFieldProvider>
        </CartProvider>
      </ShopkeeperProvider>
    </AuthProvider>
  )
}

export default MyApp

import { CartProvider } from 'contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from 'contexts/AuthContext'
import { ShopkeeperProvider } from 'contexts/ShopkeeperContext'
import { NonSubscribeProvider } from 'contexts/NonSubscribeContext'
import GlobalStyle from 'styles/GlobalStyle'
import ModalNonSubscribe from 'components/molecules/ModalNonSubscribe'
import 'swiper/css'

function MyApp({ Component, pageProps }) {
  return (
    <NonSubscribeProvider>
      <AuthProvider>
        <ShopkeeperProvider>
          <CartProvider>
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
            <ModalNonSubscribe />
          </CartProvider>
        </ShopkeeperProvider>
      </AuthProvider>
    </NonSubscribeProvider>
  )
}

export default MyApp

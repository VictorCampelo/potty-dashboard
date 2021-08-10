import GlobalStyle from '../layout/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

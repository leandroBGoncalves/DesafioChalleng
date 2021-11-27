import { AppProps } from 'next/app'
import Header from '../components/Header'
import { GlobalStyle } from '../styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <GlobalStyle />
    </>
  )
}

export default MyApp

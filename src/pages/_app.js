
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return( <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

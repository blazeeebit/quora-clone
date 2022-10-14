import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainAppLayout from '../components/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainAppLayout>
      <Component {...pageProps} />
    </MainAppLayout>
  )
}

export default MyApp

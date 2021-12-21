import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to airbnb-clone-webapp!</title>
    </Head>
    <main className="app">
      <Component {...pageProps} />
    </main>
  </>
)

export default App

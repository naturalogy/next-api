import Head from 'next/head'
import '../assets/sass/main.scss'
import '@fontsource/noto-sans-jp'
import '@fontsource/noto-sans-jp/700.css'
import { Container } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.scss'

const App = ({ Component, pageProps }) => (
  <Container as="main" className="py-xl">
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Component {...pageProps} />
  </Container>
)

export default App

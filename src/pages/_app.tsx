import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return(
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  ) 
}

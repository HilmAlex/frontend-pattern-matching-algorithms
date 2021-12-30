import type { NextPage } from 'next'
import { Header } from '@components/Header'
import { Main } from '@components/Main'
import { Footer } from '@components/Footer'
import { MainProvider } from 'providers/Main.provider'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainProvider>
        <Main />
      </MainProvider>
      <Footer />
    </>
  )
}

export default Home

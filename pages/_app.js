import React from 'react'
import '../styles/globals.css'
import { Layout } from '../components'
import { Toaster } from 'react-hot-toast'
import { StateContext } from '../context/StateContext'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <StateContext>
        <Layout>
          <Toaster/>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ChakraProvider>
  )
}

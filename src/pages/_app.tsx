import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from 'utils'
import { CssBaseline } from '@mui/material'
import { Layout } from 'components/Layout'
import { AppThemeProvider } from 'components/Theme'
import { Web3ReactProvider } from '@web3-react/core'
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider
} from '@ethersproject/providers'

import '@fontsource/fira-code/300.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/700.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider)
}

const App: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Blockchain monitor</title>
          <meta
            name="description"
            content="Data mining tool for evm compatible blockchain"
          />
        </Head>
        <AppThemeProvider>
          <CssBaseline />
          <Web3ReactProvider getLibrary={getLibrary}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Web3ReactProvider>
        </AppThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App

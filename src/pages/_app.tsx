import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import createEmotionCache from 'styles/createEmotionCache'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <>
      <Head>
        <title>Blockchain monitor</title>
        <meta
          name="description"
          content="Data mining tool for evm compatible blockchain"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  )
}

export default App

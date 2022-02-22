import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import createEmotionCache from 'styles/createEmotionCache'

import '@fontsource/fira-code/300.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/700.css'
import { Layout } from 'components/layout'

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </>
  )
}

export default App

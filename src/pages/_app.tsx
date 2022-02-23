import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'utils/createEmotionCache'
import { CssBaseline } from '@mui/material'
import { Layout } from 'components/Layout'
import { AppThemeProvider } from 'components/Theme/AppThemeProvider'

import '@fontsource/fira-code/300.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/700.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  //disable ssr for user theme preferences in localstorage
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

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
        <AppThemeProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App

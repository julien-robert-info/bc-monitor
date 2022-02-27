import React from 'react'
import { Box, Container } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { EtherSWRConfig } from 'ether-swr'
import { networkConnector } from 'utils/networks'
import Header from './Header'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { active, activate, library, chainId } = useWeb3React()

  React.useEffect(() => {
    async function connect() {
      if (!active) {
        try {
          await activate(networkConnector)
        } catch (e) {
          console.log(e)
        }
      }
    }
    connect()
  }, [active, activate])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container>
          {active && chainId && (
            <EtherSWRConfig
              value={{
                web3Provider: library
              }}
            >
              {children}
            </EtherSWRConfig>
          )}
        </Container>
      </Box>
    </>
  )
}

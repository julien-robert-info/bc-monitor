import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { ThemeSwitcher } from './Theme/ThemeSwitcher'
import { useWeb3React } from '@web3-react/core'
import { EtherSWRConfig } from 'ether-swr'
import { networkConnector } from 'utils/networks'
import SelectNetwork from './SelectNetwork'

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
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Bc-monitor
            </Typography>
            <SelectNetwork />
            <ThemeSwitcher />
          </Toolbar>
        </AppBar>
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

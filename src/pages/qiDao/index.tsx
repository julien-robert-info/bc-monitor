import React from 'react'
import { Box, Grid } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { qiVaults } from 'data/qiVaults'
import QiVaultCard from 'components/QiVaultCard'

const QiDao = () => {
  const { chainId } = useWeb3React()
  const vaults = chainId !== undefined ? qiVaults[chainId] : []

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: '5em' }}>
      <Grid container spacing={3}>
        {vaults &&
          vaults.map((vault) => (
            <Grid item xs={4} key={vault.token}>
              <QiVaultCard token={vault.token} address={vault.address} />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default QiDao

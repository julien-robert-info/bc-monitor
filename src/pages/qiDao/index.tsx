import React from 'react'
import { Box, Grid } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { qiVaults } from 'data/qiVaults'
import QiVaultCard from 'components/QiVaultCard'
import useEtherSWR from 'ether-swr'
import { formatEther } from 'ethers/lib/utils'

const QiDao = () => {
  const { chainId } = useWeb3React()
  const vaults = chainId !== undefined ? qiVaults[chainId] : []

  const vaultCountQuery = vaults
    ? vaults.map((vault) => [vault.address, 'vaultCount'])
    : []
  const { data: vaultCount } = useEtherSWR(vaultCountQuery)

  const minCollatQuery = vaults
    ? vaults.map((vault) => [vault.address, '_minimumCollateralPercentage'])
    : []
  const { data: minCollat } = useEtherSWR(minCollatQuery)

  const borrowSupplyQuery = vaults
    ? vaults.map((vault) => [vault.address, 'getDebtCeiling'])
    : []
  const { data: borrowSupply } = useEtherSWR(borrowSupplyQuery)

  const currencyFormat = () => new Intl.NumberFormat()

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: '5em' }}>
      {vaultCount && minCollat && borrowSupply && (
        <Grid container spacing={3}>
          {vaults.map((vault, index) => (
            <Grid item xs={4} key={vault.token}>
              <QiVaultCard
                token={vault.token}
                address={vault.address}
                vaultcount={parseInt(vaultCount[index]._hex, 16)}
                minCollat={parseInt(minCollat[index]._hex, 16)}
                borrowSupply={currencyFormat().format(
                  parseFloat(formatEther(borrowSupply[index]))
                )}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default QiDao

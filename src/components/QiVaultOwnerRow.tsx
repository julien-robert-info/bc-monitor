import React from 'react'
import { Divider, ListItem, ListItemText, Skeleton, Grid } from '@mui/material'
import useEtherSWR from 'ether-swr'
import { formatEther } from 'ethers/lib/utils'
import { currencyFormat } from 'utils'

const QiVaultOwnerRow: React.FC<{ address: string; vaultId: number }> = ({
  address,
  vaultId
}) => {
  const { data: owner } = useEtherSWR([address, 'ownerOf', vaultId])
  const { data: collateralRatio } = useEtherSWR([
    address,
    'checkCollateralPercentage',
    vaultId
  ])
  const { data: collateral } = useEtherSWR([
    address,
    'vaultCollateral',
    vaultId
  ])
  const { data: debt } = useEtherSWR([address, 'vaultDebt', vaultId])

  return (
    <>
      {collateralRatio > 0 && (
        <>
          <ListItem alignItems="center">
            <Grid container>
              <Grid item xs={1}>
                <ListItemText primary={vaultId} />
              </Grid>
              <Grid item xs={4}>
                {owner ? <ListItemText secondary={owner} /> : <Skeleton />}
              </Grid>
              <Grid item xs={3}>
                {collateral ? (
                  <ListItemText
                    primary={
                      'Collateral: ' +
                      currencyFormat().format(
                        parseFloat(formatEther(collateral))
                      )
                    }
                  />
                ) : (
                  <Skeleton />
                )}
              </Grid>
              <Grid item xs={2}>
                {debt ? (
                  <ListItemText
                    primary={
                      'Debt: ' +
                      currencyFormat().format(parseFloat(formatEther(debt)))
                    }
                  />
                ) : (
                  <Skeleton />
                )}
              </Grid>
              <Grid item xs={2}>
                {collateralRatio ? (
                  <ListItemText
                    primary={'Health factor: ' + collateralRatio + '%'}
                  />
                ) : (
                  <Skeleton />
                )}
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
        </>
      )}
    </>
  )
}

export default QiVaultOwnerRow

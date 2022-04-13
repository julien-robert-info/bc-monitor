import React from 'react'
import { Divider, ListItem, ListItemText, Skeleton, Grid } from '@mui/material'
import { formatEther } from 'ethers/lib/utils'
import { currencyFormat } from 'utils'
import useEtherSWR from 'ether-swr'

interface QiVaultOwnerRowProps {
  address: string
  vaultId: number
  lastLoaded: number
  setLastLoaded: any
}

const QiVaultOwnerRow: React.FC<QiVaultOwnerRowProps> = ({
  address,
  vaultId,
  lastLoaded,
  setLastLoaded
}) => {
  const { data: owner, error } = useEtherSWR([
    [address, 'ownerOf', vaultId],
    [address, 'vaultCollateral', vaultId],
    [address, 'vaultDebt', vaultId],
    [address, 'checkCollateralPercentage', vaultId]
  ])

  React.useEffect(() => {
    if (owner && !error && lastLoaded < vaultId) {
      setLastLoaded(vaultId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owner, error])

  return (
    <>
      {owner && owner[2] > 0 && (
        <>
          <ListItem alignItems="center">
            <Grid container>
              <Grid item xs={1}>
                <ListItemText primary={vaultId} />
              </Grid>
              <Grid item xs={4}>
                <ListItemText secondary={owner[0]} />
              </Grid>
              <Grid item xs={3}>
                <ListItemText
                  primary={
                    'Collateral: ' +
                    currencyFormat().format(parseFloat(formatEther(owner[1])))
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <ListItemText
                  primary={
                    'Debt: ' +
                    currencyFormat().format(parseFloat(formatEther(owner[2])))
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <ListItemText primary={'Health factor: ' + owner[3] + '%'} />
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

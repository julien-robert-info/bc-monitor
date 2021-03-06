import React from 'react'
import { VaultInfo } from 'data/qiVaults'
import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Typography
} from '@mui/material'
import MuiNextLink from './MuiNextLink'
import useEtherSWR from 'ether-swr'
import { formatEther, formatUnits } from 'ethers/lib/utils'
import { currencyFormat } from 'utils'

const QiVaultCard: React.FC<VaultInfo> = ({ token, address }) => {
  const { data: vaultCount } = useEtherSWR([address, 'vaultCount'])
  const { data: minCollat } = useEtherSWR([
    address,
    '_minimumCollateralPercentage'
  ])
  const { data: borrowSupply } = useEtherSWR([address, 'getDebtCeiling'])

  return (
    <Card>
      <CardActionArea component={MuiNextLink} href={'/qiDao/vault/' + address}>
        <CardContent>
          <Typography noWrap variant="h5">
            {token}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vaultCount ? `Owners: ${vaultCount}` : <Skeleton />}
          </Typography>
          <Typography variant="body2">
            {minCollat ? `Min Collateral:  ${minCollat} %` : <Skeleton />}
          </Typography>
          <Typography variant="body2">
            {borrowSupply ? (
              'MAI Available: ' +
              currencyFormat().format(parseFloat(formatEther(borrowSupply)))
            ) : (
              <Skeleton />
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default QiVaultCard

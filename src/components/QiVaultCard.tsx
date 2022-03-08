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

const QiVaultCard: React.FC<VaultInfo> = ({ token, address }) => {
  const currencyFormat = () => new Intl.NumberFormat()

  const { data: vaultCount } = useEtherSWR([address, 'vaultCount'])
  const { data: minCollat } = useEtherSWR([
    address,
    '_minimumCollateralPercentage'
  ])
  const { data: borrowSupply } = useEtherSWR([address, 'getDebtCeiling'])

  return (
    <Card>
      <CardActionArea component={MuiNextLink} href={'/qiDao/' + address}>
        <CardContent>
          <Typography noWrap variant="h5">
            {token}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vaultCount ? (
              'Owners: ' + parseInt(formatUnits(vaultCount, 0))
            ) : (
              <Skeleton />
            )}
          </Typography>
          <Typography variant="body2">
            {minCollat ? (
              'Min Collateral: ' + parseInt(formatUnits(minCollat, 0)) + '%'
            ) : (
              <Skeleton />
            )}
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

import React from 'react'
import { VaultInfo } from 'data/qiVaults'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import MuiNextLink from './MuiNextLink'

interface VaultProps extends VaultInfo {
  vaultcount: number
  minCollat: number
  borrowSupply: string
}

const QiVaultCard: React.FC<VaultProps> = ({
  token,
  address,
  vaultcount,
  minCollat,
  borrowSupply
}) => {
  return (
    <Card>
      <CardActionArea component={MuiNextLink} href={'/qiDao/' + address}>
        <CardContent>
          <Typography noWrap variant="h5" component="div">
            {token}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Owners: {vaultcount}
          </Typography>
          <Typography variant="body2">Min Collateral: {minCollat}%</Typography>
          <Typography variant="body2">MAI Available: {borrowSupply}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default QiVaultCard

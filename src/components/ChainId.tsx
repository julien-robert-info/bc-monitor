import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Skeleton, Typography } from '@mui/material'

const ChainId = () => {
  const { chainId } = useWeb3React()

  return (
    <Typography variant="body2">
      {chainId ? 'Chain Id: ' + chainId : <Skeleton />}
    </Typography>
  )
}

export default ChainId

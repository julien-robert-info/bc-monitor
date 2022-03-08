import React from 'react'
import { Skeleton, Typography } from '@mui/material'
import useEtherSWR from 'ether-swr'

const BlockNumber = () => {
  const { data: blockNumber, mutate } = useEtherSWR(['getBlockNumber'], {
    subscribe: [
      {
        name: 'block',
        on: (blockNumber: number) => {
          mutate(blockNumber)
        }
      }
    ]
  })

  return (
    <Typography variant="body2">
      {blockNumber ? 'Block: ' + blockNumber : <Skeleton />}
    </Typography>
  )
}

export default BlockNumber

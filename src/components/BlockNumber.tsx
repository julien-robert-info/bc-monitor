import useEtherSWR from 'ether-swr'
import React from 'react'

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

  if (!blockNumber) {
    return <div>...</div>
  }
  return <div>Block: {blockNumber}</div>
}

export default BlockNumber

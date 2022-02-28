import React from 'react'
import { useWeb3React } from '@web3-react/core'

const ChainId = () => {
  const { chainId } = useWeb3React()

  return <div>Chain Id: {chainId ?? ''}</div>
}

export default ChainId

import { useWeb3React } from '@web3-react/core'
import React from 'react'

const ChainId = () => {
  const { chainId } = useWeb3React()

  return (
    <>
      <span>Chain Id</span>
      <span role="img" aria-label="chain">
        ⛓
      </span>
      <span>{chainId ?? ''}</span>
    </>
  )
}

export default ChainId

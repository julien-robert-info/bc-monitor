import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { chains, networkConnector } from 'data/networks'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'

const SelectNetwork = () => {
  const { chainId } = useWeb3React()

  const handleChange = (event: SelectChangeEvent) => {
    networkConnector.changeChainId(Number(event.target.value))
  }

  return (
    <>
      <Select
        value={chainId !== undefined ? String(chainId) : ''}
        onChange={handleChange}
      >
        {Object.keys(chains).map((chainId) => (
          <MenuItem key={chainId} value={chainId}>
            {chains[Number(chainId)].chainName}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default SelectNetwork

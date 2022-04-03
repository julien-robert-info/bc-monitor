import React from 'react'
import useEtherSWR from 'ether-swr'
import { List, CircularProgress } from '@mui/material'
import QiVaultOwnerRow from './QiVaultOwnerRow'

const QiVaultOwnerList: React.FC<{ address: string }> = ({ address }) => {
  const { data: vaultCount } = useEtherSWR([address, 'vaultCount'])

  return (
    <>
      {vaultCount ? (
        <List>
          {Array.from({ length: vaultCount }, (value, index) => (
            <QiVaultOwnerRow key={index} address={address} vaultId={index} />
          ))}
        </List>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default QiVaultOwnerList

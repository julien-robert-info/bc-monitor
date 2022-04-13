import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { Box, Typography } from '@mui/material'
import { qiVaults } from 'data/qiVaults'
import QiVaultOwnerList from 'components/QiVaultOwnerList'

const VaultDetails = () => {
  const router = useRouter()
  const { address } = router.query
  const { chainId } = useWeb3React()
  const vaults =
    chainId !== undefined && qiVaults[chainId] !== undefined
      ? qiVaults[chainId]
      : []
  const currentVault = vaults.findIndex((i) => i.address === address)
  const vault = vaults[currentVault]

  return (
    <>
      {vault && (
        <Box sx={{ width: '100%', textAlign: 'center', mt: '5em', mb: '3em' }}>
          <Typography variant="h5" component="div">
            {vault.token}
          </Typography>
          <QiVaultOwnerList address={vault.address} />
        </Box>
      )}
    </>
  )
}

export default VaultDetails

import React from 'react'
import { Box, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'

const QiDao = () => {
  const { chainId } = useWeb3React()
  return (
    <>
      <Box sx={{ width: '100%', textAlign: 'center', mt: '5em' }}>
        <Typography
          variant="h3"
          color="text.secondary"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          QiDao
        </Typography>
      </Box>
    </>
  )
}

export default QiDao

import React from 'react'
import { Box, Typography } from '@mui/material'
import BlockNumber from 'components/BlockNumber'
import ChainId from 'components/ChainId'

const Home = () => {
  return (
    <>
      <Box sx={{ width: '100%', textAlign: 'center', mt: '5em' }}>
        <Typography
          variant="h2"
          color="primary.light"
          component="div"
          gutterBottom
        >
          Blockchain monitor
        </Typography>
        <Typography
          variant="h5"
          component="div"
          color="text.secondary"
          gutterBottom
        >
          Data mining tool for evm compatible blockchain
        </Typography>
        <BlockNumber />
        <ChainId />
      </Box>
    </>
  )
}

export default Home

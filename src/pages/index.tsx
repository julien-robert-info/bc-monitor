import { Box, Typography } from '@mui/material'

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
          color="primary.main"
          gutterBottom
        >
          Data mining tool for evm compatible blockchain
        </Typography>
      </Box>
    </>
  )
}

export default Home

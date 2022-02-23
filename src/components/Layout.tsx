import * as React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { ThemeSwitcher } from './Theme/ThemeSwitcher'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Bc-monitor
            </Typography>
            <ThemeSwitcher />
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </Box>
    </>
  )
}

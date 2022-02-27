import React from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import NavBar from './NavBar'
import SelectNetwork from './SelectNetwork'
import { ThemeSwitcher } from './Theme'
import Home from '@mui/icons-material/Home'
import MuiNextLink from './MuiNextLink'

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" aria-label="home">
            <MuiNextLink activeClassName="active" href="/">
              <Home fontSize="large" sx={{ color: 'primary.light' }} />
            </MuiNextLink>
          </IconButton>
          <NavBar />
          <SelectNetwork />
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header

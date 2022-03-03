import React from 'react'
import { Stack, Toolbar } from '@mui/material'
import MuiNextLink from './MuiNextLink'

export const navLinks = [{ title: 'QiDao', path: '/qiDao' }]

const NavBar = () => {
  return (
    <>
      <Toolbar component="nav" sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={2}>
          {navLinks.map(({ title, path }, i) => (
            <MuiNextLink
              key={`${title}${i}`}
              href={path}
              underline="hover"
              sx={{ color: 'text.secondary' }}
            >
              {title}
            </MuiNextLink>
          ))}
        </Stack>
      </Toolbar>
    </>
  )
}

export default NavBar

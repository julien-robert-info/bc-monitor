import React from 'react'
import { IconButton, SvgIconProps } from '@mui/material'
import { NightsStay, WbSunny } from '@mui/icons-material'
import { ThemeNameType } from 'components/Theme/theme'
import { useTheme } from './AppThemeProvider'

export const ThemeSwitcher = () => {
  const { themeName, setTheme } = useTheme()

  const themes: {
    theme: ThemeNameType
    icon: React.ReactElement<SvgIconProps>
    onClick: () => void
  }[] = [
    {
      theme: 'light',
      icon: <NightsStay />,
      onClick: () => setTheme('dark')
    },
    {
      theme: 'dark',
      icon: <WbSunny />,
      onClick: () => setTheme('light')
    }
  ]

  const current = themes.findIndex((i) => i.theme === themeName)

  return (
    <>
      <IconButton onClick={themes[current].onClick}>
        {themes[current].icon}
      </IconButton>
    </>
  )
}

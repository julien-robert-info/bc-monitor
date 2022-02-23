import { ThemeOptions } from '@mui/material/styles'

enum ThemeName {
  light = 'light',
  dark = 'dark'
}

export type ThemeNameType = keyof typeof ThemeName

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light'
  }
}

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark'
  }
}

export const themeList: Array<{
  name: ThemeNameType
  option: ThemeOptions
}> = [
  {
    name: 'light',
    option: lightThemeOptions
  },
  {
    name: 'dark',
    option: darkThemeOptions
  }
]

import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeList, ThemeNameType } from '.'
import { useLocalStorage } from 'utils/useLocalStorage'

type ThemeContextType = {
  themeName: ThemeNameType
  setTheme: (theme: ThemeNameType) => void
}

const ThemeContext = React.createContext<ThemeContextType>({
  themeName: 'light',
  setTheme: () => {}
})

export const useTheme = () => React.useContext(ThemeContext)

const storageKey = 'theme'

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, setTheme] = useLocalStorage(storageKey, 'light')

  const themeContext = {
    themeName,
    setTheme
  }

  const themeIndex = themeList.findIndex((i) => i.name === themeName)
  const themeOption = themeList[themeIndex].option
  const theme = React.useMemo(() => createTheme(themeOption), [themeOption])

  return (
    <>
      <ThemeContext.Provider value={themeContext}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

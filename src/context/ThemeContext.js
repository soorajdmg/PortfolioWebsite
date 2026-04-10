import { createContext, useContext } from 'react'

export const ThemeContext = createContext({ theme: null, setTheme: () => {} })
export const useTheme = () => useContext(ThemeContext)

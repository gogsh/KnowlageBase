import { createContext } from 'react'

type ThemeContext = {
  theme: 'dark' | 'light'
}
const ThemeContext: ThemeContext = {
  theme: 'light',
}

export default createContext(ThemeContext)

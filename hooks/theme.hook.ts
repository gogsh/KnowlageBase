import { useState, useEffect } from 'react'
import themes from '../styles/themes'

export default function useTheme() {
  const [theme, setTheme] = useState(themes.light)
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (!currentTheme) {
      localStorage.setItem('theme', 'light')
      setThemeName('light')
      setTheme(themes.light)
    } else {
      setThemeName(currentTheme)
      setTheme(themes[currentTheme])
    }
  }, [])

  const changeTheme = e => {
    if(e.target.value === 'light') {
      setTheme(themes.dark)
      setThemeName('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme(themes.light)
      setThemeName('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return {
    theme,
    themeName,
    changeTheme,
  }
}

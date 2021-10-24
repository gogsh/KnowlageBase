import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import { useAuth } from '../hooks/auth.hook'

import LanguageContext from '../context/LanguageContext'
import Language from '../models/language'

import { useRoutes } from '../router'
import useTheme from '../hooks/theme.hook'

import { Normalize } from 'styled-normalize'
import GlobalStyles from '../styles/global'
import GlobalFonts from '../styles/fonts/fonts'
import { ThemeProvider } from 'styled-components'

import Toast from '../components/UI/Toast/Toast'

function MyApp({ children }) {
  return (
    <div className={'_app'} suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  const { token, login, logout, userId, nickname } = useAuth()
  const isAuthenticated = !!token

  const L = new Language('ru')
  const [translation, setTranslation] = useState(L.getTranlation())
  const [currentLang, setCurrentLang] = useState(L.locale)

  const { theme, themeName, changeTheme } = useTheme()

  function changeLanguage(e) {
    const newLocale = e.target.value === 'ru' ? 'eng' : 'ru'
    L.setLanguage(newLocale)
    setTranslation(L.getTranlation())
    setCurrentLang(L.locale)
  }

  return (
    <MyApp>
      <Normalize />
      <GlobalFonts />
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={{ currentTheme: theme, changeTheme, themeName }}>
        <Toast />
        <LanguageContext.Provider value={{ changeLanguage, currentLang, translation }}>
          <AuthContext.Provider value={{ token, userId, nickname, login, logout }}>
            <BrowserRouter>{useRoutes(isAuthenticated)}</BrowserRouter>
          </AuthContext.Provider>
        </LanguageContext.Provider>
      </ThemeProvider>
    </MyApp>
  )
}

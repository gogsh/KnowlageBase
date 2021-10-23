import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import { useAuth } from '../hooks/auth.hook'

import LanguageContext from '../context/LanguageContext'
import Language from '../models/language'

import { useRoutes } from '../router'

import { Normalize } from 'styled-normalize'
import GlobalStyles from '../styles/global'
import GlobalFonts from '../styles/fonts/fonts'
import { ThemeProvider } from 'styled-components'
import themes from '../styles/themes'

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
  const [theme, setTheme] = useState(themes.light)

  function themeHandler(e) {
    setTheme(e.target.value === 'ligth' ? themes.light : themes.dark)
  }

  const L = new Language('ru')
  return (
    <MyApp>
      <Normalize />
      <GlobalFonts />
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={{ currentTheme: theme, handler: themeHandler }}>
        <Toast />
        <LanguageContext.Provider value={L.getTranlation()}>
          <AuthContext.Provider value={{ token, userId, nickname, login, logout }}>
            <BrowserRouter>{useRoutes(isAuthenticated)}</BrowserRouter>
          </AuthContext.Provider>
        </LanguageContext.Provider>
      </ThemeProvider>
    </MyApp>
  )
}

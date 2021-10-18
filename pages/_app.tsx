import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import { useAuth } from '../hooks/auth.hook'

import LanguageContext from '../context/LanguageContext'
import Language from '../models/language'

import { useRoutes } from '../router'

import { Normalize } from 'styled-normalize'
import globalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { ligth, dark } from '../Themes/Themes'

function MyApp({ children }) {
  return (
    <div className={'_app'} suppressHydrationWarning>
       <style jsx global>
        {globalStyles}
      </style>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  const { token, login, logout, userId, nickname } = useAuth()
  const isAuthenticated = !!token
  const [theme, setTheme] = useState(ligth)

  function themeHandler(e) {
    setTheme(e.target.value === 'ligth' ? ligth : dark)
  }

  const L = new Language('ru')
  return (
    <MyApp>
      <Normalize />
      <ThemeProvider theme={{ currentTheme: theme, handler: themeHandler }}>
        <LanguageContext.Provider value={L.getTranlation()}>
          <AuthContext.Provider value={{ token, userId, nickname, login, logout }}>
            <BrowserRouter>{useRoutes(isAuthenticated)}</BrowserRouter>
          </AuthContext.Provider>
        </LanguageContext.Provider>
      </ThemeProvider>
    </MyApp>
  )
}

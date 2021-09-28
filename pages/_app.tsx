import { BrowserRouter } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import { useAuth } from '../hooks/auth.hook'
import { useRoutes } from '../router'

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
  return (
    <MyApp>
      <AuthContext.Provider value={{ token, userId, nickname, login, logout }}>
        <BrowserRouter>
          {useRoutes(isAuthenticated)}
        </BrowserRouter>
      </AuthContext.Provider>
    </MyApp>
  )
}

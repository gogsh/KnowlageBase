import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Article from './pages/article'
import AuthPage from './pages/auth'

export const useRoutes = isAuthenticated => {
  return isAuthenticated ? (
    <Switch>
      <Route path='/' exact>
        <Article />
      </Route>
      <Redirect to='/' />
    </Switch>
  ) : (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
    </Switch>
  )
}

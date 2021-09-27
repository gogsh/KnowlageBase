import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/index'
import Article from './pages/article'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Index/>
      </Route>
      <Route path='/article' exact>
        <Article />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

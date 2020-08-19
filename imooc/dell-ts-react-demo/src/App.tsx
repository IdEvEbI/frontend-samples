import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login'

export default () => (
  <div>
    <HashRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </HashRouter>
  </div>
)

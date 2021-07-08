import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle'
import { Home } from './pages/Home'

export default function App () {
  return (
    <Router>
      <Switch>
        <GlobalStyle />
        <Route path='/' component={<Home />} />
      </Switch>
    </Router>
  )
}

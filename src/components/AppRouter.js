// library imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// component imports
import LandingPage from './LandingPage'
import UserPage from './UserPage'
import Transactions from './Transactions'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      {/* <Route path='/user' component={UserPage} /> */}
      {/* <Route path='/user/transactions' component={Transactions} /> */}
    </Switch>
  )
}

export default AppRouter
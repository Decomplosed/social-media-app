import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, authentidated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authentidated ? <Redirect to='/' /> : <Component {...rest} />
    }
  />
)

export default AuthRoute

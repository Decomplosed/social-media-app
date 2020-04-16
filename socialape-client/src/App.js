import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import jwtDecode from 'jwt-decode'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

import themeObject from './utils/theme'
import './App.css'

const theme = createMuiTheme(themeObject)
const token = localStorage.FBIdToken
let authenticated

if (token) {
  const decodedToken = jwtDecode(token)

  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false
  } else {
    authenticated = true
  }
}
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

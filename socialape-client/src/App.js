import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

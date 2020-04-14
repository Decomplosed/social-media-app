import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export class Navbar extends Component {
  render() {
    return (
      <AppBar position='fixed'>
        <Toolbar></Toolbar>
      </AppBar>
    )
  }
}

export default Navbar

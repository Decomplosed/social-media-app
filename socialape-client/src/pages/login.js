import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

const styles = {}

export class Login extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <h1>Login page</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Login)

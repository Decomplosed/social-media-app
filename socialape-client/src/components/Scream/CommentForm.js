import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  ...theme.globalStyles,
})

class CommentForm extends Component {
  state = {
    body: '',
  }

  render() {
    return <div></div>
  }
}

export default CommentForm

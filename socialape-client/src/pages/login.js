import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import AppIcon from '../images/icon.png'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = {
  form: {
    textAlign: 'center',
  },
  image: {
    margin: '20px auto',
  },
}

const handleSubmit = (event) => {
  console.log('hi')
}

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      laoding: false,
      errors: {}
    }
  }
  render() {
    const { classes } = this.props

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt='SocialApe Icon' className={classes.image} />
          <Typography variant='h2' className={classes.pageTitle}>
            Login
          </Typography>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)

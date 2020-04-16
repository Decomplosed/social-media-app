import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import AppIcon from '../images/icon.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  form: {
    textAlign: 'center',
  },
  image: {
    margin: '20px auto',
  },
  pageTitle: {
    margin: '5px auto',
  },
  textField: {
    margin: '5px auto',
  },
  button: {
    margin: '20px auto 10px',
    position: 'relative',
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10,
  },
  progress: {
    position: 'absolute',
  },
}

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      laoding: false,
      errors: {},
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
    })

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }

    axios
      .post('/login', userData)
      .then((res) => {
        console.log(res.data)
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        })
      })
  }

  render() {
    const { classes } = this.props
    const { errors, loading } = this.state

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt='SocialApe Icon' className={classes.image} />
          <Typography variant='h2' className={classes.pageTitle}>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id='email'
              name='email'
              type='email'
              label='Email'
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='password'
              name='password'
              type='password'
              label='Password'
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant='body2' className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={loading}
            >
              Sign Up
              {loading && (
                <CircularProgress size={20} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Don't have an account? Sign up <Link to='/signup'>here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Signup)

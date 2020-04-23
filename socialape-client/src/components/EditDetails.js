import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { connect } from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'

import EditIcon from '@material-ui/icons/Edit'
import {
  Tooltip,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from '@material-ui/core'

const styles = (theme) => ({
  ...theme.globalStyles,
})

class EditDetails extends Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false,
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentDidMount() {
    const { credentials } = this.props

    this.mapUserDetailsToState(credentials)
  }

  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : '',
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props
    const { bio, website, location, open } = this.state

    return (
      <Fragment>
        <Tooltip title='Edit details' placemen='top'>
          <IconButton onClick={this.handleOpen} className={classes.button}>
            <EditIcon color='primary' />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={this.handleClose} fullWidth maxWidth='sm'>
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContentText>
            <form>
              <TextField
                name='bio'
                type='text'
                label='Bio'
                multiline
                rows='3'
                placeholder='A short bio about yourself'
                className={classes.textField}
                value={bio}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='website'
                type='text'
                label='Website'
                placeholder='Your personal/professional website'
                className={classes.textField}
                value={website}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='location'
                type='text'
                label='Location'
                placeholder='Where you live'
                className={classes.textField}
                value={location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContentText>
        </Dialog>
      </Fragment>
    )
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
})

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
)

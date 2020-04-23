import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { connect } from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'

import { EditIcon } from '@material-ui/icons'
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

  componentDidMount() {
    const { credentials } = this.props
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      loaction: credentials.loaction ? credentials.loaction : '',
    })
  }

  render() {
    return <div></div>
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

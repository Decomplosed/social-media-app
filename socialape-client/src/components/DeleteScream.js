import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import UtilButton from '../utils/UtilButton'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DeleteOutline from '@material-ui/icons/DeleteOutline'

import { connect } from 'react-redux'
import { deleteScream } from '../redux/actions/dataActions'

const styles = (theme) => ({
  ...theme.globalStyles,
})

class DeleteScream extends Component {
  render() {
    return <div></div>
  }
}

DeleteScream.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
}

export default connect(null, { deleteScream })(withStyles(styles)(DeleteScream))

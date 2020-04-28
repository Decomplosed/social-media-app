import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import UtilButton from '../utils/UtilButton'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CloseIcon from '@material-ui/icons/Close'

import { connect } from 'react-redux'
import { getScream } from '../redux/actions/dataActions'

const styles = {}

class ScreamDialog extends Component {
  state = {
    open: false,
  }

  render() {
    return <div></div>
  }
}

ScreamDialog.propTypes = {
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  scream: state.data.scream,
  UI: state.UI,
})

export default connect(mapStateToProps, { getScream })(
  withStyles(styles)(ScreamDialog)
)

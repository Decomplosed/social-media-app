import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import UtilButton from '../utils/UtilButton'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import CircularProgress from '@material-ui/core/CircularProgress'

import AddIcon from '@material-ui/icons/Add'

import { connect } from 'react-redux'
import { postScream } from '../redux/actions/dataActions'

const styles = {}

class PostScream extends Component {
  state = {
    open: false,
    body: '',
    errors: {},
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { errors, open } = this.state
    const {
      classes,
      UI: { loading },
    } = this.props

    return (
      <Fragment>
        <UtilButton onClick={this.handleOpen} tip='Post a Scream!'>
          <AddIcon />
        </UtilButton>
        <Dialog
          open={open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        ></Dialog>
      </Fragment>
    )
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  UI: state.UI,
})

export default connect(mapStateToProps, { postScream })(
  withStyles(styles)(PostScream)
)

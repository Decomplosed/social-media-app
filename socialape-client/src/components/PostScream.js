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

import { connect } from 'react-redux'
import { postScream } from '../redux/actions/dataActions'

class PostScream extends Component {
  render() {
    return <div></div>
  }
}

export default PostScream
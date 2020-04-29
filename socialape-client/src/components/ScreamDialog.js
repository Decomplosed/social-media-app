import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import UtilButton from '../utils/UtilButton'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CloseIcon from '@material-ui/icons/Close'
import ChatIcon from '@material-ui/icons/Chat'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'

import { connect } from 'react-redux'
import { getScream } from '../redux/actions/dataActions'

const styles = (theme) => ({
  ...theme.globalStyles,
  invisibleSeparator: {
    border: 'none',
    margin: 4,
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover',
  },
  dialogContent: {
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: '0%',
    left: '92%',
  },
  expandButton: {
    position: 'absolute',
    left: '92%',
  },
  spinnerDiv: {
    textAlign: 'center',
    margin: '70px auto',
  },
})

class ScreamDialog extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
    this.props.getScream(this.props.screamId)
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
      },
      UI: { loading },
    } = this.props

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={50} />
      </div>
    ) : (
      <Grid container spacing={16}>
        <Grid item sm={5}>
          <img src={userImage} alt='Profile' className={classes.profileImage} />
        </Grid>
        <Grid item sm={7}>
          <Typography
            component={Link}
            color='primary'
            variant='h5'
            to={`/users/${userHandle}`}
          >
            @{userHandle}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant='body2' color='textSecondary'>
            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant='body1'>{body}</Typography>
          <LikeButton screamId={screamId} />
          <span>{`${likeCount} like${likeCount === 1 ? '' : 's'}`}</span>
          <UtilButton tip='Comments'>
            <ChatIcon color='primary' />
          </UtilButton>
          <span>{`${commentCount} comment${
            commentCount === 1 ? '' : 's'
          }`}</span>
        </Grid>
      </Grid>
    )

    return (
      <Fragment>
        <UtilButton
          onClick={this.handleOpen}
          tip='Expand Scream'
          tipClassName={classes.expandButton}
        >
          <UnfoldMoreIcon color='primary' />
        </UtilButton>
        <Dialog open={open} onClose={this.handleClose} fullWidth maxWidth='sm'>
          <UtilButton
            tip='Close'
            onClick={this.handleClose}
            btnClassName={classes.closeButton}
          >
            <CloseIcon />
          </UtilButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    )
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

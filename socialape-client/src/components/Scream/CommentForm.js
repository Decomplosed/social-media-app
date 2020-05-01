import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { connect } from 'react-redux'
import { submitComment } from '../../redux/actions/dataActions'

const styles = (theme) => ({
  ...theme.globalStyles,
})

class CommentForm extends Component {
  state = {
    body: '',
    errors
  }

  render() {
    const { classes, authenticated } = this.props

    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} sytle={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField name='body' type='text' label='Comment on scream' error={errors.comment ?  true : false}
        </form>
      </Grid>
    ) : null

    return commentFormMarkup
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
})

export default connect(mapStateToProps, { submitComment })(
  withStyles(styles)(CommentForm)
)

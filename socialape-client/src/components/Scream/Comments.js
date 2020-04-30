import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typograpghy from '@material-ui/core/Typography'

const styles = (theme) => ({
  ...theme.globalStyles,
})

export class Comments extends Component {
  render() {
    const { comments, classes } = this.props

    return (
      <Grid container>
        {comments.map((comment) => {
          const { body, createdAt, userImage, userHandle } = comment
          return <Fragment></Fragment>
        })}
      </Grid>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default withStyles(styles)(Comments)

import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux'
import { likeScream, unlikeScream } from '../redux/actions/dataActions'

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
    objectFit: 'cover',
  },
  content: {
    padding: 25,
  },
}

export class Scream extends React.Component {
  render() {
    dayjs.extend(relativeTime)

    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        // screamId,
        // likeCount,
        // commentCount,
      },
    } = this.props

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title='Profile image'
          className={classes.image}
          src='picture'
        />
        <CardContent className={classes.content}>
          <Typography
            variant='h5'
            component={Link}
            to={`/users/${userHandle}`}
            color='primary'
          >
            {userHandle}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant='body1'>{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapActionsToProps = {
  likeScream,
  unlikeScream,
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Scream))

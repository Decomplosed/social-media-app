import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PropTypes from 'prop-types'
import UtilButton from '../utils/UtilButton'
import DeleteScream from './DeleteScream'
import ScreamDialog from './ScreamDialog'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import ChatIcon from '@material-ui/icons/Chat'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { connect } from 'react-redux'
import { likeScream, unlikeScream } from '../redux/actions/dataActions'

const styles = {
  card: {
    position: 'relative',
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
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.scream.screamId
      )
    )
      return true
    else return false
  }

  likeScream = () => {
    this.props.likeScream(this.props.scream.screamId)
  }

  unlikeScream = () => {
    this.props.unlikeScream(this.props.scream.screamId)
  }

  render() {
    dayjs.extend(relativeTime)

    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        likeCount,
        commentCount,
        screamId,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props

    const likeButton = !authenticated ? (
      <UtilButton tip='Like'>
        <Link to='/login'>
          <FavoriteBorder colot='primary' />
        </Link>
      </UtilButton>
    ) : this.likedScream() ? (
      <UtilButton tip='Undo Like' onClick={this.unlikeScream}>
        <FavoriteIcon color='primary' />
      </UtilButton>
    ) : (
      <UtilButton tip='Like' onClick={this.likeScream}>
        <FavoriteBorder color='primary' />
      </UtilButton>
    )

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null

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
          {deleteButton}
          <Typography variant='body2' color='textSecondary'>
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant='body1'>{body}</Typography>
          {likeButton}
          <span>{likeCount} Likes</span>
          <UtilButton tip='Comments'>
            <ChatIcon color='primary' />
          </UtilButton>
          <span>{commentCount} Comments</span>
          <ScreamDialog screamId={screamId} userHandle={userHandle} />
        </CardContent>
      </Card>
    )
  }
}

Scream.propTypes = {
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
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

import React, { Component } from 'react'
import UtilButton from '../utils/UtilButton'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { connect } from 'react-redux'
import { likeScream, unlikeScream } from '../redux/actions/dataActions'

export class LikeButton extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.screamId
      )
    )
      return true
    else return false
  }

  likeScream = () => {
    this.props.likeScream(this.props.screamId)
  }

  unlikeScream = () => {
    this.props.unlikeScream(this.props.screamId)
  }

  render() {
    const { authenticated } = this.props.user

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

    return likeButton
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapActionsToProps = {
  likeScream,
  unlikeScream,
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)

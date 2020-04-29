import React, { Component } from 'react'
import UtilButton from '../utils/UtilButton'
import { Link } from 'react-router-dom'

export class LikeButton extends Component {
  render() {
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

export default LikeButton

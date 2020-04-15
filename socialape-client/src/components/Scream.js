import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const styles = {
  card: {
    display: 'flex',
  },
}

export class Scream extends React.Component {
  render() {
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props

    return (
      <Card>
        <CardMedia image={userImage} title='Profile image' />
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)

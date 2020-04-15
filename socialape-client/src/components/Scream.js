import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

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
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title='Profile image'
          className={classes.image}
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
            {createdAt}
          </Typography>
          <Typography variant='body1'>{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)

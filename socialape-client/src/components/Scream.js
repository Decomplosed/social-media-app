import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
        <CardContent>
          <Typography variant='h5'>{userHandle}</Typography>
          <Typography variant='body2' color='textSecondary'>
            {createdAt}
          </Typography>
          <Typography variant='body1'></Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)

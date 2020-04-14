import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  card: {
    display: 'flex',
  },
}

export class Scream extends React.Component {
  render() {
    const { classes } = this.props

    return <div></div>
  }
}

export default withStyles(styles)(Scream)

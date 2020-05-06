import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
  ...theme.globalStyles,
})

const ProfileSkeleton = () => {
  return <div></div>
}

export default withStyles(styles)(ProfileSkeleton)

import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import NoImg from '../images/no-img.png'

const styles = (theme) => ({
  ...theme.globalStyles,
})

const ProfileSkeleton = () => {
  return <div></div>
}

export default withStyles(styles)(ProfileSkeleton)

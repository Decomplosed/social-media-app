import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import NoImg from '../images/no-img.png'

import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles = (theme) => ({
  ...theme.globalStyles,
})

const ProfileSkeleton = () => {
  return <div></div>
}

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileSkeleton)

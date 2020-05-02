import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'

import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles = (theme) => ({
  ...theme.globalStyles,
})

const StaticProfile = (props) => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location },
  } = props

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className='image-wrapper'>
          <img src={imageUrl} alt='Prfile' className='profile-image' />
          <input
            type='file'
            id='image-input'
            hidden='hidden'
            onChange={this.handleImageChange}
          />
          <UtilButton
            tip='Edit Profile Picture'
            onClick={this.handleEditPicture}
            btnClassName='button'
          >
            <EditIcon color='primary' />
          </UtilButton>
        </div>
        <hr />
        <div className='profile-details'>
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color='primary'
            variant='h5'
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant='body2'>{bio}</Typography>}
          <hr />
          {location && (
            <Fragment>
              <LoactionOn color='primary' /> <span>{location}</span>
              <hr />
            </Fragment>
          )}
          {website && (
            <Fragment>
              <LinkIcon color='primary' />{' '}
              <a href={website} target='_blank' rel='noopener noreferrer'>
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday color='primary' />
          <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
        </div>
        <UtilButton
          tip='Logout'
          onClick={this.handleLogout}
          btnClassName='button'
        >
          <KeyboardReturn color='primary' />
        </UtilButton>
        <EditDetails />
      </div>
    </Paper>
  )
}

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StaticProfile)

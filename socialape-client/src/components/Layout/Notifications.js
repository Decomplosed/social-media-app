import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PropTypes from 'prop-types'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'

import NotificationsIcon from '@material-ui/icons/Notifications'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ChatIcon from '@material-ui/icons/Chat'

import { connect } from 'react-redux'
import { markNotificationsRead } from '../../redux/actions/userActions'

export class Notifications extends Component {
  state = {
    anchorEl: null,
  }

  render() {
    const notifications = this.props.notifications
    const anchorEl = this.state.anchorEl

    let notificationsIcon
    if (notifications && notifications.length > 0) {
      notifications.filter((notification) => notification.read === false)
        .length > 0
        ? (notificationsIcon = (
            <Badge
              badgeContent={
                notifications.filter(
                  (notification) => notification.read === false
                ).length
              }
              color='secondary'
            >
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />)
    }

    return <div></div>
  }
}

Notifications.propTypes = {
  markNotificationsRead: PropTypes.func.isRequired,
  notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  notifications: state.user.notifications,
})

export default connect(mapStateToProps, { markNotificationsRead })(
  Notifications
)

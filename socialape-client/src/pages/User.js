import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Scream from '../components/Scream/Scream'
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'

class User extends Component {
  componentDidMount() {
    const handle = this.props.match.params.handle

    this.props.getUserData(handle)
  }

  render() {
    return <div></div>
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

export default connect(mapStateToProps, { getUserData })(User)

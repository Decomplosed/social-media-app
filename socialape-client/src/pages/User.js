import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Scream from '../components/Scream/Scream'
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'

class User extends Component {
  state = {
    profile: null,
  }

  componentDidMount() {
    const handle = this.props.match.params.handle
    this.props.getUserData(handle)

    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { screams, loading } = this.props.data
    const { profile } = this.state

    return (
      <Grid container spacing={6}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
      </Grid>
    )
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

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .post('/login', userData)
    .then((res) => {
      const FBIdToken = `Bearer ${res.data.token}`

      localStorage.setItem('FBIdToken', FBIdToken)
      this.setState({ loading: false })
      axios.defaults.header.common['Authorization'] = FBIdToken
      this.props.history.push('/')
    })
    .catch((err) => {
      this.setState({
        errors: err.response.data,
        loading: false,
      })
    })
}

export const getUserData = () => (dispatch) => {
  axios
    .get('/user')
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}

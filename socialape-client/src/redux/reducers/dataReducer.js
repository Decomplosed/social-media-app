import { SET_SCREAMS, LIKE_SCREAM, UNLIKE_SCREAM, LOADING_DATA } from '../types'

const initialState = {
  screams: [],
  scream: {},
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

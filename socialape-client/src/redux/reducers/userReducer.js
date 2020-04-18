import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
} from '../types'

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {}
    default:
      return {
        ...state,
      }
  }
}

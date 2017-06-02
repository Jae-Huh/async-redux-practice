import {REQUEST_POSTS, RECEIVE_POSTS} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    default:
      return state
  }
}

export default waiting
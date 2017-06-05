import {SEARCH_UD} from '../actions'

function searchUD (state = '', action) {
  switch (action.type) {
    case SEARCH_UD:
      return action.term

    default:
      return state
  }
}

export default searchUD

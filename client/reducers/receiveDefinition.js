import {RECEIVE_DEFINITION} from '../actions'

function receiveDefinition (state = '', action) {
  switch (action.type) {
    case RECEIVE_DEFINITION:
      return action.definition

    default:
      return state
  }
}

export default receiveDefinition

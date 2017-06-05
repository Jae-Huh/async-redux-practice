import {SEARCH_REDDIT} from '../actions'

function searchSubreddit (state = '', action) {
  switch (action.type) {
    case SEARCH_REDDIT:
      return action.subreddit

    default:
      return state
  }
}

export default searchSubreddit

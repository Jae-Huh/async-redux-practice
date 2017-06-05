import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import searchSubreddit from './searchSubreddit'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  searchSubreddit
})

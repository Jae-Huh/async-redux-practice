import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import searchSubreddit from './searchSubreddit'
import searchUD from './searchUD'
import receiveDefinition from './receiveDefinition'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  searchSubreddit,
  searchUD,
  receiveDefinition
})

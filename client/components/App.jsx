import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import SearchBox from './SearchBox'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <SearchBox />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App

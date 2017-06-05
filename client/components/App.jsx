import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import SearchBox from './SearchBox'
import UDSearchBox from './UDSearchBox'
import UrbanDict from './UrbanDict'
import Definition from './Definition'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <SearchBox />
    <LoadSubreddit />
    <UDSearchBox />
    <UrbanDict />
    <WaitIndicator />
    <SubredditList />
    <Definition />
  </div>
)

export default App

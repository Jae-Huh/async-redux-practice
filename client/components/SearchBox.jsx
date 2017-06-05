import React from 'react'
import {connect} from 'react-redux'
import {enterSubreddit} from '../actions'

const searchBox = (props) => {
  return (
    <input type="text" name="searchTerm" placeholder="subreddit" onChange={searchBoxChange}/>
  )
  function searchBoxChange (e) {
    props.dispatchEnterSubreddit(e.target.value)
  }
}

function mapDispatchToProps (dispatch) {
 return {
   dispatchEnterSubreddit: (subreddit) => {dispatch(enterSubreddit (subreddit))}
  }
}

export default connect(null, mapDispatchToProps)(searchBox)

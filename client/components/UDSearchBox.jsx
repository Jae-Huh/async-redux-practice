import React from 'react'
import {connect} from 'react-redux'
import {enterWord} from '../actions'

const searchBox = (props) => {
  return (
    <input type="text" name="searchTerm" placeholder="subreddit" onChange={searchBoxChange}/>
  )
  function searchBoxChange (e) {
    props.dispatchEnterWord(e.target.value)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchEnterWord: (word) => { dispatch(enterWord(word)) }
  }
}

export default connect(null, mapDispatchToProps)(searchBox)

import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = props => {
  return (
    <button
      onClick={() => props.fetchPosts(props.subreddit)}
      >Fetch Posts
    </button>
  )
}

function mapStateToProps (state) {
  return {
    subreddit : state.searchSubreddit
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPosts: subreddit => {
      dispatch(fetchPosts(subreddit))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadSubreddit)

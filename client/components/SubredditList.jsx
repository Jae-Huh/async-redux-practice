import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import sortBy from 'sort-array'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        date={new Date(post.created*1000).toString()}
        summary={post.selftext.substring(0,500)+"...."}
      />
    )
  }
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    subreddits: sortBy(state.subreddits, 'title')
  }
}

export default connect(
  mapStateToProps
)(Subreddit)

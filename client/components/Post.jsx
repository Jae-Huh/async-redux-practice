import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => (
  <div>
     <h1>{props.title}</h1>
     <p>{props.date}</p>
     <p>{props.summary}</p>
  </div>

)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Post

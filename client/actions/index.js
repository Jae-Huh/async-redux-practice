import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SEARCH_REDDIT = 'SEARCH_REDDIT'
export const REQUEST_DEFINITION = 'REQUEST_DEFINITION'
export const SEARCH_UD = 'SEARCH_UD'
export const RECEIVE_DEFINITION = 'RECEIVE_DEFINITION'

export const requestDefinition = () => {
  return {
    type: REQUEST_DEFINITION
  }
}

export const receiveDefinition = (definition) => {
  return {
    type: RECEIVE_DEFINITION,
    definition: definition
  }
}

export const enterWord = (word) => {
  return {
    type: SEARCH_UD,
    term: word
  }
}

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const enterSubreddit = (subreddit) => {
  return {
    type: SEARCH_REDDIT,
    subreddit: subreddit
  }
}



export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}

export function fetchDefinition (term) {
  return (dispatch) => {
    dispatch(requestDefinition())
    request
      .get(`/api/urbandictionary/${term}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        console.log(res.body)
        dispatch(receiveDefinition(res.body))
      })
  }
}

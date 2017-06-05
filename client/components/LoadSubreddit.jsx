import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

// let LoadSubreddit = ({dispatch}) => (

//   <div>
//     <input type="text" name="searchTerm" placeholder="subreddit" />
//     <button
//       onClick={() => dispatch(fetchPosts('Australia'))}
//       >Fetch Posts</button>
//    </div>
// )

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

// class LoadSubreddit extends React.Component {
//   constructor (props) {
//     super(props)
//     this.props = {
//       searchTerm: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleSubmit (e) {
//     e.preventDefault()
//     // if (this.state.searchTerm === '') {
//     //   alert('Please enter the subreddit')
//     // }
//     this.props.dispatch(fetchPosts(this.state)
//   }
//
//   handleChange (e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//           <input type="text" name="searchTerm" placeholder="subreddit"  onChange={e => this.handleChange(e)}/>
//           <button
//             onClick={() => dispatch(fetchPosts('newzealand'))}
//           >Fetch Posts
//           </button>
//       </div>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(LoadSubreddit)

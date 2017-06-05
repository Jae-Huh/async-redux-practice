import React from 'react'
import {connect} from 'react-redux'
import {fetchDefinition} from '../actions'


const UrbanDict = props => {
  return (
    <button
      onClick={() => props.fetchDefinition(props.searchUD)}
      >Search Urban Dictionary
    </button>
  )
}

function mapStateToProps (state) {
  return {
    searchUD : state.searchUD
  }
}

function mapDispatchToProps (dispatch){
  return {
    fetchDefinition: word => {
      dispatch(fetchDefinition(word))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UrbanDict)

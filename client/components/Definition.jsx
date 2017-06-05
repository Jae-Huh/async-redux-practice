import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const Definition = (props) => (
 <div>
  <p>{props.receiveDefinition}</p>
 </div>
)

Definition.propTypes = {
  receiveDefinition: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    receiveDefinition: state.receiveDefinition
  }
}

export default connect(mapStateToProps)(Definition)

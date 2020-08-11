import React from 'react';
import { connect } from 'react-redux'
import { removeFeatures } from '../actions/carAction'

const AddedFeature = props => {
  const handleClick = e => {
    e.preventDefault()
    props.removeFeatures(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeatures})(AddedFeature);

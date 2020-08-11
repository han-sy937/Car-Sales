import React from 'react';
import { connect } from 'react-redux'
import { addFeatures } from '../actions/carAction'

const AdditionalFeature = props => {
  const handleClick = e => {
    e.preventDefault();
    props.addFeatures(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeatures})(AdditionalFeature);

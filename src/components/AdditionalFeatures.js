import React from 'react';
import { connect } from 'react-redux'
import { addFeatures} from '../actions/carAction'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.carReducer.additionalFeatures,
    car: state.carReducer.car
  }
}

export default connect(mapStateToProps, {addFeatures})(AdditionalFeatures);

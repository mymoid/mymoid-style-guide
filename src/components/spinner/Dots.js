import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import activityIndicator from './activityIndicator';

const Dots = props => {
  const classes = classnames(props.theme.circle);

  return (
    <div style={props.style}>
      <div className={classes} style={props.getFillStyle(0.3)} />
      <div className={classes} style={props.getFillStyle(0.2)} />
      <div className={classes} style={props.getFillStyle(0.1)} />
    </div>
  );
};

Dots.propTypes = {
  getFillStyle: PropTypes.func,
  style: PropTypes.shape,
  theme: PropTypes.shape({
    circle: PropTypes.string
  })
};

export default activityIndicator(Dots, 0.8);
export { Dots as SpinnerDots };

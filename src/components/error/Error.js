import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Error = ({ className, errorMessage = '', theme }) => {
  const errorClassName = classnames(theme.error, className);
  return errorMessage ? (
    <div className={errorClassName}>{errorMessage}</div>
  ) : null;
};

Error.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  theme: PropTypes.shape({
    error: PropTypes.string
  })
};

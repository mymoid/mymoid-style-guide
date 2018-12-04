import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from './FontIcon';
import MaterialDesignFont from './MaterialDesignFont.css';

const MaterialDesignFontIcon = (
  { children, value, ...other } // eslint-disable-line
) => (
  <FontIcon theme={MaterialDesignFont} {...other}>
    {value}
    {children}
  </FontIcon>
);

MaterialDesignFontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

MaterialDesignFontIcon.defaultProps = {
  alt: '',
  className: ''
};

export default MaterialDesignFontIcon;
export { MaterialDesignFontIcon };

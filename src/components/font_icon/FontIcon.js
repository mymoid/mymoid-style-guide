import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FontIcon = ({
  alt,
  children,
  className,
  iconsFamily = 'material-icons',
  value,
  ...other
}) =>
  iconsFamily === 'material-icons' ? (
    <span
      data-mymoid="font-icon"
      aria-label={alt}
      className={classnames(
        {
          'material-icons':
            typeof value === 'string' || typeof children === 'string'
        },
        className
      )}
      {...other}
    >
      {value}
      {children}
    </span>
  ) : (
    // TODO: ligatures
    // http://google.github.io/material-design-icons/
    // https://github.com/sam7r/ligature-to-html-entity
    <span
      className={classnames(
        { [iconsFamily]: true },
        {
          [`${iconsFamily}-${value}`]:
            typeof value === 'string' || typeof children === 'string'
        },
        className
      )}
    />
  );

FontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  iconsFamily: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

export default FontIcon;
export { FontIcon };

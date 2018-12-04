import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';

const FloatingCenteredPanel = ({ children, className, theme, ...other }) => {
  const _className = cn(theme.panelFloatingCentered, className);
  return (
    <div
      {...other}
      data-mymoid="panel-floating-centered"
      className={_className}
    >
      {children}
    </div>
  );
};

FloatingCenteredPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.shape({
    panelFloatingCentered: PropTypes.string
  })
};

FloatingCenteredPanel.defaultProps = {
  className: ''
};

export default themr(LAYOUT)(FloatingCenteredPanel);
export { FloatingCenteredPanel };

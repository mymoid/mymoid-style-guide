import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';

const PanelContent = ({ bodyScroll, children, className, theme, ...other }) => {
  const _className = cn(
    theme.panelContent,
    { [theme.bodyScroll]: bodyScroll },
    className
  );
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

PanelContent.propTypes = {
  bodyScroll: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.shape({
    panelContent: PropTypes.string
  })
};

PanelContent.defaultProps = {
  bodyScroll: false,
  className: ''
};

export default themr(LAYOUT)(PanelContent);
export { PanelContent };

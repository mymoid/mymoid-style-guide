import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { LAYOUT } from '../identifiers';

const PanelTitle = ({ children, className, theme, ...other }) => (
  <div className={classnames(theme.panelTitle, className)} {...other}>
    {children}
  </div>
);

PanelTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.shape({
    panelTitle: PropTypes.string
  })
};

export default themr(LAYOUT)(PanelTitle);
export { PanelTitle };

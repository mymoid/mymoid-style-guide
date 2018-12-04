import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { LAYOUT } from '../identifiers';

const PanelActions = ({ children, className, theme, ...other }) => (
  <div className={classnames(theme.panelActions, className)} {...other}>
    {children}
  </div>
);

PanelActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.shape({
    panelActions: PropTypes.string
  })
};

export default themr(LAYOUT)(PanelActions);
export { PanelActions };

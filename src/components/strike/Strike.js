import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Strike extends Component {
  static propTypes = {
    background: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.number,
    space: PropTypes.number
  };

  static defaultProps = {
    height: 1,
    background: 'silver',
    space: 0
  };

  render() {
    const { children, className, height, background, space } = this.props;

    const strikeStyle = {
      position: 'absolute',
      top: '50%',
      width: '100%',
      marginTop: `-${Math.floor(height / 2)}px`,
      height: `${height}px`,
      backgroundColor: background,
      left: '0',
      marginLeft: `${space}px`,
      marginRight: `${space}px`
    };

    const main = {
      position: 'relative',
      display: 'inline-block'
    };

    const root = {
      display: 'block',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    };

    return (
      <div style={root} className={className}>
        <span style={main}>
          <span style={strikeStyle} />
          {children}
        </span>
      </div>
    );
  }
}

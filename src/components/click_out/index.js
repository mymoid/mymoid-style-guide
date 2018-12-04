import React from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends React.Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBodyClick);
  }

  handleMouseDown = () => {
    this.setState({
      isOpen: true
    });
  };

  handleBodyClick = () => {
    if (!this.state.isOpen) {
      /* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
      if (!this.props.isToggle) {
        this.props.onClickOut && this.props.onClickOut();
      }
    }
    this.setState({
      isOpen: false
    });
  };

  render() {
    return <div onMouseDown={this.handleMouseDown}>{this.props.children}</div>;
  }
}

ClickOutside.propTypes = {
  children: PropTypes.element.isRequired,
  isToggle: PropTypes.bool,
  onClickOut: PropTypes.func
};

export default ClickOutside;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import InjectFontIcon from '../font_icon/FontIcon';
import InjectSpinnerDots from '../spinner/Dots';
import rippleFactory from '../ripple/Ripple';

const factory = (ripple, FontIcon, SpinnerDots) => {
  class Button extends Component {
    static propTypes = {
      accent: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      error: PropTypes.bool,
      flat: PropTypes.bool,
      floating: PropTypes.bool,
      href: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      inverse: PropTypes.bool,
      label: PropTypes.string,
      loading: PropTypes.bool,
      mini: PropTypes.bool,
      neutral: PropTypes.bool,
      onMouseLeave: PropTypes.func,
      onMouseUp: PropTypes.func,
      primary: PropTypes.bool,
      raised: PropTypes.bool,
      seetrhough: PropTypes.bool,
      theme: PropTypes.shape({
        accent: PropTypes.string,
        button: PropTypes.string,
        flat: PropTypes.string,
        seetrhough: PropTypes.string,
        floating: PropTypes.string,
        icon: PropTypes.string,
        inverse: PropTypes.string,
        mini: PropTypes.string,
        neutral: PropTypes.string,
        primary: PropTypes.string,
        raised: PropTypes.string,
        rippleWrapper: PropTypes.string,
        toggle: PropTypes.string,
        error: PropTypes.string
      }),
      type: PropTypes.string
    };

    static defaultProps = {
      accent: false,
      className: '',
      flat: false,
      seetrhough: false,
      floating: false,
      loading: false,
      mini: false,
      neutral: true,
      primary: false,
      raised: false,
      type: 'button'
    };

    getLevel = () => {
      if (this.props.primary) return 'primary';
      if (this.props.accent) return 'accent';
      return 'neutral';
    };

    getShape = () => {
      if (this.props.raised) return 'raised';
      if (this.props.floating) return 'floating';
      if (this.props.seetrhough) return 'seetrhough';
      return 'flat';
    };

    getStatus = () => {
      if (this.props.error) return 'error';
      return undefined;
    };

    handleMouseUp = event => {
      this.buttonNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = event => {
      this.buttonNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    showIcon = (icon, isLoading) => icon && !isLoading;

    showLabel = (label, isLoading) => label && !isLoading;

    render() {
      const {
        accent, // eslint-disable-line
        children,
        className,
        error, // eslint-disable-line
        flat, // eslint-disable-line
        seetrhough, // eslint-disable-line
        floating, // eslint-disable-line
        href,
        icon,
        inverse,
        label,
        loading,
        mini,
        neutral,
        primary, // eslint-disable-line
        raised, // eslint-disable-line
        theme,
        type,
        ...others
      } = this.props;
      const element = href ? 'a' : 'button';
      const level = this.getLevel();
      const shape = this.getShape();
      const status = this.getStatus();

      const classes = classnames(
        theme.button,
        [theme[shape]],
        {
          [theme[status]]: status,
          [theme[level]]: neutral,
          [theme.mini]: mini,
          [theme.inverse]: inverse
        },
        className
      );

      const props = {
        ...others,
        href,
        ref: node => {
          this.buttonNode = node;
        },
        className: classes,
        disabled: this.props.disabled,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        type: !href ? type : null,
        'data-mymoid': 'button'
      };

      return React.createElement(
        element,
        props,
        this.showIcon(icon, loading) ? (
          <FontIcon className={theme.icon} value={icon} />
        ) : null,
        this.showLabel(label, loading) ? label : null,
        loading ? <SpinnerDots size={16} speed={1} /> : null,
        children
      );
    }
  }

  return ripple(Button);
};

const Button = factory(
  rippleFactory({ centered: false }),
  InjectFontIcon,
  InjectSpinnerDots
);
export default themr(BUTTON)(Button);
export { factory as buttonFactory };
export { Button };

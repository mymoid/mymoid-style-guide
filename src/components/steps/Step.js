import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontIcon } from '../font_icon';

function isString(str) {
  return typeof str === 'string';
}

// eslint-disable-next-line
export default class Step extends React.Component {
  render() {
    const {
      className,
      prefixCls,
      style,
      itemWidth,
      status = 'wait',
      iconPrefix,
      icon,
      wrapperStyle,
      adjustMarginRight,
      stepNumber,
      description,
      title,
      theme,
      progressDot,
      ...restProps
    } = this.props;
    // const iconClassName = classNames({
    //   [theme[`${prefixCls}-icon`]]: true,
    //   [theme[`${iconPrefix}icon`]]: true,
    //   [theme[`${iconPrefix}icon-${icon}`]]: icon && isString(icon),
    //   [theme[`${iconPrefix}icon-check`]]: !icon && status === 'finish',
    //   [theme[`${iconPrefix}icon-cross`]]: !icon && status === 'error',
    // });

    let iconNode;
    const iconDot = (
      <span
        className={classNames({ [theme[`${prefixCls}-icon-dot`]]: true })}
      />
    );
    // progressDot enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = (
          <span className={classNames({ [theme[`${prefixCls}-icon`]]: true })}>
            {progressDot(iconDot, {
              index: stepNumber - 1,
              status,
              title,
              description
            })}
          </span>
        );
      } else {
        iconNode = (
          <span className={classNames({ [theme[`${prefixCls}-icon`]]: true })}>
            {iconDot}
          </span>
        );
      }
    } else if (icon && !isString(icon)) {
      iconNode = (
        <span className={classNames({ [theme[`${prefixCls}-icon`]]: true })}>
          {icon}
        </span>
      );
    } else if (icon || status === 'finish' || status === 'error') {
      // iconNode = <span className={classNames({ [theme[iconClassName]]: true })} />;
      iconNode =
        status === 'finish' ? (
          // TODO: primary color
          <FontIcon
            value="done"
            style={{
              fontSize: '12px',
              color: 'rgba(178, 211, 204, 100)',
              fontWeight: 'bold'
            }}
          />
        ) : (
          <FontIcon value="clear" style={{ fontSize: '12px' }} />
        );
    } else {
      iconNode = (
        <span className={classNames({ [theme[`${prefixCls}-icon`]]: true })}>
          {stepNumber}
        </span>
      );
    }
    const classString = classNames({
      [theme[`${prefixCls}-item`]]: true,
      [theme[`${prefixCls}-status-${status}`]]: true,
      [theme[`${prefixCls}-custom`]]: icon,
      [className]: !!className
    });
    return (
      <div
        {...restProps}
        className={classString}
        style={{ width: itemWidth, marginRight: adjustMarginRight, ...style }}
      >
        <div
          className={classNames({ [theme[`${prefixCls}-tail`]]: true })}
          style={{ paddingRight: -adjustMarginRight }}
        >
          <i />
        </div>
        <div className={classNames({ [theme[`${prefixCls}-step`]]: true })}>
          <div
            className={classNames({ [theme[`${prefixCls}-head`]]: true })}
            style={{
              background:
                wrapperStyle.background || wrapperStyle.backgroundColor
            }}
          >
            <div
              className={classNames({
                [theme[`${prefixCls}-head-inner`]]: true
              })}
            >
              {iconNode}
            </div>
          </div>
          <div className={classNames({ [theme[`${prefixCls}-main`]]: true })}>
            <div
              className={classNames({ [theme[`${prefixCls}-title`]]: true })}
              style={{
                background:
                  wrapperStyle.background || wrapperStyle.backgroundColor
              }}
            >
              {title}
            </div>
            {description ? (
              <div
                className={classNames({
                  [theme[`${prefixCls}-description`]]: true
                })}
              >
                {description}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  adjustMarginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  description: PropTypes.node,
  icon: PropTypes.node,
  iconPrefix: PropTypes.string,
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  prefixCls: PropTypes.string,
  progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  status: PropTypes.string,
  stepNumber: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line
  theme: PropTypes.shape({
    'mymoid-steps': PropTypes.string
  }),
  title: PropTypes.node,
  wrapperStyle: PropTypes.object // eslint-disable-line
};

import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { getViewport } from '../utils/utils';
import isBrowser from '../utils/isBrowser';
import { LAYOUT } from '../identifiers';
import InjectNavDrawer from './NavDrawer';
import isComponentOfType from '../utils/isComponentOfType';
import filterReactChildren from '../utils/filterReactChildren';
import breakpoints from '../utils/breakpoints';

const factory = NavDrawer => {
  const isNavDrawer = child => isComponentOfType(NavDrawer, child);
  const isUnknown = child => !isNavDrawer(child);

  class Layout extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      theme: PropTypes.shape({
        layout: PropTypes.string,
        navDrawerClipped: PropTypes.string,
        navDrawerPinned: PropTypes.string
      })
    };

    static defaultProps = {
      className: ''
    };

    state = {
      width: isBrowser() && getViewport().width
    };

    componentDidMount() {
      if (!this.state.width) this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      this.setState({ width: getViewport().width });
    };

    isPinned = sideNav => {
      if (sideNav) {
        const { permanentAt, pinned } = sideNav.props;
        const { width } = this.state;
        return width > breakpoints[permanentAt] || pinned;
      }
      return undefined;
    };

    render() {
      const { children, className, theme, ...rest } = this.props;
      const navDrawer = filterReactChildren(children, isNavDrawer)[0];
      const unknown = filterReactChildren(children, isUnknown);
      const navDrawerPinned = this.isPinned(navDrawer);
      const navDrawerClipped = navDrawer && navDrawer.props.clipped;

      const clonedLeftSideNav =
        navDrawer &&
        cloneElement(navDrawer, {
          clipped: navDrawerClipped,
          pinned: navDrawerPinned
        });

      const _className = classnames(
        theme.layout,
        {
          [theme.navDrawerPinned]: navDrawerPinned,
          [theme.navDrawerClipped]: navDrawerClipped
        },
        className
      );

      return (
        <div {...rest} className={_className}>
          {clonedLeftSideNav}
          {unknown}
        </div>
      );
    }
  }

  return Layout;
};

const Layout = factory(InjectNavDrawer);
export default themr(LAYOUT)(Layout);
export { factory as layoutFactory };
export { Layout };

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { MENU } from '../identifiers';
import InjectAvatar from '../avatar/Avatar';

const factory = Avatar => {
  const ProfileTitle = ({
    active,
    avatar,
    children,
    className,
    subtitle,
    theme,
    title,
    ...other
  }) => {
    const classes = classnames(
      theme.profileTitle,
      {
        [theme.small]: avatar,
        [theme.large]: !avatar
      },
      className
    );

    // eslint-disable-next-line
    const titleClasses = classnames(theme.title, {
      [theme.active]: active
    });
    // eslint-disable-next-line
    const subTitleClasses = classnames(theme.subtitle, {
      [theme.active]: active
    });
    return (
      <div className={classes} {...other}>
        {typeof avatar === 'string' ? (
          <Avatar title={title} theme={theme} />
        ) : (
          avatar
        )}
        <div>
          {children &&
            typeof children === 'string' && (
              <h5 className={theme.title}>{children}</h5>
            )}
          {children && typeof children !== 'string' && children}
        </div>
      </div>
    );
  };

  ProfileTitle.propTypes = {
    active: PropTypes.bool,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    className: PropTypes.string,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    theme: PropTypes.shape({
      large: PropTypes.string,
      title: PropTypes.string,
      small: PropTypes.string,
      subtitle: PropTypes.string
    }),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  return ProfileTitle;
};

const ProfileTitle = factory(InjectAvatar);
export default themr(MENU)(ProfileTitle);
export { ProfileTitle };
export { factory as profileTitleFactory };

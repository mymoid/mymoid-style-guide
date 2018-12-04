import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { MEDIA } from '../identifiers';

const Media = ({
  aspectRatio,
  children,
  className,
  color,
  contentOverlay,
  image,
  theme,
  ...other
}) => {
  const classes = classnames(
    theme.media,
    {
      [theme[aspectRatio]]: aspectRatio
    },
    className
  );

  const innerClasses = classnames(theme.content, {
    [theme.contentOverlay]: contentOverlay
  });

  const bgStyle = {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? `url('${image}')` : undefined
  };

  return (
    <div style={bgStyle} className={classes} {...other}>
      <div className={innerClasses}>{children}</div>
    </div>
  );
};

Media.propTypes = {
  aspectRatio: PropTypes.oneOf(['wide', 'square']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  contentOverlay: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  theme: PropTypes.shape({
    media: PropTypes.string,
    content: PropTypes.string,
    contentOverlay: PropTypes.string,
    square: PropTypes.string,
    wide: PropTypes.string
  })
};

export default themr(MEDIA)(Media);
export { Media };

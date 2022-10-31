import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (src, alt, className) => (
    <img src={src} alt={alt} className={className} />
);

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isActive = asPath === props.href || asPath === props.as;
  const className = isActive
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
        'aria-current': isActive ? 'page' : undefined,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;

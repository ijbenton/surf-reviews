import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

type ActiveLinkProps = {
  children: JSX.Element;
  activeClassName: string;
  href: string;
  as?: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  href,
  as,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isActive = asPath === href || asPath === as;
  const className = isActive
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
        'aria-current': isActive ? 'page' : undefined,
      })}
    </Link>
  );
};

export default ActiveLink;

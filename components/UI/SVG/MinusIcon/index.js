// @flow
import React from 'react';

type Props = {
  className?: string,
};

const PlusIcon = ({ className }: Props) => (
  <svg height={20} width={20} viewBox="0 0 20 20" className={className}>
    <path d="M17 3v14H3V3h14m2-2H1v18h18V1z" />
    <path d="M14 9H6v2h8V9" />
  </svg>
);
PlusIcon.defaultProps = {
  className: '',
};

export default PlusIcon;

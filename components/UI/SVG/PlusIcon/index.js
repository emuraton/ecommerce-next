// @flow
import React from 'react';

type Props = {
  className?: string,
};

const PlusIcon = ({ className }: Props) => (
  <svg height={20} width={20} viewBox="0 0 20 20" className={className}>
    <path d="M1 1v18h18V1H1zm16 16H3V3h14v14z" />
    <path d="M9 14h2v-3h3V9h-3V6H9v3H6v2h3" />
  </svg>
);
PlusIcon.defaultProps = {
  className: '',
};

export default PlusIcon;

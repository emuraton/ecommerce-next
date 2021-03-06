// @flow
import React from 'react';

type Props = {
  className?: string,
};

const ChevronLeft = ({ className }: Props) => (
  <svg width={18} height={18} viewBox="0 0 18 18" className={className}>
    <path d="M12.2 14.7L6.6 9l5.6-5.7-1.4-1.4-7 7.1 7 7.1z" />
  </svg>
);
ChevronLeft.defaultProps = {
  className: '',
};

export default ChevronLeft;

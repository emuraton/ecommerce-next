import React from 'react';

const BackArrow = ({ className }) => (
  <svg width={20} height={20} viewBox="0 0 20 20" className={className}>
    <path d="M1.71 10L10 1.71l.71.7L3.62 9.5H18.5v1H3.62l7.09 7.09-.71.7L1.71 10z" />
    <path d="M18 10H2.41l1.71 1.71L10 17.59 2.41 10H18m-8-9l-9 9 9 9 1.41-1.41L4.83 11H19V9H4.83l6.59-6.59L10 1z" />
  </svg>
);

export default BackArrow;

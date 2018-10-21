import React from 'react';

const Star = ({ className }) => (
  <svg
    height={14}
    width={14}
    viewBox="0 0 14 14"
    fill="black"
    className={className}
  >
    <path d="M7 11.4l-4.3 2.3.8-4.9L0 5.4l4.8-.7L7 .3l2.2 4.4 4.8.7-3.5 3.4.8 4.9z" />
  </svg>
);

export default Star;

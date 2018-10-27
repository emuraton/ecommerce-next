import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const UglyMap = ({ className, src, link }) => {
  return (
    <div className={className}>
      <a target="_blank" rel="noopener noreferrer nofollow" href={link}>
        <Image alt="" src={src} />
      </a>
    </div>
  );
};

export default UglyMap;

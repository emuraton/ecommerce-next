import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const UglyMap = ({ className, src }) => {
  return (
    <div className={className}>
      <Image alt="" src={src} />
    </div>
  );
};

export default UglyMap;

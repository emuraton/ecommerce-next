import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

type Props = {
  src: string,
  link: string,
  className?: string,
};

const UglyMap = ({ className, src, link }: Props) => (
  <div className={className}>
    <a target="_blank" rel="noopener noreferrer nofollow" href={link}>
      <Image alt="" src={src} />
    </a>
  </div>
);

UglyMap.defaultProps = {
  className: null,
};

export default UglyMap;

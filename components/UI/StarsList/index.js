import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

import Star from '../SVG/Star';

const Container = styled.div`
  display: inline-block;
`;

const StyledStars = styled(Star)`
  margin-right: 2px;
  fill: ${prop('color')};
`;
StyledStars.displayName = 'Stars';

type Props = {
  nbStars?: number,
  color?: string,
  className?: string,
};

const StarsList = ({ nbStars, color, className }: Props) => {
  if (!nbStars || nbStars === 0) return null;
  return (
    <Container className={className}>
      {new Array(nbStars).fill(StyledStars).map((StarComponent, index) => (
        <StarComponent key={`Star-${index}`} color={color} />
      ))}
    </Container>
  );
};

StarsList.defaultProps = {
  nbStars: 0,
  color: 'black',
  className: null,
};

export default StarsList;

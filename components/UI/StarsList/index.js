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

const StarsList = ({ nbStars, color, className }) => {
  if (!nbStars || nbStars === 0) return null;
  return (
    <Container className={className}>
      {new Array(nbStars).fill(StyledStars).map((Star, index) => (
        <Star key={`Star-${index}`} color={color} />
      ))}
    </Container>
  );
};

StarsList.defaultProps = {
  nbStars: 0,
  color: 'black',
};

export default StarsList;

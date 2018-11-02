import React from 'react';
import styled from 'styled-components';

import BackArrow from '../SVG/BackArrow';

const Section = styled.section`
  position: relative;
  margin-top: 20px;
`;

const BackLinkContainer = styled.div`
  position: absolute;
  left: 25px;
  top: 20px;
  right: 80px;
  white-space: nowrap;
  z-index: 2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-bottom: 7px;
`;

const StyledBackArrow = styled(BackArrow)`
  float: left;
  margin-right: 5px;
  fill: white;
`;

export const Banner = ({ product }) => {
  return (
    <Section>
      <BackLinkContainer>
        <a href="/">
          <StyledBackArrow />
        </a>
      </BackLinkContainer>
      <div>
        <Image src={`/static/${product.image}`} alt="test" />
      </div>
    </Section>
  );
};

export default Banner;

import React from 'react';
import styled from 'styled-components';

import BackArrow from '../SVG/BackArrow';
import Share from '../SVG/Share';

const Section = styled.section`
  position: relative;
  margin-top: 20px;
`;

const BackLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 25px;
  top: 40px;
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

const StyledShare = styled(Share)`
  margin-right: 50px;
  fill: white;
`;

export const Banner = ({ product }) => {
  return (
    <Section>
      <BackLinkContainer>
        <a href="/">
          <StyledBackArrow />
        </a>
        <a href="#">
          <StyledShare />
        </a>
      </BackLinkContainer>
      <div>
        <Image src={`/static/${product.image}`} alt="test" />
      </div>
    </Section>
  );
};

export default Banner;

import React from 'react';
import styled from 'styled-components';

import ChevronLeft from '../ChevronLeft';

const Section = styled.section`
  position: relative;
  margin-top: 20px;
`;

const BackLinkContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 20px;
  right: 80px;
  white-space: nowrap;
  z-index: 2;
`;

const BackLink = styled.a`
  float: left;
  background-color: white;
  color: rgb(196, 1, 114);
  margin-right: 8px;
  margin-bottom: 4px;
  max-width: 140px;
  text-overflow: ellipsis;
  padding: 10px 15px;
  /* padding: 5px 8px 4px 8px; */
  background-color: rgb(255, 255, 255);
  border-radius: 25px;
  box-shadow: rgba(36, 37, 41, 0.15) 0px 2px 40px 0px;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-bottom: 7px;
`;

const Text = styled.span`
  font-weight: 600;
  line-height: 18px;
  font-size: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledChevronLeft = styled(ChevronLeft)`
  margin-right: 5px;
  fill: rgb(196, 1, 114);
`;

export const Banner = product => {
  return (
    <Section>
      <BackLinkContainer>
        <BackLink href="#">
          <FlexWrapper>
            <StyledChevronLeft />
            <Text>Ticket</Text>
          </FlexWrapper>
        </BackLink>
      </BackLinkContainer>
      <div>
        <Image src="/static/semf-cover.jpg" alt="test" />
      </div>
    </Section>
  );
};

export default Banner;

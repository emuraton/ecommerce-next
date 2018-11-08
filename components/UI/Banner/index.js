// @flow
// TODO
/* jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import BackArrow from '../SVG/BackArrow';
import Share from '../SVG/Share';

const Section = styled.section`
  position: relative;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-bottom: 7px;
`;

const StyledBackArrow = styled(BackArrow)`
  position: absolute;
  left: 25px;
  top: 20px;
  z-index: 2;
  float: left;
  margin-right: 5px;
  fill: white;
`;

const StyledShare = styled(Share)`
  position: absolute;
  right: 25px;
  top: 20px;
  z-index: 2;
  fill: white;
`;

type Props = {
  product: {
    image: string,
  },
};

const Banner = ({ product }: Props) => (
  <Section>
    <Link href="/">
      <a href="/">
        <StyledBackArrow />
      </a>
    </Link>
    <a href="#">
      <StyledShare />
    </a>
    <div>
      <Image src={`/static/${product.image}`} alt="test" />
    </div>
  </Section>
);

export default Banner;

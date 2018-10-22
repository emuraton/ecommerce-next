import React from 'react';
import styled from 'styled-components';

import MapMarker from '../SVG//MapMarker';
import AmenitiesRow from '../AmenitiesRow';

import SubHeader from './styles';

const amenities = [
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Bar', slug: 'bar' },
  { name: 'A/C', slug: 'AC' },
  { name: 'Parking', slug: 'parking' },
];

const SubHeaderProduct = ({ product }) => {
  const { name, distance } = product;
  return (
    <SubHeader.Wrapper>
      <SubHeader.Title>{name}</SubHeader.Title>
      <SubHeader.MarginWrapper>
        <SubHeader.StarsList nbStars={5} />
        <SubHeader.Container>
          <MapMarker />
          <SubHeader.FestivalName>SEMF</SubHeader.FestivalName>
          <SubHeader.Distance>{distance} away</SubHeader.Distance>
        </SubHeader.Container>
      </SubHeader.MarginWrapper>
      <AmenitiesRow amenities={amenities} />
      <SubHeader.Paragraph>
        A&O Stuttgart City is located close to the main train station (6 minutes
        by tube). The city centre with its many attractions is just a short walk
        away. The A&O Stuttgart City features 230 brand new rooms (opened summer
        2015). There is a games room on site and guests can enjoy the on-site
        snack bar. The property features a 24-hour front desk.
      </SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;

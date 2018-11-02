import React from 'react';

import MapMarker from '../SVG//MapMarker';
import AmenitiesRow from '../AmenitiesRow';
import UglyMap from '../UglyMap';

import SubHeader from './styles';

const amenities = [
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Bar', slug: 'bar' },
  { name: 'A/C', slug: 'AC' },
  { name: 'Parking', slug: 'parking' },
];

const SubHeaderProduct = ({ product }) => {
  const { name, distance, description, type, address } = product;
  const isTicket = type === 'ticket';

  return (
    <SubHeader.Wrapper>
      <SubHeader.Title>{name}</SubHeader.Title>
      <SubHeader.MarginWrapper>
        {!isTicket && <SubHeader.StarsList nbStars={5} />}
        <SubHeader.LinkMap
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://www.google.com/maps/dir/?api=1&destination=48.693397,9.187617&origin=48.793102,9.191008"
        >
          <MapMarker />
          <SubHeader.FestivalName>
            {isTicket ? address : 'SEMF'}
          </SubHeader.FestivalName>
          {!isTicket && (
            <SubHeader.Distance>{distance} away</SubHeader.Distance>
          )}
        </SubHeader.LinkMap>
      </SubHeader.MarginWrapper>
      <UglyMap
        src="/static/staticmap.jpg"
        link="https://www.google.com/maps/dir/?api=1&destination=48.693397,9.187617&origin=48.793102,9.191008"
      />
      {!isTicket && <AmenitiesRow amenities={amenities} />}
      <SubHeader.Paragraph>{description}</SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;

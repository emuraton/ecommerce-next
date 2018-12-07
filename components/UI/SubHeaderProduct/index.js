import React from 'react';

import MapMarker from '../SVG/MapMarker';
import AmenitiesRow from '../AmenitiesRow';
import UglyMap from '../UglyMap';

import SubHeader from './styles';

const amenities = [
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Bar', slug: 'bar' },
  { name: 'A/C', slug: 'AC' },
  { name: 'Parking', slug: 'parking' },
];

type Props = {
  product: { name: string, distance: string, description: string, type: string, address: string },
};

const SubHeaderProduct = ({ product }: Props) => {
  if (Object.keys(product).length === 0) return null;

  const {
    name, distance, description, type, address,
  } = product;
  const isTicket = type === 'ticket';
  const mapLink = isTicket
    ? "https://www.google.com/maps/place/48%C2%B041'36.2%22N+9%C2%B011'15.4%22E/@48.693397,9.1854283,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d48.693397!4d9.187617"
    : 'https://www.google.com/maps/dir/?api=1&destination=48.693397,9.187617&origin=48.793102,9.191008';

  return (
    <SubHeader.Wrapper>
      <SubHeader.Title>{name}</SubHeader.Title>
      <SubHeader.MarginWrapper>
        {!isTicket && <SubHeader.StarsList nbStars={5} />}
        <SubHeader.LinkMap target="_blank" rel="noopener noreferrer nofollow" href={mapLink}>
          <MapMarker />
          <SubHeader.FestivalName>{isTicket ? address : 'SEMF'}</SubHeader.FestivalName>
          {!isTicket && (
          <SubHeader.Distance>
            {distance}
            {' '}
away
          </SubHeader.Distance>
          )}
        </SubHeader.LinkMap>
      </SubHeader.MarginWrapper>
      <UglyMap src="/static/staticmap.jpg" link={mapLink} />
      {!isTicket && <AmenitiesRow amenities={amenities} />}
      <SubHeader.Paragraph>{description}</SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;

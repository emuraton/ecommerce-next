import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 30px;
  margin: 10% 25% 0 25%;
  text-align: center;
  font-size: 22px;

  color: rgb(72, 72, 72);
  border-radius: 5px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
`;

const PleaseResizeButton = () => (
  <Container>
    <div>Website only supports mobile devices!</div>
    <div>Please resize your screen or visit this site with your phone :)</div>
  </Container>
);

export default PleaseResizeButton;

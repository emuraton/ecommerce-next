import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  will-change: transform;
  background: white;
`;

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

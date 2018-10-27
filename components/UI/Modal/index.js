import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  will-change: transform;
  background: white;

  display: ${ifProp({ openModal: false }, 'none')};
`;

export default class extends React.Component {
  static defaultProps = {
    openModal: false,
  };

  render() {
    const { children, openModal } = this.props;
    return <Wrapper openModal={openModal}>{children}</Wrapper>;
  }
}

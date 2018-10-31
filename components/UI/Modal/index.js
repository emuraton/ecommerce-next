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
  transform: ${ifProp({ isOpen: false }, 'translateY(100%)', 'translateY(0)')};
  transition: all 0.3s ease 0s;
`;

export default class extends React.Component {
  static defaultProps = {
    isOpen: false,
  };

  render() {
    const { children, isOpen } = this.props;
    return <Wrapper isOpen={isOpen}>{children}</Wrapper>;
  }
}

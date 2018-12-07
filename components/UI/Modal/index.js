// @flow
import * as React from 'react';
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

type Props = {
  isOpen?: boolean,
  children: React.Node,
};

const Modal = ({ children, isOpen }: Props) => <Wrapper isOpen={isOpen}>{children}</Wrapper>;

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;

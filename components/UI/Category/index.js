import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const Button = styled.button`
  position: relative;
  display: inline-block;
  list-style: none;
  padding: 12px 10px;
  border-radius: 25px;
  background-color: white;
  color: rgb(36, 37, 41);
  border: 1px solid rgb(162, 164, 173);
  text-align: center;
  outline: none;
  cursor: pointer;

  ${ifProp(
    'active',
    css`
      background-color: rgb(0, 195, 239);
      color: white;
    `,
  )};
`;
Button.displayName = 'Button';

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
`;

const Category = ({ slug, name, active, onClick }) => {
  return (
    <div>
      <Button type="button" name={slug} active={active} onClick={onClick}>
        <Label>{name}</Label>
      </Button>
    </div>
  );
};

export default Category;

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-block;
  list-style: none;
  padding: 12px 10px;
  border-radius: 25px;
  /* background-color: rgba(36, 37, 41, 0.05); */
  background-color: white;
  color: rgb(36, 37, 41);
  border-color: rgb(162, 164, 173);
  text-align: center;
  text-decoration: none;
  outline: none;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
`;

const Category = ({ label }) => {
  return (
    <div>
      <Button>
        <Label>{label}</Label>
      </Button>
    </div>
  );
};

export default Category;

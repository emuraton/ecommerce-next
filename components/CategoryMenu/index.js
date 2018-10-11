import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  border: 1p
`;

const List = styled.ul`
  padding-left: 0px;
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const CategoryMenu = ({ categories }) => {
  return (
    <Container>
      <List>
        {categories &&
          categories.map((category, index) => (
            <Item key={index}>
              <Category label={category} />
            </Item>
          ))}
      </List>
    </Container>
  );
};

const Category = ({ label }) => {
  return (
    <div>
      <Button>
        <Label>{label}</Label>
      </Button>
    </div>
  );
};

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
  padding: 10px 15px;
`;

export default CategoryMenu;

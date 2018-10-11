import React from 'react';
import styled from 'styled-components';

import Category from '../Category';

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
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
          categories.map(({ pk, name }) => (
            <Item key={pk}>
              <Category label={name} />
            </Item>
          ))}
      </List>
    </Container>
  );
};

export default CategoryMenu;

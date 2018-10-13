import React from 'react';
import styled from 'styled-components';

import Category from '../Category';

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0px;
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const CategoryMenu = ({ categories, slideIndex, onClick }) => {
  return (
    <Container>
      <List>
        {categories &&
          categories.map(({ pk, name, slug }, index) => (
            <Item key={pk}>
              <Category
                name={name}
                slug={slug}
                active={index === slideIndex}
                onClick={onClick}
              />
            </Item>
          ))}
      </List>
    </Container>
  );
};

export default CategoryMenu;

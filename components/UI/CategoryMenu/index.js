// @flow
import * as React from 'react';
import styled from 'styled-components';

import Category from '../Category';

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  display: inline-block;
  background-color: white;
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

type Props = {
  categories: Array<{ pk: string, name: string, slug: string }>,
  slideIndex: number,
  onClick: (event: SyntheticMouseEvent<any>) => {},
};

const CategoryMenu = ({ categories, slideIndex, onClick }: Props) => {
  if (!categories) return null;
  return (
    <Container>
      <List>
        {categories.map(({ pk, name, slug }, index) => (
          <Item key={pk}>
            <Category name={name} slug={slug} active={index === slideIndex} onClick={onClick} />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default CategoryMenu;

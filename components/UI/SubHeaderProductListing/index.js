import React from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 5px;
  margin-top: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    &::after {
      content: '\u25CF';
      color: rgb(0, 195, 239);
      margin: 0 5px;
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: rgb(0, 132, 137);
  margin-top: 0px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
`;

const SubHeader = ({ name }) => {
  return (
    <Container>
      <Title>Stuttgart Electronic Music Festival 2018</Title>
      <List>
        <ListItem>Stuttgart</ListItem>
        <ListItem>8 December 2018</ListItem>
        <ListItem>Electronic</ListItem>
        <ListItem>House</ListItem>
        <ListItem>Techno</ListItem>
      </List>
    </Container>
  );
};

export default SubHeader;

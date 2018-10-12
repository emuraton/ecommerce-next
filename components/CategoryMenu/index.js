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

export default class extends React.Component {
  state = {
    activeSlug: 'ticket',
  };

  onClick = e => {
    e.preventDefault();
    const activeSlug = { activeSlug: e.currentTarget.name };
    this.setState(() => activeSlug);
  };

  render() {
    const { categories } = this.props;
    const { activeSlug } = this.state;
    return (
      <Container>
        <List>
          {categories &&
            categories.map(({ pk, name, slug }) => (
              <Item key={pk}>
                <Category
                  name={name}
                  slug={slug}
                  active={slug === activeSlug}
                  onClick={this.onClick}
                />
              </Item>
            ))}
        </List>
      </Container>
    );
  }
}

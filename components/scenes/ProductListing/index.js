import React from 'react';

import CategoryMenu from '../../UI/CategoryMenu';
import ProductList from '../../UI/ProductList';

export default class ProductListing extends React.PureComponent {
  state = {
    activeSlug: 'ticket',
  };

  onClick = e => {
    e.preventDefault();
    const activeSlug = { activeSlug: e.currentTarget.name };
    this.setState(() => activeSlug);
  };

  render() {
    const { activeSlug } = this.state;
    const { categories, productsByCategories } = this.props;

    return (
      <React.Fragment>
        <CategoryMenu
          activeSlug={activeSlug}
          onClick={this.onClick}
          categories={categories}
        />
        <ProductList
          productsByCategories={productsByCategories}
          activeSlug={activeSlug}
        />
      </React.Fragment>
    );
  }
}

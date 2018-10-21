import React from 'react';

import CategoryMenu from '../../UI/CategoryMenu';
import ProductListMobile from '../../UI/ProductListMobile';
import SubHeaderProductListing from '../../UI/SubHeaderProductListing';

export default class ProductListing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
    this.enumCategories = Object.keys(this.props.productsByCategories).reduce(
      (acc, category, index) => {
        acc[category] = index;
        return acc;
      },
      {},
    );
  }

  onClick = e => {
    e.preventDefault();
    const name = e.currentTarget.name;
    this.setState(() => ({
      slideIndex: this.enumCategories[name],
    }));
  };

  onSlide = slideIndex => {
    this.setState(() => ({ slideIndex: slideIndex }));
  };

  render() {
    const { slideIndex } = this.state;
    const { categories, productsByCategories } = this.props;

    return (
      <React.Fragment>
        <SubHeaderProductListing />
        <CategoryMenu
          onClick={this.onClick}
          categories={categories}
          slideIndex={slideIndex}
        />
        <ProductListMobile
          productsByCategories={productsByCategories}
          slideIndex={slideIndex}
          onSlide={this.onSlide}
        />
      </React.Fragment>
    );
  }
}

import React from 'react';

import CategoryMenu from '../../UI/CategoryMenu';
import ProductListMobile from '../../UI/ProductListMobile';
import SubHeaderProductListing from '../../UI/SubHeaderProductListing';

type Props = {
  productsByCategories: Array<{ pk: string, name: string, slug: string }>,
  categories: Array<{ pk: string, name: string, slug: string }>,
};

export default class ProductListing extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
    const { productsByCategories } = this.props;
    this.enumCategories = Object.keys(productsByCategories).reduce((acc, category, index) => {
      acc[category] = index;
      return acc;
    }, {});
  }

  onClick = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget;
    this.setState(() => ({
      slideIndex: this.enumCategories[name],
    }));
  };

  onSlide = (slideIndex) => {
    this.setState(() => ({ slideIndex }));
  };

  render() {
    const { slideIndex } = this.state;
    const { categories, productsByCategories } = this.props;

    return (
      <React.Fragment>
        <SubHeaderProductListing />
        <CategoryMenu onClick={this.onClick} categories={categories} slideIndex={slideIndex} />
        <ProductListMobile
          productsByCategories={productsByCategories}
          slideIndex={slideIndex}
          onSlide={this.onSlide}
        />
      </React.Fragment>
    );
  }
}

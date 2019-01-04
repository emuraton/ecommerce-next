import React, { Fragment } from 'react';

import ProductListing from '../components/scenes/ProductListing';

import Header from '../components/UI/Header';
import Head from '../components/Head';

import productGroups from '../mocks/productGroups';

export default class extends React.Component {
  static async getInitialProps() {
    const categories = productGroups
      ? productGroups.map(group => ({
        pk: group.pk,
        name: group.name,
        slug: group.slug,
      }))
      : [];
    const productsByCategories = productGroups.reduce((acc, group) => {
      acc[group.slug] = group.products;
      return acc;
    }, {});

    return { categories, productsByCategories };
  }

  render() {
    const { categories, productsByCategories } = this.props;

    return (
      <Fragment>
        <Head title="Product Listing" />
        <Header />
        <ProductListing categories={categories} productsByCategories={productsByCategories} />
      </Fragment>
    );
  }
}

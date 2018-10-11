import React, { Fragment } from 'react';

import CategoryMenu from '../components/CategoryMenu';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Head from '../components/Head';

import productGroups from '../mocks/productGroups';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const categories = productGroups
      ? productGroups.map(group => ({
          pk: group.pk,
          name: group.name,
          slug: group.slug,
        }))
      : [];
    return { categories };
  }

  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        <Head title="Product Listing" />
        <Header />
        <CategoryMenu categories={categories} />
        <ProductList />
      </Fragment>
    );
  }
}

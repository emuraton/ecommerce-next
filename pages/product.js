import React, { Fragment } from 'react';

import Head from '../components/Head';
import Header from '../components/UI/Header';
import ProductDetails from '../components/scenes/ProductDetails';

import productGroups from '../mocks/productGroups';
import items from '../mocks/items';

export default class extends React.Component {
  static async getInitialProps() {
    // TODO refactor later
    return { productGroups, items };
  }

  render() {
    return (
      <Fragment>
        <Head title="Product Details" />
        <Header />
        <ProductDetails {...this.props} />
      </Fragment>
    );
  }
}

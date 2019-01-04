import React, { Fragment } from 'react';

import Head from '../components/Head';
import Header from '../components/UI/Header';
import ProductDetails from '../components/scenes/ProductDetails';

import productGroups from '../mocks/productGroups';
import items from '../mocks/items';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const { type } = query;
    const productGroup = type === 'ticket' ? productGroups[0] : productGroups[1];
    const product = productGroup.products[0];
    const typedItems = items[type];

    return { product, items: typedItems, type };
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

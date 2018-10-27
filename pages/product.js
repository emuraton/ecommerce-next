import React, { Fragment } from 'react';

import Head from '../components/Head';
import Header from '../components/UI/Header';
import ProductDetails from '../components/scenes/ProductDetails';

import productGroups from '../mocks/productGroups';
import { hotelItems } from '../mocks/items';

import '../global-styles.css';

export default class extends React.Component {
  static async getInitialProps() {
    const product = productGroups[1].products[0];
    return { product, items: hotelItems };
  }

  render() {
    const { product, items } = this.props;
    return (
      <Fragment>
        <Head title="Product Details" />
        <Header />
        <ProductDetails product={product} items={items} />
      </Fragment>
    );
  }
}

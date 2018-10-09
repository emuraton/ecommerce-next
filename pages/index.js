import React, { Fragment } from 'react';

import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Head from '../components/Head';

const Page = () => {
  return (
    <Fragment>
      <Head title="Product Listing" />
      <Header />
      <ProductList />
      <p>Welcome to next.js!</p>
    </Fragment>
  );
};
export default Page;

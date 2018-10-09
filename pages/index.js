import React, { Fragment } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Page = () => {
  return (
    <Fragment>
      <Header />
      <ProductList />
      <p>Welcome to next.js!</p>
    </Fragment>
  );
};
export default Page;

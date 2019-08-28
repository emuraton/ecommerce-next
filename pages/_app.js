import React from 'react';
import App, { Container } from 'next/app';

import { BasketProvider } from '../components/context/BasketContext';
import PleaseResizeButton from '../components/PleaseResizeButton';

import '../global-styles.css';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    isMobile: true,
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateState);
    // TODO use express-device to get screen size from SSR
    this.updateState();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateState);
  }

  updateState = () => {
    const isMobile = window ? window.innerWidth < 569 : false;
    this.setState(() => ({ isMobile }));
  };

  render() {
    const { Component, pageProps } = this.props;
    const { isMobile } = this.state;

    return (
      <Container>
        {isMobile ? (
          <BasketProvider>
            <Component {...pageProps} />
          </BasketProvider>
        ) : (
          <PleaseResizeButton />
        )}
      </Container>
    );
  }
}

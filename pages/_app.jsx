/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globale.scss';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

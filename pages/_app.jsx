/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globale.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

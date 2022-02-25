import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Filters from './Filters';
import Products from './Products';
import productsActionTypes from '../store/actionTypes/products';
import filtersActionTypes from '../store/actionTypes/filters';

function Shop({ slug }) {
  const filters = useSelector((state) => state.filters);
  const { query } = filters;
  const product = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const debounce = (fn, ms) => {
    let timeout;
    return function newFn(...arg) {
      const fnCall = () => {
        fn.apply(this, arg);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  async function getNewProducts(q) {
    try {
      const response = await fetch(
        `https://getlens-master.stage.dev.family/api/pages/${slug}${q}`
      );
      const data = await response.json();
      dispatch({
        type: productsActionTypes.SET_PRODUCTS,
        payload: data?.products,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const loadNewProducts = useCallback(debounce(getNewProducts, 500), []);

  useEffect(() => {
    dispatch({ type: filtersActionTypes.SET_QUERY });
  }, [filters]);

  useEffect(() => {
    loadNewProducts(query);
  }, [query]);

  return (
    <>
      <Head>
        <meta keywords={slug} />
        <title>Объективы</title>
      </Head>
      <Filters
        filters={filters}
        amountOfProduct={product.length}
        title='Объективы'
      />
      <Products products={product} />
    </>
  );
}

export default Shop;

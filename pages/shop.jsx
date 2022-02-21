import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Products from '../components/Products';
import productsActionTypes from '../store/actionTypes/products';
import filtersActionTypes from '../store/actionTypes/filters';

function Shop() {
  const filters = useSelector((state) => state.filters);
  const { query } = filters;
  const product = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  async function getNewProducts(q) {
    try {
      const response = await fetch(
        `https://getlens-master.stage.dev.family/api/pages/obektivy${q}`
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

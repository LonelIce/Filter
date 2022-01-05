import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../components/Filters/Filters';
import Products from '../components/Products/Products';

function Shop() {
  const filters = useSelector((state) => state.filter.filters);
  const query = useSelector((state) => state.filter.query);
  const product = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  async function getNewProducts(q) {
    const response = await fetch(
      `https://getlens-master.stage.dev.family/api/pages/obektivy${q}`
    );
    const data = await response.json();
    dispatch({ type: 'SET_PRODUCTS', payload: data.products });
  }

  useEffect(() => {
    dispatch({ type: 'SET_QUERY' });
  }, [filters]);
  useEffect(() => {
    getNewProducts(query);
  }, [query]);

  return (
    <>
      <Filters
        filters={filters}
        amountOfProduct={product.length}
        categoryCode='obuektivy'
      />
      <Products products={product} />
    </>
  );
}

export default Shop;

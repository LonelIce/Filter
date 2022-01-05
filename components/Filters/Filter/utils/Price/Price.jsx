import { useDispatch } from 'react-redux';
import React from 'react';
import styles from './Price.module.scss';

function Price({ title, maxPrice, minPrice }) {
  const dispatch = useDispatch();

  const changeMinPrice = (price) => {
    let newPrice = price;
    if (price[0] === '0') newPrice = newPrice.replace('0', '');
    dispatch({ type: 'CHANGE_MIN_PRICE', payload: newPrice });
  };

  const changeMaxPrice = (price) => {
    let newPrice = price;
    if (price[0] === '0') newPrice = newPrice.replace('0', '');
    dispatch({ type: 'CHANGE_MAX_PRICE', payload: newPrice });
  };

  return (
    <div>
      <span className={styles.title}>{title}, ₽</span>
      <div className={styles.price}>
        <input
          type='number'
          onChange={(e) => changeMinPrice(e.target.value)}
          className={styles.min_price}
          value={minPrice}
        />
        <input
          type='number'
          onChange={(e) => changeMaxPrice(e.target.value)}
          className={styles.max_price}
          value={maxPrice}
        />
      </div>
    </div>
  );
}

export default Price;

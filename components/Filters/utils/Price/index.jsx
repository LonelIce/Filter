import React from 'react';
import { useDispatch } from 'react-redux';
import Helper from '../../../Helper/Helper';
import {
  changeMaxPriceAction,
  changeMinPriceAction,
} from '../../../../store/filerReducer';
import styles from './Price.module.scss';

function Price({ data }) {
  const dispatch = useDispatch();

  const changeMinPrice = (price) => {
    dispatch(changeMinPriceAction(Helper.formatPriceInput(price)));
  };

  const changeMaxPrice = (price) => {
    dispatch(changeMaxPriceAction(Helper.formatPriceInput(price)));
  };

  return (
    <div>
      <span className={styles.title}>{data.title}, ₽</span>

      <div className={styles.price}>
        <input
          type='text'
          onChange={(e) => changeMinPrice(e.target.value)}
          className={styles.min_price}
          value={Helper.addSpaces(data.min)}
        />
        <input
          type='text'
          onChange={(e) => changeMaxPrice(e.target.value)}
          className={styles.max_price}
          value={Helper.addSpaces(data.max)}
        />
      </div>
    </div>
  );
}

export default Price;

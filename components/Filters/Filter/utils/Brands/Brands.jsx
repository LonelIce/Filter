import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Brands.module.scss';
import Checkbox from '../Checkbox/Checkbox';

function Brands({ data }) {
  const dispatch = useDispatch();

  const changeChecked = (value) => {
    dispatch({ type: 'CHANGE_CHECKED_BRANDS', payload: value });
  };

  return (
    <div>
      <span className={styles.title}>{data.title}</span>
      {data.items.map((brand) => (
        <Checkbox
          key={brand.value}
          value={brand.value}
          title={brand.title}
          id={brand.title}
          checked={brand.checked}
          onChange={(e) => {
            changeChecked(e.target.value);
          }}
        />
      ))}
    </div>
  );
}

export default Brands;

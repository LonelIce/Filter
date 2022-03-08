import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '../Checkbox';
import { changeCheckedBrandsAction } from '../../../../store/filerReducer';
import styles from './Brands.module.scss';

function Brands({ data }) {
  const dispatch = useDispatch();

  const changeChecked = (value) => {
    dispatch(changeCheckedBrandsAction(value));
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

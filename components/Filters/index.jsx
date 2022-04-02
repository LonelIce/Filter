import React from 'react';
import Price from './utils/Price';
import IsNew from './utils/IsNew';
import IsPromo from './utils/IsPromo';
import Brands from './utils/Brands';
import styles from './Filters.module.scss';

function Filters({ filters, amountOfProduct, title }) {
  return (
    <div className={styles.filters}>
      <h1>{title}</h1>
      <div className={styles.quantity}>Товаров {amountOfProduct}</div>
      <div className={styles.filter}>
        <Price data={filters.price} />
      </div>
      <div className={styles.filter}>
        <IsNew data={filters.isNew} />
      </div>
      <div className={styles.filter}>
        <IsPromo data={filters.isPromo} />
      </div>
      <div className={styles.filter}>
        <Brands data={filters.brands} />
      </div>
    </div>
  );
}

export default Filters;

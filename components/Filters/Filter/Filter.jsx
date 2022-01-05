import React from 'react';
import styles from './Filter.module.scss';
import Price from './utils/Price/Price';
import Brands from './utils/Brands/Brands';
import IsNew from './utils/IsNew/IsNew';
import IsPromo from './utils/IsPromo/IsPromo';

function Filter({ data }) {
  return (
    <div className={styles.filter}>
      {(() => {
        switch (data.slug) {
          case 'price':
            return (
              <Price
                title={data.title}
                maxPrice={data.max}
                minPrice={data.min}
              />
            );
          case 'brands':
            return <Brands data={data} />;
          case 'is_new':
            return <IsNew data={data} />;
          case 'is_promo':
            return <IsPromo data={data} />;
          default:
            return <div>Фильры не найдены</div>;
        }
      })()}
    </div>
  );
}

export default Filter;

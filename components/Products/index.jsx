import React from 'react';
import ProductCard from './ProductCard';
import styles from './Products.module.scss';

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.length !== 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      ) : (
        <div className={styles.noProducts}>Товар не найден</div>
      )}
    </div>
  );
}

export default Products;

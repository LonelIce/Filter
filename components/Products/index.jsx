import React from 'react';
import ProductCard from './ProductCard';
import styles from './Products.module.scss';

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.length !== 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            isNew={product.is_new}
            isSecondHand={product.is_second_hand}
          />
        ))
      ) : (
        <div>Товар не найден</div>
      )}
    </div>
  );
}

export default Products;

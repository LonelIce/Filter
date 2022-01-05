import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

function ProductCard({ image, title, price, isNew, inStock, condition }) {
  return (
    <div className={styles.product_card}>
      <div className={styles.img_product}>
        {isNew ? <div className={styles.new}>новинка</div> : ''}
        <Image src={image.desktop.x1} layout='fill' />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <div className={styles.price}>
          <span className={styles.number}>{price} ₽</span>
          {(() => {
            if (!inStock) return <span className={styles.stock}>Новое</span>;
            if (condition !== 0) return '';
            return <span className={styles.stock}>Новое</span>;
          })()}
        </div>
        <div className={styles.buttons}>
          <button type='button'>В корзину</button>
          <div className={styles.heart} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

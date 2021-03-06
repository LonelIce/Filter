import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Helper from '../../Helper/Helper';
import styles from './ProductCard.module.scss';

function ProductCard({ data }) {
  return (
    <Link href={`/${data.category.slug}/${data.slug}`}>
      <div className={styles.product_card}>
        <div className={styles.img_product}>
          {data.is_new && <div className={styles.new}>новинка</div>}
          <Image src={data.image.desktop.x1} layout='fill' />
        </div>
        <div className={styles.info}>
          <h2>{data.title}</h2>
          <div className={styles.price}>
            <span className={styles.number}>
              {Helper.formatPriceTag(data.price)} ₽
            </span>
            {!data.is_second_hand && (
              <span className={styles.stock}>Новое</span>
            )}
          </div>
          <div className={styles.buttons}>
            <button type='button'>В корзину</button>
            <div className={styles.heart} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

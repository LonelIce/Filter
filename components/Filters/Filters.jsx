import React from 'react';
import Filter from './Filter/Filter';
import styles from './Filters.module.scss';

//Я понимаю что это  излишне, как и функционал связаный с этим пропсом(categoryCode), но я понимаю что название категории вероятнее всего берестся с сервера, а, каким образом это делается, я не додумался поэтому решил сделать такой костыль
const CATEGORY_NAME = [
  {
    code: 'obuektivy',
    name: 'Объективы',
  },
];
const getCategoryName = (code) => {
  let name = '';
  CATEGORY_NAME.forEach((element) => {
    if (element.code === code) {
      name = element.name;
    }
  });
  return name;
};

function Filters({ filters, amountOfProduct, categoryCode }) {
  return (
    <div>
      <div className={styles.filter}>
        <h1>{getCategoryName(categoryCode)}</h1>
        <div className={styles.quantity}>Товаров {amountOfProduct}</div>
        {filters.map((filter) => (
          <Filter key={filter.id} data={filter} />
        ))}
      </div>
    </div>
  );
}

export default Filters;

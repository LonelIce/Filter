export const getFormattedQuery = (state) => {
  let query = '?';

  if (
    (state.price.min !== '0' && state.price.min !== '') ||
    (state.price.max !== '79000' && state.price.max !== '')
  )
    query += `price[min]=${state.price.min}&price[max]=${state.price.max}`;
  else query += '';

  if (state.isNew.checked === false) query += '';
  else if (query[query.length - 1] !== '?') query += '&is_new[]=true';
  else query += 'is_new[]=true';

  if (state.isPromo.checked === false) query += '';
  else if (query[query.length - 1] !== '?') query += '&is_promo[]=true';
  else query += 'is_promo[]=true';

  let isChanged = false; // она нужна мне для сравнения дефолного состояния и имеющегося
  state.brands.items.forEach((brand) => {
    if (brand.checked !== true) isChanged = true;
  });
  if (isChanged === true)
    state.brands.items.forEach((brand) => {
      if (brand.checked === true)
        if (query[query.length - 1] === '?') query += `brands[]=${brand.value}`;
        else query += `&brands[]=${brand.value}`;
    });

  if (query === '?') return '';
  return query;
};

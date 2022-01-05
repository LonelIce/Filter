export class Helper {
  static getQuery = (state) => {
    let query = '?';
    state.filters.forEach((filter) => {
      if (filter.slug === 'price')
        if (
          (filter.min !== '0' && filter.min !== '') ||
          (filter.max !== '79000' && filter.max !== '')
        )
          query += `price[min]=${filter.min}&price[max]=${filter.max}`;
        else query += '';
      else if (filter.slug === 'is_new')
        if (filter.checked === false) query += '';
        else if (query[query.length - 1] !== '?') query += '&is_new[]=true';
        else query += 'is_new[]=true';
      else if (filter.slug === 'is_promo')
        if (filter.checked === false) query += '';
        else if (query[query.length - 1] !== '?') query += '&is_promo[]=true';
        else query += 'is_promo[]=true';
      else if (filter.slug === 'brands') {
        let isChanged = false; // она нужна мне для сравнения дефолного состояния и имеющегося
        /* let isEmpty = true; */
        filter.items.forEach((brand) => {
          if (brand.checked !== true) isChanged = true;
        });
        if (isChanged === true)
          filter.items.forEach((brand) => {
            if (brand.checked === true)
              if (query[query.length - 1] === '?')
                query += `brands[]=${brand.value}`;
              else query += `&brands[]=${brand.value}`;
          });
      }
    });
    if (query === '?') return '';
    return query;
  };
}

import { Helper } from './helper/Helper';

const defaultState = {
  filters: [
    {
      id: 1,
      slug: 'price',
      title: 'Цена',
      min: '0',
      max: '79000',
    },
    {
      id: 2,
      title: 'Новинка',
      slug: 'is_new',
      checked: false,
    },
    {
      id: 3,
      title: 'Акция',
      slug: 'is_promo',
      checked: false,
    },
    {
      id: 4,
      title: 'Бренды',
      slug: 'brands',
      is_selected: true,
      items: [
        {
          title: 'Canon',
          checked: true,
          value: '1',
        },
        {
          title: 'Nikon',
          checked: true,
          value: '9',
        },
      ],
    },
  ],
  query: '',
};
export const filterReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_MIN_PRICE':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.slug === 'price')
            return { ...filter, min: action.payload };
          return filter;
        }),
      };
    case 'CHANGE_MAX_PRICE':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.slug === 'price')
            return {
              ...filter,
              max: action.payload,
              query: `price[min]=${filter.min}&price[max]=${action.payload}`,
            };
          return filter;
        }),
      };
    case 'CHANGE_CHECKED_BRANDS':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.slug === 'brands') {
            return {
              ...filter,
              items: filter.items.map((brand) => {
                if (brand.value === action.payload) {
                  return { ...brand, checked: !brand.checked };
                }
                return brand;
              }),
            };
          }
          return filter;
        }),
      };
    case 'CHANGE_CHECKED_IS_NEW':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.slug === 'is_new')
            return { ...filter, checked: !filter.checked };
          return filter;
        }),
      };
    case 'CHANGE_CHECKED_IS_PROMO':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.slug === 'is_promo')
            return { ...filter, checked: !filter.checked };
          return filter;
        }),
      };
    case 'SET_QUERY': {
      const query = Helper.getQuery(state);
      return { ...state, query };
    }
    default:
      return state;
  }
};

import actionTypes from './actionTypes/filters';

const defaultState = {
  price: {
    id: 1,
    slug: 'price',
    title: 'Цена',
    min: '0',
    max: '79000',
  },
  isNew: {
    id: 2,
    title: 'Новинка',
    slug: 'is_new',
    checked: false,
  },
  isPromo: {
    id: 3,
    title: 'Акция',
    slug: 'is_promo',
    checked: false,
  },
  brands: {
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
};

export const filterReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_MIN_PRICE: {
      return { ...state, price: { ...state.price, min: action.payload } };
    }
    case actionTypes.CHANGE_MAX_PRICE:
      return { ...state, price: { ...state.price, max: action.payload } };
    case actionTypes.CHANGE_CHECKED_BRANDS:
      return {
        ...state,
        brands: {
          ...state.brands,
          items: state.brands.items.map((brand) => {
            if (brand.value === action.payload) {
              return { ...brand, checked: !brand.checked };
            }
            return brand;
          }),
        },
      };
    case actionTypes.CHANGE_CHECKED_IS_NEW:
      return {
        ...state,
        isNew: { ...state.isNew, checked: !state.isNew.checked },
      };
    case actionTypes.CHANGE_CHECKED_IS_PROMO:
      return {
        ...state,
        isPromo: { ...state.isPromo, checked: !state.isPromo.checked },
      };
    default:
      return state;
  }
};

export const changeMinPriceAction = (payload) => ({
  type: actionTypes.CHANGE_MIN_PRICE,
  payload,
});
export const changeMaxPriceAction = (payload) => ({
  type: actionTypes.CHANGE_MAX_PRICE,
  payload,
});
export const changeCheckedBrandsAction = (payload) => ({
  type: actionTypes.CHANGE_CHECKED_BRANDS,
  payload,
});
export const changeCheckedIsNewAction = () => ({
  type: actionTypes.CHANGE_CHECKED_IS_NEW,
});
export const changeCheckedIsPromoAction = () => ({
  type: actionTypes.CHANGE_CHECKED_IS_PROMO,
});

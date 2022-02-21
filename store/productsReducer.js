import actionTypes from './actionTypes/products';

const defaultState = {
  products: [],
};

export const productsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

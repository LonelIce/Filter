const defaultState = {
  products: [],
};

export const productsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

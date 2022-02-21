import { combineReducers, createStore } from 'redux';
import { filterReducer } from './filerReducer';
import { productsReducer } from './productsReducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer);

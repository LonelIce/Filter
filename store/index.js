import { combineReducers, createStore } from 'redux';
import { filterReducer } from './filerReducer';
import { productsReducer } from './productsReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer);

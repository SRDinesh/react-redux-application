import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';
import productReducer from './product.reducer';

export default () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
      products: productReducer,
    },
  });
};

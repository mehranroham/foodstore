import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop';
import recipeReducer from './recipes';

const store = configureStore({
  reducer: { shop: shopReducer, recipe: recipeReducer },
});

export default store;

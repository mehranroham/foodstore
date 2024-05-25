import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop';
import recipeReducer from './recipes';

const store = configureStore({
  reducer: { shop: shopReducer, recipe: recipeReducer },
});

export default store;

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shop: shopReducer,
  recipe: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

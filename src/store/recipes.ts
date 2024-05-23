import { createSlice } from '@reduxjs/toolkit';
import Recipes from '../data/Recipes';

const initialState = {
  recipes: Recipes,
};

const recipeReducer = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecepi(state, action) {
      const id = state.recipes.length + 1;
      // state.recipes.push(
      //   new RecipesModel(id, action.payload.name, action.payload.recipe)
      // );
      state.recipes = [
        ...state.recipes,
        { id, name: action.payload.name, recipe: action.payload.recipe },
      ];
    },
  },
});

export const recipeActions = recipeReducer.actions;

export default recipeReducer.reducer;

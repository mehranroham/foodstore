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
    editRecipe(state, action) {
      const otherRecipes = state.recipes.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.recipes = [
        ...otherRecipes,
        { id: action.payload.id, ...action.payload.data },
      ];
    },
  },
});

export const recipeActions = recipeReducer.actions;

export default recipeReducer.reducer;

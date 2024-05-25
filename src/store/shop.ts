import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FOODS } from '../data/Foods';

interface Food {
  id?: number;
  name?: string;
  src?: string;
  description?: string;
  price?: number;
  quantity?: number;
  category?: string;
}

interface State {
  foods: Food[];
  filtredData: Food[];
  orders: Food[];
}

const initialState: State = {
  foods: FOODS,
  filtredData: FOODS,
  orders: [],
};

const shopReducer = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const addedFood = state.orders.find(
        (order) => order.id === action.payload
      );
      const selectedFood = state.foods.find(
        (food) => food.id === action.payload
      );

      if (addedFood) {
        addedFood.quantity!++;
      } else {
        state.orders.push({ ...selectedFood, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const removedFoodIndex = state.orders.findIndex(
        (order) => order.id === action.payload
      );

      if (removedFoodIndex !== -1) {
        const removedFood = state.orders[removedFoodIndex];
        if (removedFood.quantity && removedFood.quantity > 1) {
          removedFood.quantity--;
        } else {
          state.orders.splice(removedFoodIndex, 1);
        }
      }
    },
    filterHandler(
      state,
      action: PayloadAction<{ searchInput: string; category: string }>
    ) {
      const filteredFoods = state.foods.filter(
        (food) =>
          food
            .name!.toLowerCase()
            .includes(action.payload.searchInput.toLowerCase()) &&
          (action.payload.category === 'all' ||
            food.category === action.payload.category)
      );

      state.filtredData = filteredFoods;
    },
  },
});

export const shopActions = shopReducer.actions;
export default shopReducer.reducer;

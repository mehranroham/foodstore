import { createSlice } from '@reduxjs/toolkit';
import { FOODS } from '../data/Foods';

const initialState = {
  foods: FOODS,
  orders: [],
};

const shopReducer = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart(state, action) {
      const addedFood = state.orders.find((order) => {
        console.log(order.id);
        return order.id === action.payload;
      });

      const selectedFood = state.foods.find((food) => {
        return food.id === action.payload;
      });

      if (addedFood) {
        addedFood.quantity++;
      } else {
        state.orders.push(selectedFood);
      }
    },
    removeFromCart(state, action) {
      const removedFood = state.orders.find((order) => {
        console.log(order.id);
        return order.id === action.payload;
      });

      const newOrders = state.orders.filter((order) => {
        return order.id != action.payload;
      });

      if (removedFood && removedFood.quantity > 1) {
        removedFood.quantity--;
      } else {
        state.orders = newOrders;
      }
    },
  },
});

export const shopActions = shopReducer.actions;

export default shopReducer.reducer;

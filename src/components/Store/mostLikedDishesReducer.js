import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem('dishes-data') !== null ? JSON.parse(localStorage.getItem('dishes-data')) : []

console.log("Local Storage:: ", data);

const initialState = {
  items: data,
};

const mostLikedDishesReducer = createSlice({
  name: "mostLikedDishes",
  initialState,
  reducers: {
    updateList(state, action) {
      state.items = action.payload;
      localStorage.setItem('dishes-data', state)
    },
  },
});

export const { updateList } = mostLikedDishesReducer.actions;

export default mostLikedDishesReducer.reducer;

import { configureStore } from '@reduxjs/toolkit';
import mostLikedDishesReducer from './mostLikedDishesReducer';

const Store = configureStore({
    reducer: {
        mostLikedDishes: mostLikedDishesReducer
    },
})

export default Store;
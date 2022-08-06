import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        state.items = state.items.map((item) =>
          item.id === product.id ? { ...exist, qty: item.qty + 1 } : item
        );
      } else {
        state.items = [...state.items, { ...product, qty: 1 }];
      }
    },
    removeFromBasket: (state, action) => {
      const product = action.payload;
      const exist = state.items.find((item) => item.id === product.id);

      if (exist.qty === 1) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items = state.items.map((item) =>
          item.id === product.id ? { ...exist, qty: item.qty - 1 } : item
        );
      }
    },
    deleteBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    reset: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, deleteBasket, reset } =
  basketSlice.actions;

export const selectBasketitems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

const basketReducer = basketSlice.reducer;

export default basketReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    add(state, action) {
      state.items[action.payload.title] = action.payload;
      state.totalQuantity = 1;
    },
    incrementQty(state, action) {
      const newQty = state.items[action.payload].quantity + 1;
      const newTotal = newQty * state.items[action.payload].price;
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: newQty,
        total: newTotal,
      };
      state.totalQuantity++;
    },
    decrementQty(state, action) {
      const newQty = state.items[action.payload].quantity - 1;
      const newTotal = newQty * state.items[action.payload].price;
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: newQty,
        total: newTotal,
      };
      state.totalQuantity++;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

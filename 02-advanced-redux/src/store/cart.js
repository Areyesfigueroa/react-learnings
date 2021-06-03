import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: true,
  items: {
    "Test Item": {
      title: "Test Item",
      quantity: 3,
      total: 18,
      price: 6,
    },
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items[action.payload.title] = action.payload;
    },
    incrementQty(state, action) {
      const newQty = state.items[action.payload].quantity + 1;
      const newTotal = newQty * state.items[action.payload].price;
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: newQty,
        total: newTotal,
      };
    },
    decrementQty(state, action) {
      const newQty = state.items[action.payload].quantity - 1;
      const newTotal = newQty * state.items[action.payload].price;
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: newQty,
        total: newTotal,
      };
    },
    toggleShow(state) {
      console.log("Toggle");
      state.show = !state.show;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

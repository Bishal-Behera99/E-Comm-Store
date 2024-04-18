import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "Cartslice",
  initialState: {
    cart: [],
  },

  reducers: {
    mycart: (state, action) => {
      const item = state.cart.find((items) => {
        return items.id == action.payload.id;
      });
      if (item) {
        item.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload.id,
        image: action.payload.image,
        desc: action.payload.description,
        title: action.payload.title,
        price: action.payload.price,
      });
    },

    removecart: (state, action) => {
      const item = state.cart.find((items) => {
        return items.id == action.payload.id;
      });
      if (item) {
        item.quantity -= 1;
        if (item.quantity == 0) {
          state.cart = state.cart.filter((data) => {
            return data.id !== action.payload.id;
          });
        }
      }
    },
  },
});

export default Cartslice.reducer;

export const { mycart, removecart } = Cartslice.actions;

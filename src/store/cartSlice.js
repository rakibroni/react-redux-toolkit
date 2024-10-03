import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Increment quantity for existing item
        existingItem.quantity++;
        state.total += price; // Add price again to total
        state.totalQuantity++; // Increment total quantity
      } else {
        // Add new item to cart
        state.items.push({ id, title, image, price, quantity: 1 });
        state.total += price; // Add initial price for the first item
        state.totalQuantity++; // Increment total quantity
      }
    },
    removeToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update total and totalQuantity before removing
        state.total -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;

        // Remove the item from the cart
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;

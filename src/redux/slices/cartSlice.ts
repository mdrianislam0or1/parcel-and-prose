import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: CartState = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      cartSlice.caseReducers.calculateCartPrices(state);
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      cartSlice.caseReducers.calculateCartPrices(state);
    },
    updateItemQuantity(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
      cartSlice.caseReducers.calculateCartPrices(state);
    },
    calculateCartPrices(state) {
      state.itemsPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.taxPrice = 0.1 * state.itemsPrice;
      state.shippingPrice = 5;
      state.totalPrice =
        state.itemsPrice + state.taxPrice + state.shippingPrice;
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsPrice = (state: RootState) => state.cart.itemsPrice;
export const selectCartShippingPrice = (state: RootState) =>
  state.cart.shippingPrice;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  calculateCartPrices,
} = cartSlice.actions;
export default cartSlice.reducer;

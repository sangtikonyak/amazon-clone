import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchStatus from "./FetchStatusSlice";
import bag from "./BagSlice";

const ItemStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatus.reducer,
    bag : bag.reducer
  },
});

export default ItemStore;

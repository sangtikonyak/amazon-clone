import { createSlice } from "@reduxjs/toolkit";

const bag = createSlice({
  name: "bagslice",
  initialState: [],
  reducers: {
    addToBag: (state, actions) => {
      state.push(actions.payload);
    },
    removeItemFromBag: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload.id);
    },
  },
});

export const bagActions = bag.actions;
export default bag;

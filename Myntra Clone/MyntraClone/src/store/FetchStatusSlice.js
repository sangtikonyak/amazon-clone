import { createSlice } from "@reduxjs/toolkit";

const fetchStatus = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchDone: false, // pending or done
    currentlyFetching: false,
  },
  reducers: {
    FetchDone: (state) => {
      state.fetchDone = true;
    },

    FetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    FetchingDone: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatus.actions;

export default fetchStatus;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchingStart: (state)=>{
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
  },
});

export const {
  fetchingStart,
  fetchSuccess,
} = listSlice.actions;
export default listSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    setMessage: (state, action) => {
      if (state.message.length >= 30) {
        state.message.pop();
      }
      state.message.unshift(action.payload);
    },
  },
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const playerSlice = createSlice({
  name: "player",
  initialState: {
    data: {
      count: 0,
      addOnLogs: [],
    },
    status: "idle",
    errors: [],
  },
  reducers: {
    testPlayer: (state, action) => {
      console.log("Action incoming: ", action);
      state.data.count = state.data.count + action.payload.value;
    },
    onError: {
      reducer(state, action) {
        state.errors.push(action.payload);
      },
      prepare(title, content, display) {
        return {
          payload: {
            errorId: nanoid(10),
            ts: new Date().toISOString(),
            title,
            content,
            display,
          },
        };
      },
    },
  },
});

export const { testPlayer, onError } = playerSlice.actions;

export const selectData = (state) => state.data;
export const selectError = (state) => state.errors;

export default playerSlice.reducer;

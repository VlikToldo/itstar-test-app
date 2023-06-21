import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const walletSlice = createSlice({
  name: "wallet",
  initialState: [],
  reducers: {
    addTransactions: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            time: new Date().toUTCString(),
            ...data,
          },
        };
      },
    },
    removeTransaction: (state, { payload }) => 
      state.filter((transaction) => transaction.id !== payload)
  },
});

export const { addTransactions, removeTransaction } = walletSlice.actions;
export default walletSlice.reducer;

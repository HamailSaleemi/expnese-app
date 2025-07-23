import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "./slices/transactions";


// combining reducers here
let rootReducer = combineReducers({
    transactionsReducer: transactionsSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

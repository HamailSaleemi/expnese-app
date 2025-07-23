import { createSlice } from "@reduxjs/toolkit";


export let transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        transactions: [],
    },
    reducers: {
        addTransaction(state, action){
            // console.log('server hit')
            // console.log(action.payload)
            // console.log("Adding transaction", action.payload);
            state.transactions.push(action.payload);
            // console.log("Updated transactions", state.transactions);
        },
        deleteTransaction(state, action){
            // console.log("Deleting transaction", action.payload);
            state.transactions.splice(action.payload, 1);
        }
}
});
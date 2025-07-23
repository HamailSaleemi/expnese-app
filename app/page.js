'use client'

import { SummeryBlock } from "@/components/summeryBlock/summeryBlock";
import TransactionHistory from "@/components/transectionHistory/transectionHistory";
import { transactionsSlice } from "@/store/slices/transactions";
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import { Provider, useDispatch, useSelector } from "react-redux";


export default function Page() {
  return <Provider store={store}>
    <Home />
  </Provider>
}

function Home() {

  const {register, handleSubmit, reset} = useForm();
  const disptch = useDispatch();
  const transactionsState = useSelector((state) => state.transactionsReducer.transactions);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  useEffect(() => {
    let inc = 0;
    let out = 0;
    for(let transaction of transactionsState){
      if(transaction.amount > 0){
        inc += (+transaction.amount);
      } else {
        out += (+transaction.amount);
      }
    }
    setIncome(inc);
    setExpense(out);
    // console.log("Transactions from store:", transactionsState);
  }, [transactionsState]);

  function createTransaction(data){
    // console.log("Form submitted", data);
    disptch(transactionsSlice.actions.addTransaction(data))
    reset();
  }

  return (
    <div className="container d-flex flex-column justify-content-center"
      style={{ width: "30vw" , paddingTop: "80px"}}>
      <h3
      style={{marginBottom: "20px"}}
      >Expense Tracker</h3>
      <h5> Your Balance <br/>${+income + +expense}</h5>
      {/* summer block here */}
      <SummeryBlock income={income} expense={expense}/>
      <h4>History
      <hr className="" style={{display:'block', width:"100%"}}/>
      </h4>
      <TransactionHistory transactionsList={transactionsState} />
      <h4>Add new tansaction</h4>
      <hr className="" style={{display:'block', width:"100%"}}/>
      <form onSubmit={handleSubmit(createTransaction)} className="form-group">
        <strong><label>Text</label></strong>
        <input type="text" {...register('desc')} className="form-control mb-2" placeholder="Enter text..." />
        <label>Amount</label>
        <input type="number"  {...register('amount')} className="form-control mb-2" defaultValue={0.00} />
        <button 
        type="submit"
         className="btn btn-primary w-100"
         >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
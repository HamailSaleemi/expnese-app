import { useDispatch } from 'react-redux';
import './transectionHistory.css';
import { transactionsSlice } from '@/store/slices/transactions';

function TransactionItem( {amount = 0, description = "Sample Transaction", index} ) {

    let dispatch = useDispatch();
    return <li className="list-group-item d-flex justify-content-between align-items-center"
    style={{borderRight: `4px solid ${amount > 0 ? 'green' : 'red'}`, 
    color: "black", fontSize: "1.0rem", fontWeight:"unset"}}
    >
          <span>{description}</span>
          <span className="">${+amount}</span>
          <button className="btn btn-danger btn-sm del-transaction"
          onClick={function(){
            dispatch(transactionsSlice.actions.deleteTransaction(index));
          }}>
            X
          </button>
        </li>
}

export default function TransactionHistory( {transactionsList = []} ) {
  return (
    <ul className="list-group mb-4">
      {/* <TransactionItem amount={50} description="cash"/> */}
      {transactionsList.map((transaction, index)=>{
        return <TransactionItem 
          key={index} 
          amount={transaction.amount} 
          description={transaction.desc} 
          index={index}
        />
      })}
      </ul>
  );
}
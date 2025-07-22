// import './transectionHistory.css';

function TransactionItem( {amount = 0, description = "Sample Transaction"} ) {
    return <li className="list-group-item d-flex justify-content-between align-items-center"
    style={{borderRight: `4px solid ${amount > 0 ? 'green' : 'red'}`, 
    color: "black", fontSize: "1.0rem", fontWeight:"unset"}}
    >
          <span>{description}</span>
          <span className="">${amount}</span>
          <button className="btn btn-danger btn-sm del-transaction"
          style={{position: "absolute", left: "-20px", boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" ,}}
          >X</button>
        </li>
}

export default function TransactionHistory() {
  return (
    <ul className="list-group mb-4">
      <TransactionItem amount={50} description="cash"/>
      </ul>
  );
}
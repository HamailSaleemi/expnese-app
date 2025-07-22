import { SummeryBlock } from "@/components/summeryBlock/summeryBlock";
import TransactionHistory from "@/components/transectionHistory/transectionHistory";

export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center"
      style={{ width: "30vw" , paddingTop: "80px"}}>
      <h3
      style={{marginBottom: "20px"}}
      >Expense Tracker</h3>
      <h5> Your Balance <br/>$0.00</h5>
      {/* summer block here */}
      <SummeryBlock/>
      <h4>History
      <hr className="" style={{display:'block', width:"100%"}}/>
      </h4>
      <TransactionHistory />
      <h4>Add new tansaction</h4>
      <hr className="" style={{display:'block', width:"100%"}}/>
      <form>
        <strong><label>Text</label></strong>
        <input type="text" className="form-control mb-2" placeholder="Enter text..." />
        <label>Amount</label>
        <input type="number" className="form-control mb-2" placeholder="Enter amount..." />
        <button type="submit" className="btn btn-primary w-100">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
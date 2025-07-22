import './summeryBlock.css';

export  function SummeryBlock() {
    return  <div className=" summery-block">
        <div>
          <h5>Income</h5>
          <p className="text-success text-center summery-amount">$0.00</p>
        </div>
        <div className="vertical-line"> </div>
        <div>
          <h5>Expense</h5>
          <p className="text-center text-danger summery-amount"> $0.00</p>
        </div>
      </div>
}
import './summeryBlock.css';

export  function SummeryBlock({ income = 0, expense = 0 }) {
    return  <div className=" summery-block">
        <div>
          <h5>Income</h5>
          <p className="text-success text-center summery-amount">${(+income).toFixed(2)}</p>
        </div>
        <div className="vertical-line"> </div>
        <div>
          <h5>Expense</h5>
          <p className="text-center text-danger summery-amount"> ${(+expense).toFixed(2)}</p>
        </div>
      </div>
}
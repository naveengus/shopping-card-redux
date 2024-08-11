import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Total() {
  const subtotals = useSelector((state) => state.data.subtotals);
  const totalCount = useSelector((state) => state.data.totalCount);

  const overallSubtotal = Object.values(subtotals).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="body-footer">
      <div className="bf-content">
        <h2 className="total">TOTAL :</h2>
        <p className="total-p">Grand Total</p>
      </div>
      <div className="bf-content">
        <h2>$ {overallSubtotal.toFixed(2)} </h2>
        <div className="total-count">
          <h4>Total Items: {totalCount}</h4>
        </div>
      </div>
    </div>
  );
}

export default Total;

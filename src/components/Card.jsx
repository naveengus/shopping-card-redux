import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity, removeItem } from "../redux/BlogSlice";

function Card() {
  const data = useSelector((state) => state.data.data);
  const subtotals = useSelector((state) => state.data.subtotals);
  const quantities = useSelector((state) => state.data.quantities);
  const dispatch = useDispatch();

  const handleQuantityChange = (itemId, quantity) => {
    dispatch(setQuantity({ itemId, quantity }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem({ itemId }));
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col mb-5 cantainer">
          <div className="card h-100">
            <div className="first-box badge bg-dark text-white position-absolute">
              <img
                className="card-img-top cardimg"
                src={`${item.image}`}
                alt={item.title}
              />
            </div>

            <div className="card-body p-4">
              <div className="text-center">
                <h4 className="fw-bolder">{item.title}</h4>
                <span className="category text-muted text-decoration-line-through">
                  {item.category}
                </span>
                <p className="des">{item.description}</p>
              </div>
            </div>
            <div className="card-rate p-4 pt-0 border-top-0 bg-transparent">
              <h3>$ {item.price}</h3>
              <div className="qua-box">
                <span>Qty: </span>
                <select
                  className="quantity"
                  value={quantities[item.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <div className="text-center">
                  <button
                    className="btn btn-outline-dark mt-auto"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="foot=fbox">
              <h5>SUBTOTAL:</h5>
              <h5>SHIPPING:</h5>
            </div>
            <div className="footer-foot">
              <input
                className="subtotal"
                type="text"
                value={subtotals[item.id] || 0}
                readOnly
              />
              <p>FREE</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

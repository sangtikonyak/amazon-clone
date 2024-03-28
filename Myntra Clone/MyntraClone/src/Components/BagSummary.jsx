import React from "react";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItem = useSelector((store) => store.bag);

  const total = bagItem.reduce((acc, item) => {
    return acc + (item.original_price - item.current_price);
  }, 0);

  console.log(total);
  const summary = {
    totalItem: bagItem.length,
    totalMRP: total,
    finalPayment: total,
  };
  return (
    <>
   
      <div className="d-flex justify-content-evenly">
        <div className="bag-item">
          {bagItem.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">
              PRICE DETAILS ({summary.totalItem} Items){" "}
            </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{summary.totalMRP}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">
                -₹50%
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{summary.finalPayment}</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default BagSummary;

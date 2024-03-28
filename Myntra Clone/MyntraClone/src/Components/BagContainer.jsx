import React from "react";
import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";

const BagContainer = () => {
  const BagItem = useSelector((store) => store.bag);

  return (
    <>
      {BagItem.length > 0 ? (
        <BagSummary />
      ) : (
        <h3 className="mt-5 text-center">No Items In Cart</h3>
      )}
    </>
  );
};

export default BagContainer;

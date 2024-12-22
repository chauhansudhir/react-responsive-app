import React from "react";

import PurchaseCard from "./PurchaseCard";

const PurchaseListMobile = ({ data, isLoading }) => {
  return (
    <div>
      <div className="loading-row">{isLoading && "loading mobile..."}</div>
      <div className="mobile-list">
        {data.map((row) => (
          <PurchaseCard row={row} key={row.id} />
        ))}
      </div>
    </div>
  );
};

export default PurchaseListMobile;

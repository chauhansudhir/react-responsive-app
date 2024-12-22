import React, { useMemo } from "react";
import { dateLocalFmtShortM } from "../../utils/DateUtils";
import RenderImage from "../common/tableCells/RenderImage";
import LocalCurrenlyCell from "../common/tableCells/LocalCurrencyCell";

const PurchaseCard = ({ row }) => {
  const dtFmt = useMemo(() => dateLocalFmtShortM(row.purchaseDate), [row]);

  return (
    <div className="mobile-card">
      <div className="stack-h title-row">
        <div className="stack-h location">
          <RenderImage row={row} column={{ id: "location" }} />
          <h4>{row.name}</h4>
        </div>
        <div className="price">
          <LocalCurrenlyCell row={row} column={{ id: "price" }} />
        </div>
      </div>
      <div className="desc">{row.description}</div>
      <div className="purchase">
        <div>Purchase Date</div>
        <div>{dtFmt}</div>
      </div>
    </div>
  );
};

export default PurchaseCard;

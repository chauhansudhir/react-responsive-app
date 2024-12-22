import React from "react";

import Table from "../common/Table";
import RenderImage from "../common/tableCells/RenderImage";
import LocalDateCell from "../common/tableCells/LocalDateCell";
import CategoryCell from "../common/tableCells/CaregoryCell";
import LocalCurrenlyCell from "../common/tableCells/LocalCurrencyCell";
import TableCellOption from "../common/tableCells/TableCellOption";

const columns = [
  { id: "name", title: "Name" },
  { id: "location", title: "Location", CustomCell: RenderImage },
  { id: "purchaseDate", title: "Purchase Date", CustomCell: LocalDateCell },
  { id: "category", title: "Category", CustomCell: CategoryCell },
  { id: "description", title: "Description" },
  { id: "price", title: "Price", CustomCell: LocalCurrenlyCell },
  {
    id: "id",
    title: "",
    CustomCell: TableCellOption,
  },
];

const PurchaseListDesktop = ({ data, isLoading }) => {
  return <Table columns={columns} data={data} isLoading={isLoading} />;
};

export default PurchaseListDesktop;

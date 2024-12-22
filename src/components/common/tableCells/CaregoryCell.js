import React from "react";

const CategoryCell = ({ row, column }) => {
  const value = row[column.id];
  return <div className={`category ${value}`}>{value}</div>;
};

export default CategoryCell;

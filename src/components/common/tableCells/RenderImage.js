import React from "react";

const RenderImage = ({ row, column }) => {
  const value = row[column.id];
  return <img src={value} alt={row.id} height="auto" />;
};

export default RenderImage;

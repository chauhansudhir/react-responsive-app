import { dateLocalFmt } from "../../../utils/DateUtils";

const LocalDateCell = ({ row, column }) => {
  const value = new Date(row[column.id]);

  return value.toDateString() === "Invalid Date" ? value : dateLocalFmt(value);
};

export default LocalDateCell;

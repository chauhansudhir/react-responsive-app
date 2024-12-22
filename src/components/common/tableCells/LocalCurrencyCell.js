import { localCurrencyFmt } from "../../../utils/DateUtils";

const LocalCurrenlyCell = ({ row, column }) => {
  return localCurrencyFmt(row[column.id]);
};

export default LocalCurrenlyCell;

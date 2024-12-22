import React from "react";
import "./table.css";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.id} className={`${col.id} ${col?.className || ""}`}>
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableCell = ({ row, column }) => {
  const Cell = column.CustomCell;

  return (
    <td className={`${column.id} ${column?.className || ""}`}>
      {Cell ? (
        <Cell row={row} column={column} value={row[column.id]} />
      ) : (
        row[column.id]
      )}
    </td>
  );
};

const TableRow = ({ row, columns }) => {
  return (
    <tr>
      {columns.map((col) => (
        <TableCell key={col.id} row={row} column={col} />
      ))}
    </tr>
  );
};

const TableBody = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow key={row.id || index} row={row} columns={columns} />
      ))}
    </tbody>
  );
};

/**
 *
 * isLoading: boolean
 * columns = [
 *  { id: "id", title: "ID" },
 *  { id: "name", title: "Name" }
 * ]
 * data = [
 * { id: 1, name: "John Doe" },
 *  { id: 2, name: "Jane Doe" }
 * ]
 * @param {Array} param0.columns
 * * @param {boolean} param0.isLoading
 * @param {Array} param0.data
 * @returns
 */
const Table = ({ columns, isLoading, data = [] }) => {
  return (
    <div className={`table ${isLoading ? "table-loading" : ""}`}>
      <div className="table-loading-row">{isLoading && "loading..."}</div>
      <table>
        <TableHead columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;

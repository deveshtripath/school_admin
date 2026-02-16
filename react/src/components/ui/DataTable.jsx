import React from "react";

export default function DataTable({ columns, children, minWidth = 720 }) {
  return (
    <div className="tableWrap">
      <table className="table" style={{ minWidth }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th className="th" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}


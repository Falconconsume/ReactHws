import React from "react";
import TableDescription from "./TableDescription";

export default function TableElements({ e, index }) {
  return (
    <>
      <tr className="brand" key={index}>
        <td className="car-section">
          {e.brand}
          {e.models.map((model, modelIndex) => (
            <TableDescription key={modelIndex} e={model} />
          ))}
        </td>
      </tr>
    </>
  );
}

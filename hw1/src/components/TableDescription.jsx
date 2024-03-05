import React from "react";

export default function TableDescription({ e, index }) {
  return (
    <>
      <tr className="description" key={index}>
        <td>{e.name}</td>
        <td>
          {e.collection.map((item, itemIndex) => (
            <ul className="flex" key={itemIndex}>
              <li>Version: {item.version}</li>
              <li>Year: {item.year}</li>
              <li>HorsePower: {item.horsepower}</li>
              <li>Engine: {item.engine}</li>
            </ul>
          ))}
        </td>
      </tr>
    </>
  );
}

// Table.jsx
import React from "react";
import { CARS } from "../data/cars";
import TableElements from "./TableElements";

export default function Table() {
  return (
    <>
      <table className="table">
        <tbody>
          {CARS.map((car, index) => (
            <TableElements key={index} e={car} />
          ))}
        </tbody>
      </table>
    </>
  );
}

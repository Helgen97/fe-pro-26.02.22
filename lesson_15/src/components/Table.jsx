import React from "react";
import Row from "./Row";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <p>Номер валют</p>
          </td>
          <td>
            <p>Назва валют</p>
          </td>
          <td>
            <p>Ціна валют</p>
          </td>
        </tr>
      </thead>
      <tbody>
      {data.map(element => {
        return <Row data={element} />
      })}
      </tbody>
    </table>
  );
}

export default Table;

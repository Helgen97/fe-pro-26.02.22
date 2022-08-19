import React from "react";

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
        <tr>
          <td>
            {data.map((element) => {
              return <p> {element.r030} </p>;
            })}
          </td>
          <td>
            {data.map((element) => {
              return <p> {element.txt} </p>;
            })}
          </td>
          <td>
            {data.map((element) => {
              return <p> {element.rate} </p>;
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

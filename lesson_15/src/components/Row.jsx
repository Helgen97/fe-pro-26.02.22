import React from "react";

const Row = ({data}) => {
    return (
        <tr>
            <td>
                {data.r030}
            </td>
            <td>
                {data.txt}
            </td>
            <td>
                {data.rate}
            </td>
        </tr>
    )
}

export default Row;
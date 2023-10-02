import React from "react";

function Cafe(props) {

    return(
        <tr>
            <th>{props.Cafe.id}</th>
            <td>{props.Cafe.nombre}</td>
            <td>{props.Cafe.tipo}</td>
            <td>{props.Cafe.region}</td>
        </tr>
    );
}

export default Cafe;
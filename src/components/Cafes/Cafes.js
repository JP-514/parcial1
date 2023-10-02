import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cafes.css'
import Cafe from "./Cafe";
import CafeDetail from "./CafeDetail";
import { Col } from "react-bootstrap";

const { useEffect, useState } = require("react");

function Cafes() {

   const [cafes, setCafes] = useState([]);

   const [selectedCafe, setSelectedCafe] = useState(null);
   
   const handleCafeClick = (cafe) => {
    setSelectedCafe(cafe);
};

   useEffect(()=>{
       const URL = "http://localhost:3001/cafes";
       fetch(URL).then(data => data.json()).then(data => {
           setCafes(data);
       })
   }, []);

   return(
        <div className="container">
            <table class="table">
                <thead class="thead-cafes">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Región</th>
                    </tr>
                </thead>
                <tbody>
                    {cafes.map(cafe => <Cafe Cafe={cafe} key={cafe.id}/>)} 
                </tbody>
            </table>
       </div>
   )
}

export default Cafes;
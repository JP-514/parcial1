import React from 'react';

const CafeDetail = ({ cafe }) => {

  return (
    <div className="cafe-detail">
      <h2>{cafe.nombre}</h2>
      <h2>{cafe.fecha_cultivo}</h2>
      <img src={cafe.imagen} alt={"cafe-"+cafe.id}/>
      <h3>{cafe.notas}</h3>
      <h3>{"Cultivado a una altura de "+cafe.altura+" msnm"}</h3>
    </div>
  );
};

export default CafeDetail;

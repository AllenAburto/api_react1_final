import React, { useState } from "react";

export const Ordenador = ({ onOrdenChange }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleOrdenChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    onOrdenChange(selectedOrder);
  };

  return (
    <div className="input-group mb-3">
      <select className="form-select" onChange={handleOrdenChange} value={sortOrder}>
        <option value="asc">Ordenar por Nombre (A-Z)</option>
        <option value="desc">Ordenar por Nombre (Z-A)</option>
        <option value="gender">Ordenar por Género</option>
        <option value="location">Ordenar por Locación</option>
      </select>
    </div>
  );
};

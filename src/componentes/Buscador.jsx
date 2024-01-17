import React, { useState } from "react";

export const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="search" className="form-label">
        Buscar personajes:
      </label>
      <input
        type="text"
        className="form-control"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Ingrese el nombre del personaje"
      />
    </div>
  );
};
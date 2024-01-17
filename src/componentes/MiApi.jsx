import React, { useEffect, useState, useCallback } from "react";
import { Characters } from "./Characters";
import { Buscador } from "./Buscador";
import { Ordenador } from "./Ordenador";
import { Pagination } from "./Paginacion";

export const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [hasResults, setHasResults] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [info, setInfo] = useState({});

  const fetchData = useCallback(async (url) => {
    try {
      const res = await fetch(url || `https://rickandmortyapi.com/api/character`);
      const jsonData = await res.json();

      if (jsonData.error) {
        setCharacters([]);
        setHasResults(false);
        setInfo(null);
        setError("No se encontraron resultados");
        return;
      }

      let sortedCharacters = jsonData.results;

      if (sortOrder === "asc") {
        sortedCharacters = sortedCharacters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (sortOrder === "desc") {
        sortedCharacters = sortedCharacters.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (sortOrder === "gender") {
        sortedCharacters = sortedCharacters.sort((a, b) =>
          a.gender.localeCompare(b.gender)
        );
      } else if (sortOrder === "location") {
        sortedCharacters = sortedCharacters.sort((a, b) =>
          a.location.name.localeCompare(b.location.name)
        );
      }

      setCharacters(sortedCharacters);
      setHasResults(true);
      setInfo(jsonData.info);
      setError("");
    } catch (error) {
      console.error('Error fetching data:', error);
      setCharacters([]);
      setHasResults(false);
      setInfo(null);
      setError("No se ha podido encontrar la palabra buscada");
    }
  }, [sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleOrdenChange = (order) => {
    setSortOrder(order);
    fetchData(); // Recargar datos al cambiar el orden
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchData(`https://rickandmortyapi.com/api/character?name=${term}`);
  };

  const handlePreviousPage = () => {
    if (info && info.prev) {
      fetchData(info.prev);
    }
  };

  const handleNextPage = () => {
    if (info && info.next) {
      fetchData(info.next);
    }
  };

  return (
    <>
      <div>
        <Pagination prev={info && info.prev} next={info && info.next} onPrevious={handlePreviousPage} onNext={handleNextPage} />
        <Buscador onSearch={handleSearch} />
        <Ordenador onOrdenChange={handleOrdenChange} />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {hasResults ? (
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center">
              <Characters characters={characters} />
            </div>
          </div>
          <div>
            <Pagination prev={info && info.prev} next={info && info.next} onPrevious={handlePreviousPage} onNext={handleNextPage} />
          </div>
        </div>
      ) : (
        <div className="text-center mt-3">
          <p>No se encontraron resultados.</p>
        </div>
      )}
    </>
  );
};
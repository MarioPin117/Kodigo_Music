import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import musicData from "../assets/musicData"; 
import "./explore.css";

function Explore() {
  const [filter, setFilter] = useState("alphabetical");
  const [genreFilter, setGenreFilter] = useState("all");
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenreFilter(e.target.value);
  };

  const filteredData = musicData
    .filter((song) => (genreFilter === "all" ? true : song.genre === genreFilter))
    .sort((a, b) => {
      if (filter === "alphabetical") {
        return a.song.localeCompare(b.song);
      } else if (filter === "reverse") {
        return b.song.localeCompare(a.song);
      }
      return 0;
    });

  return (
    <div className="explore-container">
      <h1>Explora Música</h1>
      <p>Aquí podrás encontrar música variada.</p>

      <div className="filters">
        <select onChange={handleGenreChange}>
          <option value="all">Todos los géneros</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Indie">Indie</option>
        </select>

        <select onChange={handleFilterChange}>
          <option value="alphabetical">Orden Alfabético</option>
          <option value="reverse">Orden Inverso</option>
        </select>
      </div>

      <div className="card-grid">
        {filteredData.map((song) => (
          <div className="card" key={song.id}>
            <img src={song.image} alt={song.song} className="card-image" />
            <h3>{song.song}</h3>
            <p>
              {song.artist} - {song.album}
            </p>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/create-playlist")}>
          Crear Lista de Reproducción
        </button>
      </div>
    </div>
  );
}

export default Explore;
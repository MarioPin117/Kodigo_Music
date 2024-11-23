import React, { useState } from "react";
import musicData from "../assets/musicData";
import "./createPlayList.css";
import { useNavigate } from "react-router-dom";

const CreatePlayList = () => {
  const [nombrePlaylist, setNombrePlaylist] = useState("");
  const [descripcionPlaylist, setDescripcionPlaylist] = useState("");
  const [cancionesSeleccionadas, setCancionesSeleccionadas] = useState([]);
  const [listasCreadas, setListasCreadas] = useState([]);
  const [mensajeAdvertencia, setMensajeAdvertencia] = useState("");
  const navigate = useNavigate();

  const manejarSeleccionCancion = (idCancion) => {
    setCancionesSeleccionadas((prevCanciones) =>
      prevCanciones.includes(idCancion)
        ? prevCanciones.filter((id) => id !== idCancion)
        : [...prevCanciones, idCancion]
    );
  };

  const manejarCrearPlaylist = () => {
    if (!nombrePlaylist || descripcionPlaylist.length === 0) {
      setMensajeAdvertencia("Por favor, completa todos los campos.");
      return;
    }
    if (cancionesSeleccionadas.length === 0) {
      setMensajeAdvertencia("Necesitas seleccionar al menos una canción para crear una playlist.");
      return;
    }

    const nuevaPlaylist = {
      nombre: nombrePlaylist,
      descripcion: descripcionPlaylist,
      canciones: cancionesSeleccionadas,
    };
    setListasCreadas([...listasCreadas, nuevaPlaylist]);
    setNombrePlaylist("");
    setDescripcionPlaylist("");
    setCancionesSeleccionadas([]);
    setMensajeAdvertencia("");
  };

  const manejarEliminarPlaylist = (index) => {
    const listasActualizadas = listasCreadas.filter(
      (_, indexPlaylist) => indexPlaylist !== index
    );
    setListasCreadas(listasActualizadas);
  };

  return (
    <div className="create-playlist-container">
      <div className="form-container">
        <h1>Crear una Playlist</h1>
        <input
          type="text"
          value={nombrePlaylist}
          onChange={(e) => setNombrePlaylist(e.target.value)}
          placeholder="Nombre de la Playlist"
        />
        <textarea
          value={descripcionPlaylist}
          onChange={(e) => setDescripcionPlaylist(e.target.value)}
          placeholder="Descripción de la Playlist (Máximo 100 caracteres)"
          maxLength="100"
        />
        <div className="song-selection">
          <h3>Selecciona las Canciones</h3>
          <div className="songs-list">
            {musicData.map((song) => (
              <button
                key={song.id}
                className={`song-button ${cancionesSeleccionadas.includes(song.id) ? 'selected' : ''}`}
                onClick={() => manejarSeleccionCancion(song.id)}
              >
                {song.song}
              </button>
            ))}
          </div>
        </div>
        {mensajeAdvertencia && (
          <div className="warning-message">
            {mensajeAdvertencia}
          </div>
        )}
        <button className="create-button" onClick={manejarCrearPlaylist}>
          Crear Playlist
        </button>
      </div>
      <div className="playlists-container">
        <h2>Listas de Reproducción Creadas</h2>
        {listasCreadas.length > 0 ? (
          listasCreadas.map((playlist, index) => (
            <div key={index} className="playlist-card">
              <h3>{playlist.nombre}</h3>
              <p>{playlist.descripcion}</p>
              <ul>
                {playlist.canciones.map((idCancion) => {
                  const cancion = musicData.find((s) => s.id === idCancion);
                  return <li key={cancion.id}>{cancion.song}</li>;
                })}
              </ul>
              <button onClick={() => manejarEliminarPlaylist(index)}>
                Eliminar Playlist
              </button>
            </div>
          ))
        ) : (
          <p>Aún no has creado ninguna playlist.</p>
        )}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/explore")}>Explorar</button>
      </div>
    </div>
  );
};

export default CreatePlayList;
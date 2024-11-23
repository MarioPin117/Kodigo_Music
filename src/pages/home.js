import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a Kodigo Music
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Explora y crea tus propias playlists de música con facilidad.
      </motion.p>

      <div className="home-buttons">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/explore">
            <button className="home-button">Explorar</button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link to="/create-playlist">
            <button className="home-button">Crear Playlist</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
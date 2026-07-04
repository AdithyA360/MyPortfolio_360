import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TicTacToe from './TicTacToe';
import FlappyBird from './FlappyBird';
import '../styles/GameHub.css';
import { FaHashtag, FaCrow } from 'react-icons/fa';

function Game() {
  const [selectedGame, setSelectedGame] = useState(null);

  // Scroll to top when hub mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (selectedGame === 'tictactoe') {
    return <TicTacToe onBack={() => setSelectedGame(null)} />;
  }

  if (selectedGame === 'flappybird') {
    return <FlappyBird onBack={() => setSelectedGame(null)} />;
  }

  return (
    <section className="game-hub-section">
      <div className="game-hub-container">
        <motion.div 
          className="game-hub-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="game-hub-title">Game Room</h1>
          <p className="game-hub-subtitle">Choose a game to play!</p>
        </motion.div>

        <div className="game-cards-container">
          <motion.div 
            className="game-card"
            onClick={() => setSelectedGame('tictactoe')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="game-card-icon" style={{ color: '#38bdf8' }}>
              <FaHashtag />
            </div>
            <h2>Tic Tac Toe</h2>
            <p>Play against an unbeatable AI in this classic game.</p>
          </motion.div>

          <motion.div 
            className="game-card"
            onClick={() => setSelectedGame('flappybird')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="game-card-icon" style={{ color: '#f59e0b' }}>
              <FaCrow />
            </div>
            <h2>Flappy Bird</h2>
            <p>Test your reflexes in this endless flying challenge.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Game;

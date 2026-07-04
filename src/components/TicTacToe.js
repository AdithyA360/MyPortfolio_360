import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/TicTacToe.css';

function TicTacToe({ onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [difficulty, setDifficulty] = useState(1); // Start at Level 1, max 4
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const minimax = (squares, isMaximizing) => {
    const winInfo = calculateWinner(squares);
    if (winInfo) {
      if (winInfo.winner === 'O') return 10;
      if (winInfo.winner === 'X') return -10;
    }
    if (!squares.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          let score = minimax(squares, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          let score = minimax(squares, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (squares) => {
    const emptySquares = squares.map((sq, i) => sq === null ? i : null).filter(i => i !== null);
    if (emptySquares.length === 0) return -1;

    // Difficulty mechanics (1 = Easy, 5 = Impossible)
    let playRandom = false;
    const randomChance = Math.random();

    if (difficulty === 1) {
      playRandom = true; // 100% random
    } else if (difficulty === 2) {
      playRandom = randomChance < 0.6; // 60% chance of random move
    } else if (difficulty === 3) {
      playRandom = randomChance < 0.3; // 30% chance of random move
    } else if (difficulty === 4) {
      playRandom = randomChance < 0.1; // 10% chance of random move
    }

    if (playRandom) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    }

    // Minimax for optimal move
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        let score = minimax(squares, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const makeMove = (i, player) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);

    const winInfo = calculateWinner(newBoard);
    if (winInfo) {
      setWinner(winInfo.winner);
      setWinningLine(winInfo.line);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    } else {
      setXIsNext(player === 'O');
    }
  };

  const handlePlayerClick = (i) => {
    // Only allow clicking if it's the player's turn (X) and the game is not over
    if (!xIsNext || board[i] || winner) return;
    makeMove(i, 'X');
  };

  // AI Move Effect
  useEffect(() => {
    if (!xIsNext && !winner) {
      const timer = setTimeout(() => {
        const nextMove = getBestMove([...board]);
        if (nextMove !== -1) {
          makeMove(nextMove, 'O');
        }
      }, 500); // 500ms delay to feel like the AI is "thinking"
      return () => clearTimeout(timer);
    }
  }, [xIsNext, board, winner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  const handleNextGame = () => {
    if (winner === 'X') {
      setDifficulty(prev => Math.min(prev + 1, 5));
    } else if (winner === 'O') {
      setDifficulty(prev => Math.max(prev - 1, 1));
    }
    // Draws keep you on the same level
    resetGame();
  };

  // Scroll to top when game mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="game-section">
      <div className="game-container">
        <motion.div 
          className="game-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="back-btn" onClick={onBack}>← Back to Games</button>
          <h1 className="game-title">Tic Tac Toe</h1>
          <div className="game-level-badge">Level {difficulty}</div>
        </motion.div>

        <motion.div 
          className="game-board-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="game-status">
            {winner ? (
              winner === 'Draw' ? "It's a Draw!" : (winner === 'X' ? (difficulty === 5 ? "You Beat The Game!" : `Level ${difficulty} Cleared!`) : "AI Wins! Level Down.")
            ) : (
              xIsNext ? 'Your Turn (X)' : 'AI is thinking...'
            )}
          </div>

          <div className="game-board">
            {board.map((square, i) => (
              <motion.button
                key={i}
                className={`square ${square ? 'filled' : ''} ${winningLine.includes(i) ? 'winning-square' : ''} ${square === 'X' ? 'x-mark' : 'o-mark'} ${!xIsNext && !square && !winner ? 'disabled' : ''}`}
                onClick={() => handlePlayerClick(i)}
                whileHover={!square && !winner && xIsNext ? { scale: 1.05, backgroundColor: 'rgba(56, 189, 248, 0.1)' } : {}}
                whileTap={!square && !winner && xIsNext ? { scale: 0.95 } : {}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {square && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {square}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          <motion.button 
            className="reset-button"
            onClick={winner ? handleNextGame : resetGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {winner === 'X' && difficulty < 5 ? `Start Level ${difficulty + 1}` : 
             winner === 'X' && difficulty === 5 ? "Play Again" :
             winner === 'O' ? `Retry Level ${Math.max(difficulty - 1, 1)}` : 
             winner === 'Draw' ? `Retry Level ${difficulty}` :
             "Restart Game"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TicTacToe;

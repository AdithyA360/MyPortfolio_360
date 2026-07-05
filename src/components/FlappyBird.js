import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/FlappyBird.css';

const GRAVITY = 0.5;
const JUMP = -7.5;
const PIPE_WIDTH = 60;
const BIRD_SIZE = 34;
const GAME_WIDTH = 360;
const GAME_HEIGHT = 500;
const SPAWN_RATE = 120; // frames between pipes

function FlappyBird({ onBack }) {
  const [birdPos, setBirdPos] = useState(GAME_HEIGHT / 2);
  const [birdVel, setBirdVel] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const frameCount = useRef(0);
  const requestRef = useRef();

  const jump = useCallback(() => {
    if (gameOver) return;
    if (!gameStarted) {
      setGameStarted(true);
    }
    setBirdVel(JUMP);
  }, [gameOver, gameStarted]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  const resetGame = () => {
    setBirdPos(GAME_HEIGHT / 2);
    setBirdVel(0);
    setPipes([]);
    setScore(0);
    scoreRef.current = 0;
    setGameOver(false);
    setGameStarted(false);
    frameCount.current = 0;
  };

  const gameLoop = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setBirdPos((pos) => pos + birdVel);
    setBirdVel((vel) => vel + GRAVITY);

    // Dynamic difficulty based on score
    const currentSpeed = Math.min(2.5 + (scoreRef.current * 0.15), 5.5);
    const currentGap = Math.max(130, 180 - (scoreRef.current * 3));

    // Pipe Logic
    setPipes((currentPipes) => {
      frameCount.current += 1;
      let newPipes = currentPipes
        .map(pipe => ({ ...pipe, x: pipe.x - currentSpeed }))
        .filter(pipe => pipe.x + PIPE_WIDTH > 0);

      // Spawn new pipe
      if (frameCount.current >= Math.floor(SPAWN_RATE * (2.5 / currentSpeed))) {
        frameCount.current = 0;
        const minHeight = 50;
        const maxHeight = GAME_HEIGHT - currentGap - minHeight;
        const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        newPipes.push({ x: GAME_WIDTH, topHeight, gap: currentGap, passed: false });
      }

      // Score checking & Collision
      let collision = false;
      let scoreIncrement = 0;

      newPipes.forEach(pipe => {
        // Score
        if (!pipe.passed && pipe.x + PIPE_WIDTH < (GAME_WIDTH / 2 - BIRD_SIZE / 2)) {
          pipe.passed = true;
          scoreIncrement += 1;
        }

        // Collision
        const birdLeft = GAME_WIDTH / 2 - BIRD_SIZE / 2 + 5; // adding 5px forgiveness hitbox
        const birdRight = birdLeft + BIRD_SIZE - 10;
        const birdTop = birdPos + 5;
        const birdBottom = birdPos + BIRD_SIZE - 5;

        const pipeLeft = pipe.x;
        const pipeRight = pipe.x + PIPE_WIDTH;
        const topPipeBottom = pipe.topHeight;
        const bottomPipeTop = pipe.topHeight + pipe.gap;

        if (
          birdRight > pipeLeft && birdLeft < pipeRight &&
          (birdTop < topPipeBottom || birdBottom > bottomPipeTop)
        ) {
          collision = true;
        }
      });

      if (scoreIncrement > 0) {
        scoreRef.current += scoreIncrement;
        setScore(scoreRef.current);
      }

      if (collision || birdPos < 0 || birdPos + BIRD_SIZE > GAME_HEIGHT) {
        setGameOver(true);
      }

      return newPipes;
    });

    requestRef.current = requestAnimationFrame(gameLoop);
  }, [birdVel, birdPos, gameStarted, gameOver]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameLoop]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="flappy-section">
      <div className="flappy-header">
        <button className="back-btn" onClick={onBack}>← Back to Games</button>
        <h1 className="flappy-title">Flappy Bird</h1>
        <p className="flappy-subtitle">Tap or press Space to jump!</p>
      </div>

      <div className="flappy-container">
        <div 
          className="flappy-game-area" 
          onClick={jump}
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          {/* Bird */}
          <div 
            className="flappy-bird"
            style={{
              top: birdPos,
              left: GAME_WIDTH / 2 - BIRD_SIZE / 2,
              width: BIRD_SIZE,
              height: BIRD_SIZE,
              transform: `rotate(${Math.min(Math.max(birdVel * 3, -25), 90)}deg)`
            }}
          >
            <div className="bird-eye"></div>
            <div className="bird-wing"></div>
          </div>

          {/* Pipes */}
          {pipes.map((pipe, index) => (
            <React.Fragment key={index}>
              {/* Top Pipe */}
              <div 
                className="flappy-pipe top-pipe"
                style={{
                  left: pipe.x,
                  width: PIPE_WIDTH,
                  height: pipe.topHeight
                }}
              >
                <div className="pipe-cap top-cap"></div>
              </div>
              {/* Bottom Pipe */}
              <div 
                className="flappy-pipe bottom-pipe"
                style={{
                  left: pipe.x,
                  width: PIPE_WIDTH,
                  height: GAME_HEIGHT - pipe.topHeight - pipe.gap,
                  bottom: 0
                }}
              >
                 <div className="pipe-cap bottom-cap"></div>
              </div>
            </React.Fragment>
          ))}

          {/* UI Overlays */}
          <div className="flappy-score">{score}</div>

          {!gameStarted && !gameOver && (
            <div className="flappy-start-msg">Tap to Start</div>
          )}

          {gameOver && (
            <div className="flappy-game-over">
              <h2>Game Over!</h2>
              <p>Score: {score}</p>
              <button onClick={(e) => { e.stopPropagation(); resetGame(); }}>Play Again</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FlappyBird;

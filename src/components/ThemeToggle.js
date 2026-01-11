import React from 'react';
import '../styles/ThemeToggle.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export default ThemeToggle;

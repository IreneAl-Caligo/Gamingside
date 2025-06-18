import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Snake from './pages/games/Snake';
import MemoryMatch from './pages/games/MemoryMatch';
import GuessNumber from './pages/games/GuessNumber';
import Hangman from './pages/games/Hangman';
import RockPaperScissors from './pages/games/RockPaperScissors';
import TicTacToe from './pages/games/TicTacToe';
import Maze from './pages/games/Maze';
import Chess from './pages/games/Chess';
import { ThemeProvider } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/memory-match" element={<MemoryMatch />} />
            <Route path="/guess-number" element={<GuessNumber />} />
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/maze" element={<Maze />} />
            <Route path="/chess" element={<Chess />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
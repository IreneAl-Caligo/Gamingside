import React from 'react';
import { Link } from 'react-router-dom';
import { GameCard } from '../components/ui/GameCard';

const games = [
  {
    id: 'snake',
    title: 'Snake Game',
    description: 'Classic snake game with modern controls',
    icon: '🐍',
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Test your memory with card matching',
    icon: '🃏',
  },
  {
    id: 'guess-number',
    title: 'Guess The Number',
    description: 'Try to guess the hidden number',
    icon: '🔢',
  },
  {
    id: 'hangman',
    title: 'Hangman',
    description: 'Classic word guessing game',
    icon: '👨',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'The timeless hand game',
    icon: '✌️',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic 3x3 grid game',
    icon: '⭕',
  },
  {
    id: 'maze',
    title: 'Maze Game',
    description: 'Find your way through the maze',
    icon: '🌀',
  },
  {
    id: 'chess',
    title: 'Chess',
    description: 'Classic strategy board game',
    icon: '♟️',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        Welcome to Gamingside
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link key={game.id} to={`/${game.id}`}>
            <GameCard
              title={game.title}
              description={game.description}
              icon={game.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
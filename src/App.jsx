import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameLogic from './Components/Logic/GameBoard'
import { GameCard } from './Components/UI/GameCard/GameCard';
import { useGameLogic } from './hooks/useGameLogic';

const App = () => {

  return (
    <div className='App'>

      <GameLogic />

    </div>
  );
}

export default App

import { useState } from 'react';
import './App.css';
import GameBoard from './Components/Logic/GameBoard';
import { StartGame } from './Components/UI/StartGame/StartGame';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className='App'>
      {!gameStarted ? (
        <StartGame onStart={() => setGameStarted(true)} />
      ) : (
        <GameBoard />
      )}
    </div>
  );
}

export default App;
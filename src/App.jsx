import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './Components/GameBoard'
import { GameCard } from './Components/UI/GameCard/GameCard';
import { useGameLogic } from './hooks/useGameLogic';

const App = () => {

  const { arrayCards, openedCards, matched, moves, flipCard } = useGameLogic();

return (
  <div className='App'>
    <p className='number-of-strokes'>Сделано ходов {moves}</p>
    <div className='cards flex flex-wrap justify-center gap-4'> 
      {arrayCards.map((item, index) => {

        return (
          <GameCard onClick={flipCard} key={`${item.id}-${index}`} item={item} index={index} isFlipped={openedCards.includes(index) || matched.includes(item.id)}/>
        );
      })}
    </div>
  </div>
);
}

export default App

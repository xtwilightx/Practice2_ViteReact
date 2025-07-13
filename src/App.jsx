import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './Components/GameBoard'



function App() {
  const [count, setCount] = useState(0)
  const numbers = [1,2,3,4,5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);

  return (
    <>
      <GameBoard />
    </>
  )
}

export default App

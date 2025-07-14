import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './Components/GameBoard'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { CpuChipIcon } from '@heroicons/react/24/solid'
import { AcademicCapIcon } from '@heroicons/react/16/solid'
import { LanguageIcon } from '@heroicons/react/16/solid'
import { CakeIcon } from '@heroicons/react/16/solid'
import { ScissorsIcon } from '@heroicons/react/16/solid'

import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'

const initialArrayCards = [
  { id: 1, img: BeakerIcon },
  { id: 2, img: CpuChipIcon },
  { id: 3, img: AcademicCapIcon },
  { id: 4, img: LanguageIcon },
  { id: 5, img: CakeIcon },
  { id: 6, img: ScissorsIcon },
]

const paitOfArrayCards = [...initialArrayCards, ...initialArrayCards]

const App = () => {

  const [arrayCards, setArrayCards] = useState([]) //Закрытые карточки
  const [openedCards, setOpenCards] = useState([]) //Открытые карточки

  const [matched, setMatched] = useState([]) //Совпадения
  const [moves, setMoves] = useState([]) //Шаги

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex


    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      console.log(randomIndex);
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue

    }
    return array
  }

  useEffect(() => {
    setArrayCards(shuffle(paitOfArrayCards))
  }, []) 

return (
  <div className='App'>
    <p className='number-of-strokes'>Сделано ходов {moves}</p>
    <div className='cards flex flex-wrap justify-center gap-4'> 
      {arrayCards.map((item, index) => {
        const isFlipped = openedCards.includes(index) || matched.includes(item.id);

        return (
          <div 
            key={index} 
            className={`card relative w-32 h-32 ${isFlipped ? 'flipped' : ''}`} >
            <div className="w-full h-full flex items-center justify-center">
              <item.img className='size-20 text-white rounded-xl bg-slate-400' />
            </div>

            <div className={`absolute inset-0 flex items-center justify-center 
                             ${isFlipped ? 'hidden' : ''}`}> 
              <QuestionMarkCircleIcon className='size-20 text-white rounded-xl bg-slate-400' />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default App

import { useState,useEffect } from 'react';
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
  {id: 1, img: BeakerIcon},
  {id: 2, img: CpuChipIcon},
  {id: 3, img: AcademicCapIcon},
  {id: 4, img: LanguageIcon},
  {id: 5, img: CakeIcon},
  {id: 6, img: ScissorsIcon},
]


const App = () => {

  const [arrayCards, setArrayCards] = useState([]) //Закрытые карточки
  const [openCards, setOpenCards] = useState([]) //Открытые карточки

  const [matched, setMatched] = useState([]) //Совпадения
  const [moves, setMoves] = useState([]) //Шаги

  const paitOfArrayCards = [...initialArrayCards, ...initialArrayCards] //2 массива карточек

  const shuffle = (array) => {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex


    while (currentIndex !== 0){
      randomIndex = Math.floor (Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    
    }
    return array
  }


  return(
    <div className='App'>
  
    </div>
    
  )
}

export default App

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


    while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    
    }
    return array
  }

    useEffect(() =>{
      setArrayCards(shuffle(paitOfArrayCards))
    },[]) //[зависимости] Пусто значит при загрузке страницы сработает

  return(
    <div className='App'>
        {console.log({arrayCards})}
        <p className='number-of-strokes'>Сделано ходов {moves}</p>
        <div className='cards'>
            {arrayCards.map((item, index, number) => {
              //Вынести в компонент
              let isFlipped = false;

              if (openedCards.includes(index)) isFlipped = true
              if (matched.includes(item.id)) isFlipped = true
              
              //лучше не index
              return(
                <div key={index} className={`card ${isFlipped ? 'flipped' : ''}`}> 
                  <div>
                    <div>
                      <item.img className='size-24'  />
                    </div>

                    <div>
                      <QuestionMarkCircleIcon className='size-24' />
                    </div>
                  </div>
                </div>
              )

          } )}
        </div>
    </div>
    
  )
}

export default App

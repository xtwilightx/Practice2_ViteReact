import { useState,useEffect } from "react"
import {initialArrayCards} from '../constants/Cards';


export const useGameLogic = () => {  
const [arrayCards, setArrayCards] = useState([]) 
const [openedCards, setOpenCards] = useState([]) 

const [matched, setMatched] = useState([]) 
const [moves, setMoves] = useState(0)

const paitOfArrayCards = [...initialArrayCards, ...initialArrayCards]

  useEffect(() => {
    const uniquePairsCount = initialArrayCards.length;
    if (matched.length / 2 === uniquePairsCount) {
      setTimeout(() => {
        alert(`Поздравляем! Вы победили за ${moves} ходов!`);
        window.location.reload();
      }, 1000);
    }
  }, [matched]);

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

const flipCard = (index) => {
  setOpenCards(opened => [...opened, index]);
}


useEffect(() => {
  if (openedCards.length < 2){
    return;
  }

  if (openedCards.length === 2){
    const [firstIndex, secondIndex] = openedCards;
    const firstCard = arrayCards[firstIndex];
    const secondCard = arrayCards[secondIndex];
    setMoves(prevMove => prevMove + 1);
    if (firstCard.id == secondCard.id){
      setMatched(match => [...match, firstCard.id, secondCard.id]);
      setOpenCards([]);
    }
    
    else{
      const timer = setTimeout(() =>
    {  setOpenCards([]);
    }, 500);
    }
  }

}, 
[openedCards]);

return {
    arrayCards,
    openedCards,
    matched,
    moves,
    flipCard
};
};
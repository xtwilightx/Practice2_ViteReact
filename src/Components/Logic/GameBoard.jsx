import { GameCard } from "../UI/GameCard/GameCard";
import { useState } from "react";
import { initialArrayCards, Icons } from "../../constants/Cards"
import { useGameLogic } from "../../hooks/useGameLogic";


export default function GameBoard() {

  const { arrayCards, openedCards, matched, moves, flipCard } = useGameLogic();

  return (
    <>
      <p className='number-of-strokes'>Сделано ходов {moves}</p>
      <div className='cards flex flex-wrap justify-center gap-4'>
        {arrayCards.map((item, index) => {

          return (
            <GameCard onClick={flipCard} key={`${item.id}-${index}`} item={item} index={index} isFlipped={openedCards.includes(index) || matched.includes(item.id)} />
          );
        })}
      </div>
    </>
  )
}
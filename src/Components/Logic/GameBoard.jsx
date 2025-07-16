import { GameCard } from "../UI/GameCard/GameCard";
import { useGameLogic } from "../../hooks/useGameLogic";


export default function GameBoard() {

  const { arrayCards, openedCards, matched, moves, flipCard } = useGameLogic();

  return (
    <>
    <div className="flex flex-col items-center">
      <p className='number-of-strokes'>Сделано ходов {moves}</p>
      <div className='cards grid grid-cols-4 gap-2 w-fit mx-auto'>
        {arrayCards.map((item, index) => {

          return (
            <GameCard onClick={flipCard} key={`${item.id}-${index}`} item={item} index={index} isFlipped={openedCards.includes(index) || matched.includes(item.id)} />
          );
        })}
      </div>
    </div>
    </>
  )
}
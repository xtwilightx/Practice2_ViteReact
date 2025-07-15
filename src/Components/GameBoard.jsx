import { GameCard } from "./UI/GameCard/GameCard";
import { useState } from "react";


export default function GameBoard() {

    

    return (
        <>
            <div className='flex flex-col gap-4'>

                <div className='flex gap-4'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>

                <div className='flex gap-4'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>

                <div className='flex gap-4'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>

                <div className='flex gap-4'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>

            </div>
        </>
    )
}
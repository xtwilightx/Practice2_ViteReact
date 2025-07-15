import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';



export const GameCard = ({item, index, isFlipped, onClick}) => {
const IconComponent = item.img;

return(
<div
key={index} 
className={`card relative w-32 h-32 ${isFlipped ? 'flipped' : ''}`} >
<div className="w-full h-full flex items-center justify-center">
  <IconComponent className='size-20 text-white rounded-xl bg-slate-400' />
</div>

<div onClick={() => onClick(index)} className={`absolute inset-0 flex items-center justify-center 
                 ${isFlipped ? 'hidden' : ''}`}> 
  <QuestionMarkCircleIcon className='size-20 text-white rounded-xl bg-slate-400' />
</div>
</div>
)
}
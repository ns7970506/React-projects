import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full  w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <p className='text-lg leading-normal mt-auto text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio dolor ea quo in ratione.</p>
            <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full text-lg'>{props.tag} </button>
            <div className='absolute bottom-11 right-9'>
           <MoveRight ></MoveRight>
           </div> 
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
import { MoveRight } from 'lucide-react'
import React from 'react'
import RightCardContent from './RightCardContent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-full overflow-hidden  relative rounded-4xl '>
        <img className='h-full w-full object-cover 'src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag}></RightCardContent>
      

    </div>
  )
}

export default Rightcard
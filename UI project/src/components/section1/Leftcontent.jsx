import { MoveUpRight } from 'lucide-react'
import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'
const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col w-1/3  '>
      <Hero></Hero>
      <Arrow></Arrow>
    </div>
  )
}

export default Leftcontent
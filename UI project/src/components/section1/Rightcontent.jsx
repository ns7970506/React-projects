import React from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props) => {
  return (
    <div className='h-full   flex flex-nowrap gap-10 w-2/3 px-3 py-3  '>
        {props.users.map(function(elem,idx){
          return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default Rightcontent
import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center justify-between h-[90vh]  px-18 gap-10 '>
        <Leftcontent></Leftcontent>
        <Rightcontent users={props.users}></Rightcontent>

    </div>
  )
}

export default Page1content
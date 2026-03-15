import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
  const param = useParams()
  console.log(param);
  
  return (
    <div>
        <h1>{param.id} Courses detail Pages</h1>
    </div>
  )
}

export default CoursesDetail
import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {

  const users = [
    {
      img :"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
      intro:"",
      tag:"Underserved"
    },
 
    {
      img: "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG1vZGVsfGVufDB8fDB8fHww",
      intro:"",
      tag:"Deligent"
    }
  ]
  return (
    <div>
      <Section1 users={users}></Section1>
      <Section2></Section2>
    </div>
  )
}

export default App
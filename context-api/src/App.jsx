

import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react'

function App() {
 
  const [theme, setTheme] = useState('light')

  return (
    <>
     <Navbar theme={theme}/>
    </>
  )
}

export default App

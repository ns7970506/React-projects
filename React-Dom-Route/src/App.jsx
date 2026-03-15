import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
function App() {
 

  return (
    <>
     <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}></Route>
      </Routes>
     </div>
    </>
  )
}

export default App


import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import Kids from './Pages/Kids'
import CoursesDetail from './Pages/CoursesDetail'
import Navigates from './Pages/Navigates'
function App() {
     

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navigates/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:id' element={<CoursesDetail/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}></Route>
        <Route path='women' element={<Women/>}></Route>
        <Route path='kids' element={<Kids/>}></Route></Route>
        <Route path='*' element={<NotFound/>}></Route>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

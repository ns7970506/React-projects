import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
 
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  const  getData =async() => {

   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=25`)    
   setUserData(response.data)
  
   
   }
   useEffect (function(){
    getData()
   },[index])

   let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading...</h3>
   if(userData.length >0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
       <Card elem={elem}></Card>
      </div>
    })
   }
  return (
   <div className='bg-black h-screen text-white p-4 overflow-auto ' >
    <h1 className='fixed text-6xl'>{index}</h1>
    <button onClick={getData} className="bg-green-600 text-white px-4 py-2 rounded mb-3 active:scale-95">Get Data</button>
     <div  className='flex flex-wrap gap-5 h-50'>
      {printUserData}
     </div>

     <div className='flex absolutre mt-200 ml-175 p-4 gap-6 '>
      <button  className='bg-amber-400 text-black rounded px-4 py-2 text-bold ' onClick={()=>{
        if(index>1){
        setindex(index-1)
        setUserData([])
        }
      }}>Prev</button>
      <h2>page :{index}</h2>
      <button className='bg-amber-400 text-black rounded px-4 py-2 ' onClick={()=>{
        setindex(index+1)
        setUserData([])
        
      }}>Next</button>
     </div>
    </div>
  )
}

export default App

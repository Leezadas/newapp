//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
         if(!response.ok){
          throw new Error('network error')
        } 
        const data = await response.json();
        setData(data);
        console.log(data);

      }catch{
        console.log('error');
      }


    }

    fetchData(); 

    /* fetch('https://jsonplaceholder.typicode.com/posts'
    )
     .then((response)=>response.json)
     .then(data=>setData(data))
   */

  },[])
  console.log(data)
  return (
    <div>
    {data.map((d) => (
      <div key={d.id}>
        <h3>{d.id}</h3>
        <p>{d.title}</p>
      </div>
    ))}
  </div>

    );
}

export default App;


import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
function App() {
  const[data,setdata]=useState([])
 const fetchdata=()=>{
    axios.get('http://127.0.0.1:8000/admin/back_end/').then((response)=>
      setdata(response.data)
    
    )

  }
  useEffect(()=>{
    fetchdata()
  })
  return (
    <div className="App">
      {
      data.map((da)=>{
      return <div>
        <h1>{da.firstName}</h1>
        <h1>{da.lastName}</h1>
        <h1>{da.grade}</h1>
       
      </div>


      })



      } 
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const baseUrl = 'http://localhost:3000'

  const getAppi = () => {
    fetch(`${baseUrl}/pokemones`)
    .then(response => response.json())
    .then(data => setData(data))
  }

  return (
    <>
      <h1>Appi pokemones</h1>    
      <button
      onClick = {() => getAppi()}
      >Obtener pokemones</button>
      <ul>
        {
          data.map((item) => (
            <li key = {item.id}>{item.nombre}</li>
          ))
        }
      
      </ul> 
    </>
  )
}

export default App

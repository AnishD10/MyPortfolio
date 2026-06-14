import { useState,React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

const [color,setColor] = useState("red")


  return(
    <>
    <div className='main'>

    The original color is {color}

    <br></br>

    {setColor("blue")} 

    The changed color is {color}

    </div>
    </>
  )
}

export default App

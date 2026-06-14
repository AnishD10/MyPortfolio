import { useState,React } from 'react'


function App() {

const [color,setColor] = useState("red")


const switchColor = () => {  if(color === "red"){
    setColor("blue")
  }else{
    setColor("red")
  }
}


  return(
    <>
    <div className={`text-${color}-500`}>

    The original color is {color}
  

    <br></br>

    <button onClick={switchColor}>
      Change Color
    </button>

    The changed color is {color}

    </div>
    </>
  )
}

export default App

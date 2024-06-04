import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight]=useState(70);
  const [height,setHeight] =useState(140);
  function onWeightChange(event){
    setWeight(event.target.value);
  }
  function onHeightChange(event){
    setHeight(event.target.value);
  }
  const BMI=useMemo(()=>{
    const calculateHeight=height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height])
  return(
    <main>
       <h1>BMI Calculator</h1>
       <div className='input-section'>
        <p className='output-slider'>Weight: {weight}</p>
        <input type="range" className="input-silder" 
        step="1"
        min="40"
        max="200"
        onChange={onWeightChange}/>
        <p className='output-slider'>Height: {height}</p>
        <input type="range" className='input-slider'
        min="140"
        max="220"
        onChange={onHeightChange}/>
       </div>
       <div>
        <div className="output-section">
          <p>BMI is :</p>
          <p className='output'>{BMI}</p>
        </div>
       </div>
    </main>
   
  )
}

export default App

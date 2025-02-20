import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]= useState(15)
  // let counter =15

  const addValue = () => {
    // console.log("clicked",counter);
    //  counter = counter+1
    setCounter((prevCounter) => {
      if (prevCounter >= 20) return 20; // Ensures it doesn't go above 20
      return prevCounter + 1;
    });
  };


  const removevalue=()=>{
    // console.log("clicked",counter);
    setCounter((prevCounter) => {
      if (prevCounter <= 0) return 0; // Ensures it doesn't go below 0
      return prevCounter - 1;
    });
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br></br>
      <button onClick={removevalue}>Remove value{counter}</button>
    </>
  )
}

export default App

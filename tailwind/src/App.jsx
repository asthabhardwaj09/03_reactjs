import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // let myobj={
  //   username:"astha",
  //   age:"21"
  // }
  // let newarray=[12,23]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card channel="astha" btnText="visitme" />
      <Card/>
    </>
  )
}

export default App

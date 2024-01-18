import { useState } from 'react'
import './App.css'
import Cards from '../components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let obj = {                      
    username: "Tommy",       
    age: "8"
  }

  let arr = [1, 22, 23]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>tailwind</h1>

      {/* <Cards breed='pomerenian' myobj = {obj}  myArr= {arr} />   //Pass Object like this */}
      {/* <Cards username='jack@123' /> */}
      <Cards username='jack@123' clickMe="Click Me ->" />

    </>
  )
}

export default App

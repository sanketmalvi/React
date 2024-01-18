import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5
 
  const addValue = () => {
    // console.log(`Counter`, Math.random());
    // counter = counter + 1
    setCounter(counter + 1)


    // Interview Que.- what will be the output if doing like this
    setCounter(counter + 1)
    setCounter(counter + 1)     //It will count only 1 time
    setCounter(counter + 1)     //Because of React fibre it will wrap all send in batches
    setCounter(counter + 1)


    // If want to update like above one then right approach is -
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    setCounter(counter=0)
  }

  return (
    <>
      <h1>React</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <br />
      <br />
      <button onClick={resetValue}>reset</button>
    </>
  )
}

export default App



// UI Updation using hooks




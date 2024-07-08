import { useState } from 'react' // there are several hooks provided by react for eg: usestate is a hook
// helps to change value at once for more than one places and takes the responsibility to change values in UI
//hooks can be imported as: import {useState, useEffectEvent , ...} from 'react'                           
import './App.css'

//created a counter that changes the values from 15 and stop if value > 30 or value < 0
function App() {
  //let counter = 15;

  let [counter, setCount] = useState(15) //useState(arg can be anything doesnt matter)
  //[names can be anything]
  const addValue = ()=>{
    //console.log('clicked', counter)
    counter = counter + 1;
    if(counter > 30){
      alert("counter exceeded limit")
      setCount(counter = 30)
    }         
    setCount(counter)
  }

  const minusValue = ()=>{
    // console.log('clicked', counter)
    counter = counter - 1;
    if(counter < 0){
      alert("counter value can not be negative")
      setCount(counter = 0)
    }
    setCount(counter)
  }

  return (
    <>
      <h1>A Counter</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addValue}> Increase Value {counter} </button>
      <br />
      <br />
      <button onClick={minusValue}> Decrease Value {counter} </button>
      <h2> Decounter Value : {counter} </h2>
    </>
  )
}

export default App

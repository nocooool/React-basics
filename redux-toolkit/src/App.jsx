import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  //redux is the core library 
  //react-redux is the bridge that connects the library

  //step1 : make store (single source of truth)
    //includes confifureStore
    //tell it about where are the reducers
  //step2 : make the slice 
    //1. name 
    //2.initialState
    //3.reducers(made here) - gets access of state and actions look into Todoslice.js

  return (
    <>
      <h1>Learn redux toolkit</h1>
      <Addtodo />
      <Todo />
    </>
  )
}

export default App

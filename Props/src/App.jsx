import { useState } from 'react'
import reactLogo from 'src/assets/react.svg'
import viteLogo from '/vite.svg'
import 'src/App.css'
import Card from './components/card'

function App() {
  let myobj = {
    usename: "lol",
    age: 21,
  }

  let newArr = [1,2,3]
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'> Tailwind Test </h1>
      
      <br />

      {/* props will in objects format so one can pass anything but in an enclosed obj */}
      <Card username = 'Ryan Gosling' btntext = 'more about gosling' href = 'https://publish.purewow.net/wp-content/uploads/sites/2/2023/06/gosling-universal.jpg?resize=720%2C780'/>
      
      <br />

      <Card  username = 'Ryan Reynolds' btntext = 'more about reynolds' href = 'https://variety.com/wp-content/uploads/2020/08/ryan-reynolds.jpg?w=1000'/>

      {/* <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/06/gosling-universal.jpg?resize=720%2C780"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"/>

      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">Delba</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
      </div>
      
      <br />

      <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://variety.com/wp-content/uploads/2020/08/ryan-reynolds.jpg?w=1000"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"/>

      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">Delba</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
      </div> */}
    </>
  )
}

export default App

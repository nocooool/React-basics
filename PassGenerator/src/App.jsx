import { useState , useCallback , useEffect, useRef } from 'react'

function App() {
  const [length , setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed , setcharallowed] = useState(false);
  const [pass , setpass] = useState("");

  //useref hook
  const passref = useRef(null)

  // use Callback: used for optimization it calls the function inside it 
  //when the dependencies are changed and returns a memorized function 
  const passgenerator = useCallback(()=>{
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*-_+=~`"

    for (let i = 1; i <= length; i++){
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char)
    }    

    setpass(pass)

  } , [length, numberallowed ,charallowed, setpass])
  //in this we passed the fn , dependencies (on the basis of dependecies we change things)
  //in usecallback if there is any chnage in the dependecies then optimize the method

  //copy to clipboard
  const copied = useCallback(()=>{
    passref.current?.select() //gives an effect of selection by highlighting
    passref.current?.setSelectionRange(0, 10) //set the range for selection
    window.navigator.clipboard.writeText(pass)//this copies the pass to clipboard
  } , [pass])

  useEffect(()=>{
    passgenerator()
  }, [length, numberallowed ,charallowed, passgenerator] ) 
  //in useeffect if there is any change in the dependencies then rerun the func

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={pass}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passref}
            />
            <button 
            onClick={copied}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300  '
            >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={50}
            className='cursor-pointer'
            onChange={(e)=> {setlength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {numberallowed} 
            id="numberInput" 
            onChange={()=>{
              setnumberallowed((prev) => !prev )//to keep changing the value to true and false using prev value
            }}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {charallowed} 
            id="charInput" 
            onChange={()=>{
              setcharallowed((prev) => !prev )
            }}/>
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>CUSTOM APP</h1>
    </div>
  )
}
//everything one writes gets converted into the object format after parsing

/*const reactElement = {
  type: 'a',
  props: {
      href: 'htpps://google.com',
      target: '_blank'
  },
  Children: 'click me to visit google'
}*///cutom object cannot be processed as the react js has its own methods and names for keys and value

//lets take another example but it will be according to the desired syntax of react
const anotherElement = (
  <a href="hhtps://google.com" target='_blank'> visit google link </a>
)

//acutal proper syntax will be:
// const name = React.createElement(
//   first - tag (eg: <p></p>, h1, etc)
//   second - an object (important if no values give an empty object)
//   third - direct text (displayed text)
// ) 
// below is an example
const anotherUser = 'nakul' //use of evaluated expression
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'visit the site google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<MyApp /> //can be executed as MyApp()--(but dont do this)
  //reactElement (this cant be passed as the syntax desired is incorrect)
  //anotherElement //with proper sytax it will be converted into the object
  reactElement //with corrected syntax

  //<App />
)

//object does not have any kind of evaluation so there can be no evaluation in the evaluated expression

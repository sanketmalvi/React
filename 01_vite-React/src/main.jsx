import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const element2 = "Hello"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit',
  element2
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
  <App/>
  // <MyApp />
  // anotherElement
  // reactElement

)

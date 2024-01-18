import React from 'react'

// const Cards = (props) => {
//     console.log("props", props);

// OR   
const Cards = ({username, clickMe = 'visit Me'}) => {        //visitMe is default response  
console.log(username);
    
  return (
    < div className="relative h-[400px] w-[300px] rounded-md">
    <img 
    src="https://images.unsplash.com/photo-1705179910581-7f3465999f05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Hi, I am Jack, I am a Shih Tzu breed
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {clickMe}
    </button>
  </div>
</div>
  )
}

export default Cards
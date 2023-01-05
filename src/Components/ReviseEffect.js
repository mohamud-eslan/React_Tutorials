import React, { useState, useEffect } from 'react'

function ReviseEffect() {
    const [increment, setIncrement] = useState(0)
    const [count, setCount] = useState(0)

     useEffect(() =>{
        console.log(`you clicked ${increment} times`);
     },[increment])

     useEffect(() => {
        console.log(`you clicked ${count} times`);
     },[count])
   
  return (
    <div>
        <h1>increment-0</h1>
        <button onClick={() => setIncrement(increment + 1)}>click one</button>
        <button onClick={() => setCount(count + 1)}>click two</button>
    </div>
  )
}

export default ReviseEffect
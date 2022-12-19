import React, { useState } from 'react'

function Learning() {
    const [count, setCount] = useState(4)
    const handleClick = () =>{
        setCount()
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Learning
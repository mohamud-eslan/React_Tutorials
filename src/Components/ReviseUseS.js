import React, { useState } from 'react'

function ReviseUseS() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((PrevCount) => PrevCount + 1)
    }
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ReviseUseS
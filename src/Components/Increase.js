import React, { useState } from 'react'

function Increase() {
    const [number, setNumber] = useState(0)

    const IncreaseNum = () =>{
        setNumber(number + 1)
    }
    const increaseAsy = () =>{
        setTimeout(() =>{
            setNumber((PrevNumber) => PrevNumber + 1)
        },2000)
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={IncreaseNum}>IncreaseNum</button>
        <button onClick={increaseAsy}>increaseAsy</button>
    </div>
  )
}

export default Increase
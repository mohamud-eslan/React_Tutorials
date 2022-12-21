import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

function Increase() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('mohamud')


    const IncreaseNum = () =>{
        setNumber((PrevNumber) => PrevNumber + 1)
    }
    const IncreaseAsy = () =>{
        setTimeout(() =>{
            setNumber((PrevNumber) => PrevNumber + 1)
        },2000)
    }
    
  return (
    <div>
        <h1>{number}</h1>
        <h1>{name}</h1>
        <button onClick={IncreaseNum}>IncreaseNum</button>
        <button onClick={IncreaseAsy}>IncreaseAsy</button>
        <button onClick={() =>setName('linconl')}>names</button>
    </div>
  )
}

export default Increase
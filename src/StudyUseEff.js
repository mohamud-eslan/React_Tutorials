import React, { useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';

function StudyUseEff() {
   // const [number, setNumber] =useState(0);
     const [name, setName] = useState('');
     const [state, setState] = useState({
        name: "",
        selected: false
     })

     useEffect(() =>{
        console.log('the state changed and useEffect runs');
    },[state])
     const handleAdd = () =>{
        setState((Prev) =>({...Prev, name}))
     }

     const handleSelect = () =>{
        setState((Prev) =>({...Prev, selected: true}))
     }


    
    // console.log('component rendered');
  return (
    <div>
        {/* <span>you clicked {number} times</span>
        <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button> */}
        <input onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleAdd}>add name</button>
        <button onClick={handleSelect}>select</button>
        {`{
            name: ${state.name},
            selected: ${state.selected.toString()}
        }`}
    </div>
  )
}

export default StudyUseEff
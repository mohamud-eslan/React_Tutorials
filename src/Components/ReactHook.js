import React, { useState } from 'react'

function ReactHook() {
    const [name, setName] = useState('');
    
  return (
    <div>
        <form>
            <input  
            type='text'
            value={name}
            onChange={(e) =>setName(e.target.value)}
            placeholder='enter your name'
            
            />
            <p>{name}</p>
        </form>
    </div>
  )
}

export default ReactHook;
import React, { useState, useEffect } from 'react'

function EffectHook() {
    const  [count, setCount] = useState(0);
    const  [count2, setCount2] = useState(0);


    useEffect(() => {
      console.log(`you have clicked the button ${count} times`)
    
      
    }, [count]);

    useEffect(() => {
      console.log(`you have clicked the second button ${count2} times`)
    
      
    }, [count2]);
    
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>click me</button>
        <button onClick={() => setCount2(count2 + 1)}>click me 2</button>
    </div>
  )
}

export default EffectHook
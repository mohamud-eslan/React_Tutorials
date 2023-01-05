import React, { useState, useEffect } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

function ReviseEffect() {
    const [count, setCount] = useState(0)
    const tick = () =>{
        setCount(PrevCount => PrevCount + 1)
    }

    useEffect(() => {
        const internval = setInterval(tick, 1000)
        return() => {
            clearInterval(internval)
        }
    }, [count])

    
   
  return (
    <div>
        {count}
    </div>
  )
}

export default ReviseEffect
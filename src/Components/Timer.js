import React, {useState, useEffect, useRef} from 'react'

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
       intervalRef.current = setInterval(() =>{
        setTime(prevTime => prevTime + 1)
      }, 1000)
    
      return () => {
        clearInterval(intervalRef.current)
      }
    }, [])
    
  return (
    <div> hook Time {time}
    <button onClick={() => clearInterval(intervalRef.current)}>clear Time hook</button>
    </div>
  )
}

export default Timer
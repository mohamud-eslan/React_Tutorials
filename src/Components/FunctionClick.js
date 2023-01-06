import React from 'react'

function FunctionClick() {
  function  handleClick() {
        console.log('button clicked');
    }

  return (
    <div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default FunctionClick
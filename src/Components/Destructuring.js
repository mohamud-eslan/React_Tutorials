import React from 'react'

const Destructuring = (props) =>{
    console.log(props);
  return (
    <div>
        <h1>Hello {props.name} as well as {props.heroName}</h1>
    </div>
  )
}

export default Destructuring
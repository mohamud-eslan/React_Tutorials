import React from 'react'

function Table() {
    const users = [
        {name: 'mohamud', age: '35', location: 'addis ababa'},
        {name: 'lincoln', age: '30', location: 'nairobi'},
        {name: 'musas', age: '25', location: 'london'}
      ]
  return (
    <div>
         {users.map((user) => (
        <div>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            <p>{user.location}</p>
        </div>

))} 
    </div>
  )
}

export default Table;
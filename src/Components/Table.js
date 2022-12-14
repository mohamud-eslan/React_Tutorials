import React from 'react'
import './Table.css'


function Table() {
    const users = [
        {userName: 'moh144', name: 'mohamud', posts: '10', comments: '11', country: 'ethiopia'},
        {userName: 'lincon111', name: 'lincoln', posts: '13', comments: '8', country: 'kenya'},
        {userName: 'musas43',  name: 'musas', posts: '12', comments: '14', country: 'uk', isActive: true}
      ]
  return (
    <div className='table'>
         {users.map((user) => (
        <div>
            <h1>{user.userName}</h1>
            <p>{user.name}</p>
            <p>{user.posts}</p>
            <p>{user.comments}</p>
            <p>{user.country}</p>
            {user?.isActive && <h1>{user.name} is active</h1>}
        </div>
))} 
    </div>
  )
}

export default Table;
import React from 'react'
import './Table.css'


function Table() {
    const users = [
      
      {name: 'mohamud', age: '36', location: 'ethiopia', img: "https://picsum.photos/id/1/200/400"},
      {name: 'linconl', age: '30', location: 'kenya', img: "https://picsum.photos/id/1/200/300"},
      {name: 'john', age: '25', location: 'tanzania', img: "https://picsum.photos/id/1/300/500"},
    ]
      return (
    <div className='container'>
      <table className='table'>
        <thead className='table-light'>
          <th>profile</th>
          <th>name</th>
          <th>age</th>
          <th>location</th>
        </thead>
        <tbody>
          {users.map((user) =>(
            <tr>
              <td>
                <img src={user.img}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: "50%"
                }}
                alt={user.name}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
         {/* { {users.map((user) => (
        <div>
            <h1>{user.userName}</h1>
            <p>{user.name}</p>
            <p>{user.posts}</p>
            <p>{user.comments}</p>
            <p>{user.country}</p>
             
        </div>
 ))}  */}
    </div>
  )
}

export default Table;
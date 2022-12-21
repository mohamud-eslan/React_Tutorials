import React from 'react'
import './Table.css'
import {Table} from 'react-bootstrap'


function TableOne() {
    const users = [
      
      {name: 'mohamud', age: '36', location: 'ethiopia', img: "https://picsum.photos/id/1/200/400"},
      {name: 'linconl', age: '30', location: 'kenya', img: "https://picsum.photos/id/1/200/300"},
      {name: 'john', age: '25', location: 'tanzania', img: "https://picsum.photos/id/1/300/600"},
    ]
      return (
    <div>
      <Table striped>
        <thead>  
          <th>no:</th>
          <th>profile</th>
          <th>name</th>
          <th>age</th>
          <th>location</th>
        </thead>
        <tbody>
          {users.map((user, i) =>(
            <tr key={user.name}>
              <td>{i + 1}</td>
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
      </Table>
        
    </div>
  )
}

export default TableOne;
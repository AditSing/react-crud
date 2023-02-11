 import React, {useState, useEffect } from 'react'
 import axios from "axios"
 import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() => {
    const response = await axios.get('http://localhost:5000/users')
    console.log(response.data)
    setUser(response.data)
  }
  
  const deleteUser = async(id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`)
        getUsers()
    } catch (error) {
        console.log(error)
    }
}

  return (
  <div className="columns">
    <div className="column is-half">
      <Link to="add" className="button is-success">Add New</Link>
      <table className="table is_striped is fullwidth mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`edit/${user._id}`} className="button is-info is-small">Edit</Link>
                <button className="button is-danger is-small" onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
 
export default UserList
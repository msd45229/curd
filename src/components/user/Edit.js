import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    mobileno: '',
  })
  const { name, username, email, mobileno } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:4500/user/${id}`)
    setUser(result.data)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:4500/user/${id}`, user)
    navigate('/')
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Mobile Number"
              name="mobileno"
              value={mobileno}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block form">
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit
